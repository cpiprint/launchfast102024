import { execSync } from 'child_process'
import crypto from 'crypto'
import fs from 'fs/promises'
import os from 'os'
import path from 'path'
import {
	intro,
	outro,
	spinner,
	confirm,
	isCancel,
	cancel,
	select,
	text,
} from '@clack/prompts'
import toml from '@iarna/toml'
import { $, type ResultPromise } from 'execa'
import isUnicodeSupported from 'is-unicode-supported'
import open from 'open'
import parseGitHubURL from 'parse-github-url'
import color from 'picocolors'

const unicode = isUnicodeSupported()
const s = (c: string, fallback: string) => (unicode ? c : fallback)
const S_STEP_SUBMIT = s('◇', 'o')
const S_STEP_ACTIVE = s('◆', '*')
const S_BAR = s('│', '|')
const S_BAR_H = s('─', '-')
const S_CORNER_TOP_RIGHT = s('╮', '+')
const S_CONNECT_LEFT = s('├', '+')
const S_CORNER_BOTTOM_RIGHT = s('╯', '+')

const escapeRegExp = (string: string) =>
	// $& means the whole matched string
	string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getRandomString = (length: number) =>
	crypto.randomBytes(length).toString('hex')
const getRandomString32 = () => getRandomString(32)

type Context = {
	steps: {
		current: number
		total: number
	}
	progress: string
	rootDirectory: string
	primaryRegion: string
	appName: string
	repoURL: string
}
const ctx: Context = {
	steps: {
		current: 0,
		total: 0,
	},
	progress: '',
	rootDirectory: '',
	primaryRegion: '',
	appName: '',
	repoURL: '',
}
const steps: (() => void | Promise<void>)[] = []

export default async function main({
	rootDirectory,
}: {
	rootDirectory: string
}) {
	ctx.rootDirectory = rootDirectory
	steps.push(
		...[
			introStep,
			setupAppHandle,
			setupEnvFile,
			setupGitIgnore,
			removeUnnecessaryFiles,
			ensureMainBranch,
			setupAppStep,
			askSetupDeployInfraStep,
			askToOpenIDEStep,
			outroStep,
		],
	)

	updateProgressIndicator(2)

	try {
		while (steps.length > 0) {
			const step = steps.shift()!
			const result = step()
			if (result instanceof Promise) {
				await result
			}
		}
	} catch (err) {
		console.error(
			`\nLooks like something went wrong. Sorry about that.\nCheck the docs for instructions on how to get setup yourself https://launchfast.pro/docs.\n`,
		)
		if (err instanceof Error) {
			console.error(err.message)
		} else {
			console.log(err)
		}
	}
}

const updateProgressIndicator = (
	totalIncrement: number = 0,
	currentIncrement: number = 1,
) => {
	ctx.steps.total += totalIncrement
	ctx.steps.current += currentIncrement
	ctx.progress = `Step ${ctx.steps.current}/${ctx.steps.total}: `
}

const introStep = () => {
	intro(`Let's get you set up 🚀`)
}

const setupAppHandle = async () => {
	const { rootDirectory } = ctx
	const PKG_PATH = path.join(rootDirectory, 'package.json')
	const FLY_TOML_PATH = path.join(rootDirectory, 'fly.toml')
	const DIR_NAME = path.basename(rootDirectory)
	const SUFFIX = getRandomString(2)
	const APP_NAME = (DIR_NAME + '-' + SUFFIX)
		// get rid of anything that's not allowed in an app name
		.replace(/[^a-zA-Z0-9-_]/g, '-')
		.toLowerCase()

	// Read the fly.toml and package.json files
	const [flyTomlContent, packageJsonString] = await Promise.all([
		fs.readFile(FLY_TOML_PATH, 'utf-8'),
		fs.readFile(PKG_PATH, 'utf-8'),
	])

	// Replace the placeholder in the fly.toml file
	const newFlyTomlContent = flyTomlContent.replace(
		new RegExp(escapeRegExp('launch-fast-template'), 'g'),
		APP_NAME,
	)
	// Replace the name in the package.json file
	const packageJson = JSON.parse(packageJsonString)
	packageJson.name = APP_NAME
	delete packageJson.author
	delete packageJson.license

	// Write the updated files back to disk
	await Promise.all([
		await fs.writeFile(FLY_TOML_PATH, newFlyTomlContent),
		await fs.writeFile(PKG_PATH, JSON.stringify(packageJson, null, 2)),
	])
}

const setupEnvFile = async () => {
	const { rootDirectory } = ctx
	const EXAMPLE_ENV_PATH = path.join(rootDirectory, '.env.example')
	const ENV_PATH = path.join(rootDirectory, '.env')

	const env = await fs.readFile(EXAMPLE_ENV_PATH, 'utf-8')

	const newEnv = env
		.replace(/^SESSION_SECRET=.*$/m, `SESSION_SECRET="${getRandomString(16)}"`)
		.replace(
			/^INTERNAL_COMMAND_TOKEN=.*$/m,
			`INTERNAL_COMMAND_TOKEN="${getRandomString(16)}"`,
		)

	await fs.writeFile(ENV_PATH, newEnv)
}

const setupGitIgnore = async () => {
	const { rootDirectory } = ctx
	await fs.copyFile(
		path.join(rootDirectory, 'remix.init', 'gitignore'),
		path.join(rootDirectory, '.gitignore'),
	)
}

const removeUnnecessaryFiles = async () => {
	const { rootDirectory } = ctx
	await Promise.all([
		fs.rm(path.join(rootDirectory, 'LICENSE.md')),
		fs.rm(path.join(rootDirectory, 'CONTRIBUTING.md')),
	])
}

const ensureMainBranch = async () => {
	const { rootDirectory } = ctx
	let currentBranch = ''

	try {
		currentBranch = execSync('git symbolic-ref --short HEAD', {
			cwd: rootDirectory,
			stdio: ['ignore', 'pipe', 'ignore'],
		})
			.toString()
			.trim()
	} catch {
		// handle error silently
	}

	if (currentBranch !== 'main') {
		execSync('git branch -m main', {
			cwd: rootDirectory,
			stdio: ['ignore', 'ignore', 'ignore'],
		})
	}
}

const setupAppStep = async () => {
	const { rootDirectory } = ctx
	if (!process.env.SKIP_SETUP) {
		await boxedOutput({
			start: `Generating prisma client ${color.dim(`(npx prisma generate)`)}`,
			subprocess: $({
				shell: true,
				stdout: 'pipe',
				stderr: 'pipe',
				cwd: rootDirectory,
			})`npx prisma generate`,
		})
		await boxedOutput({
			start: `Applying prisma migrations ${color.dim(`(npx prisma migrate deploy)`)}`,
			subprocess: $({
				shell: true,
				stdout: 'pipe',
				stderr: 'pipe',
				cwd: rootDirectory,
			})`npx prisma migrate deploy`,
		})
		await boxedOutput({
			start: `Seeding local DB ${color.dim(`(npx prisma db seed)`)}`,
			subprocess: $({
				shell: true,
				stdout: 'pipe',
				stderr: 'pipe',
				cwd: rootDirectory,
			})`npx prisma db seed`,
		})
		await boxedOutput({
			start: `Installing Playwright ${color.dim(`(npx playwright install)`)}`,
			subprocess: $({
				shell: true,
				stdout: 'pipe',
				stderr: 'pipe',
				cwd: rootDirectory,
			})`npx playwright install`,
		})
	}
	if (!process.env.SKIP_FORMAT) {
		await boxedOutput({
			start: `Formatting code ${color.dim(`(npm run format -- --log-level warn)`)}`,
			subprocess: $({
				shell: true,
				stdout: 'pipe',
				stderr: 'pipe',
				cwd: rootDirectory,
			})`npm run format -- --log-level warn`,
		})
	}
	process.stdout.write(`${color.green(S_STEP_ACTIVE)}  Your app is ready 🎉\n`)
}

const askSetupDeployInfraStep = async () => {
	if (!process.env.SKIP_DEPLOYMENT) {
		const extraSteps = 5
		const shouldSetup = await confirm({
			message: `${ctx.progress}LaunchFast deploys to Fly.io. You'll need a credit card but you'll only be charged if you go above $5/mo, which is enough for 3 starter apps. Do you want to setup deployment infrastructure now?`,
			active: `Yes (+${extraSteps} steps)`,
			inactive: `No, I'll read the docs and do it later`,
		})
		if (isCancel(shouldSetup)) {
			cancel(`Operation canceled`)
			process.exit(0)
		}
		if (shouldSetup) {
			steps.unshift(
				...[
					checkCreditCardStep,
					checkFlyCLIStep,
					ensureLoggedInWithFly,
					confirmUserStep,
					getPreferredRegion,
					setupDeployment,
					askDeployNow,
					askSetupGitHubActions,
				],
			)
			updateProgressIndicator(extraSteps)
		} else {
			updateProgressIndicator()
		}
	}
}

const checkCreditCardStep = async () => {
	let addedCreditCardToFly: symbol | boolean = false
	do {
		addedCreditCardToFly = await confirm({
			message: `${ctx.progress}Did you add a credit card to Fly (next step will fail if you haven't)?`,
		})
		if (isCancel(addedCreditCardToFly)) {
			cancel(`Operation canceled`)
			process.exit(0)
		}
		if (!addedCreditCardToFly) {
			note(
				`Go to https://fly.io/dashboard and add your credit card.
You'll only be charged if you go above $5/mo.
This is enough for 3 starter apps.`,
				`Ok, let's wait.`,
			)
		}
	} while (!addedCreditCardToFly)
	updateProgressIndicator()
}

const checkFlyCLIStep = async () => {
	const hasFly = await $`fly version`.then(
		() => true,
		() => false,
	)
	if (!hasFly) {
		const platform = os.platform()
		const installCommand =
			platform === 'darwin' || platform === 'linux'
				? `curl -L https://fly.io/install.sh | sh`
				: `iwr https://fly.io/install.ps1 -useb | iex`
		await boxedOutput({
			start: `You don't have Fly's CLI. Installing it ${color.dim(`(${installCommand})`)}`,
			subprocess: $({
				shell: true,
				stdout: 'pipe',
				stderr: 'pipe',
			})`${installCommand}`,
		})
	}
}

const ensureLoggedInWithFly = async () => {
	const isCLIAuthorized = await $`fly auth whoami`.then(
		({ stdout }) => stdout,
		() => null,
	)
	if (!isCLIAuthorized) {
		try {
			// Run the command without waiting for it to complete
			const subprocess = $`fly auth login`
			let authUrl = null
			let gotUrl = false
			subprocess.stdout?.on('data', data => {
				const output = data.toString()

				// Extract the URL if it matches the expected pattern
				const urlMatch = output.match(/https:\/\/fly\.io\/app\/auth\/cli\/\w+/)
				if (urlMatch) {
					authUrl = urlMatch[0]
					gotUrl = true
				}
			})

			// Wait for gotUrl to be true
			while (!gotUrl) {
				await new Promise(resolve => setTimeout(resolve, 100))
			}
			note(
				`1. Log in to Fly: https://fly.io/app/sign-in
2. Log in to Fly's CLI by clicking this link:
${authUrl}`,
				`${ctx.progress}Please log in to Fly's CLI`,
			)
			const s = spinner()
			s.start(`Waiting for you to authorize Fly's CLI...`)
			await subprocess
			s.stop(`Fly's CLI is authorized!`)
			updateProgressIndicator()
		} catch (error) {
			if (error instanceof Error) console.error(error.message)
			else console.error(error)
		}
	}
}

const confirmUserStep = async () => {
	const loggedInUser = await $`fly auth whoami`.then(
		({ stdout }) => stdout,
		() => null,
	)

	const answer: symbol | string = await select({
		message: `${ctx.progress}You're logged in as ${color.green(loggedInUser)}. Proceed?`,
		options: [
			{ value: 'yes', label: 'Yes' },
			{ value: 'other', label: 'Login as another user' },
		],
	})
	if (isCancel(answer)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}

	if (answer === 'other') {
		await $`fly auth logout`
		steps.unshift(...[ensureLoggedInWithFly, confirmUserStep])
		updateProgressIndicator(0, -1)
	} else {
		updateProgressIndicator()
	}
}

const getPreferredRegion = async () => {
	const { rootDirectory } = ctx
	const {
		platform: { requestRegion: defaultRegion },
	} = await makeFlyRequest({ query: 'query {platform {requestRegion}}' })

	const regions = await makeFlyRequest({
		query: `{platform {regions {name code}}}`,
	})

	const availableRegions: { value: string; label: string }[] =
		regions.platform.regions.map(
			({ name, code }: { name: string; code: string }) => {
				// Frankfurt and Mumbai are only available for Launch plan and above
				const label =
					code === 'fra' || code === 'bom'
						? `${name} (${code}) ${color.red(`(only available on the Launch plan)`)}`
						: `${name} (${code})`
				return { value: code, label }
			},
		)

	const preferredRegion: symbol | string = await select({
		message: `${ctx.progress}Which region would you like to deploy to? ${color.gray(`The closest to you is ${defaultRegion}.`)}`,
		initialValue: defaultRegion,
		maxItems: 7,
		options: availableRegions,
	})
	if (isCancel(preferredRegion)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}

	const flyConfig = toml.parse(
		(await fs.readFile(path.join(rootDirectory, 'fly.toml'))).toString(),
	)
	flyConfig.primary_region = preferredRegion
	await fs.writeFile(
		path.join(rootDirectory, 'fly.toml'),
		toml.stringify(flyConfig),
	)

	const { app: app_name } = flyConfig

	ctx.primaryRegion = preferredRegion
	ctx.appName = app_name.toString()
}

const setupDeployment = async () => {
	const { rootDirectory, primaryRegion, appName } = ctx
	const $I = $({ cwd: rootDirectory, stdio: 'ignore' })
	const s = spinner()
	s.start(`💻 Creating production and staging apps...`)
	await $I`fly apps create ${appName}`
	await $I`fly apps create ${appName}-staging`
	s.stop(`💻 Created production and staging apps!`)

	s.start(`🤫 Setting secrets...`)
	await $I`fly secrets set SESSION_SECRET=${getRandomString32()} INTERNAL_COMMAND_TOKEN=${getRandomString32()} HONEYPOT_SECRET=${getRandomString32()} --app ${appName}`
	await $I`fly secrets set SESSION_SECRET=${getRandomString32()} INTERNAL_COMMAND_TOKEN=${getRandomString32()} HONEYPOT_SECRET=${getRandomString32()} ALLOW_INDEXING=false --app ${appName}-staging`
	s.stop(`🤫 Secrets set!`)

	s.start(`💿 Creating volumes...`)
	await $I`fly volumes create data --region ${primaryRegion} --size 1 --app ${appName} -y`
	await $I`fly volumes create data --region ${primaryRegion} --size 1 --app ${appName}-staging -y`
	s.stop(`💿 Volumes created!`)

	s.start(`🔗 Attaching Consuls...`)
	await $I`fly consul attach --app ${appName}`
	await $I`fly consul attach --app ${appName}-staging`
	s.stop(`🔗 Consuls attached!`)
}

const askDeployNow = async () => {
	const shouldDeploy = await confirm({
		message: `${ctx.progress}Would you like to deploy right now (you can wait until you push to GitHub instead)?`,
		active: `Yes, deploy now (takes 5 min)`,
		inactive: `No, I'll deploy later`,
	})
	if (isCancel(shouldDeploy)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	if (shouldDeploy) {
		steps.unshift(deployNowStep)
	}
	updateProgressIndicator()
}

const deployNowStep = async () => {
	const { rootDirectory, appName } = ctx
	// Move the Dockerfile and .dockerignore files to the root directory
	await fs.rename(
		path.join(rootDirectory, 'other', 'Dockerfile'),
		path.join(rootDirectory, 'Dockerfile'),
	)
	await fs.rename(
		path.join(rootDirectory, 'other', '.dockerignore'),
		path.join(rootDirectory, '.dockerignore'),
	)

	// Deploy production
	await boxedOutput({
		start: `Deploying to production ${color.dim(`fly deploy`)}`,
		subprocess: $({
			shell: true,
			stdout: 'pipe',
			stderr: 'pipe',
			cwd: rootDirectory,
		})`fly deploy`,
	})

	// Deploy staging
	await boxedOutput({
		start: `Deploying to staging ${color.dim(`fly deploy --app ${appName}-staging`)}`,
		subprocess: $({
			shell: true,
			stdout: 'pipe',
			stderr: 'pipe',
			cwd: rootDirectory,
		})`fly deploy --app ${appName}-staging`,
	})

	// Move the Dockerfile and .dockerignore files back to the other directory
	await fs.rename(
		path.join(rootDirectory, 'Dockerfile'),
		path.join(rootDirectory, 'other', 'Dockerfile'),
	)
	await fs.rename(
		path.join(rootDirectory, '.dockerignore'),
		path.join(rootDirectory, 'other', '.dockerignore'),
	)

	note(
		`${color.green(`https://${appName}.fly.dev/`)}
${color.green(`https://${appName}-staging.fly.dev/`)}`,
		`Your production and staging environments are live 🎉`,
	)
}

const askSetupGitHubActions = async () => {
	const shouldSetupGitHub = await confirm({
		message: `${ctx.progress}Would you like to give GitHub permission to deploy to Fly's infrastructure?`,
		active: `Yes (+4 steps)`,
		inactive: `No, I'll read the docs and do it myself`,
	})
	if (isCancel(shouldSetupGitHub)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	if (shouldSetupGitHub) {
		steps.unshift(
			...[askCreateNewRepo, getRepoURL, gitAddRemoteOrigin, setupGitHubActions],
		)
		updateProgressIndicator(4)
	} else {
		updateProgressIndicator()
	}
}

const askCreateNewRepo = async () => {
	const shouldOpenGitHub = await confirm({
		message: `${ctx.progress}We need to create a new repo on GitHub. Open https://repo.new?`,
		active: `Yes`,
		inactive: `No, I already have one`,
	})
	if (isCancel(shouldOpenGitHub)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	if (shouldOpenGitHub) {
		await open(`https://repo.new`)
	}
	updateProgressIndicator()
}

const getRepoURL = async () => {
	const repoURL = await text({
		message: `${ctx.progress}What is the URL of your repo?`,
		placeholder: `https://github.com/<username>/<repo>.git`,
		validate(value: string) {
			if (value.length === 0) return `A repo is required!`
			if (!value.startsWith(`https://github.com/`))
				return `Invalid URL! It needs to have this format: https://github.com/<username>/<repo>.git`
		},
	})
	if (isCancel(repoURL)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	const cleanedRepoURL = repoURL.replace(/\.git$/, '')
	const githubParts = parseGitHubURL(cleanedRepoURL)
	if (!githubParts) {
		note(`Please try again.`, `Invalid GitHub URL.`)
		steps.unshift(getRepoURL)
	} else {
		ctx.repoURL = cleanedRepoURL
		updateProgressIndicator()
	}
}

const gitAddRemoteOrigin = async () => {
	await $({
		stdio: 'ignore',
		cwd: ctx.rootDirectory,
	})`git remote add origin ${ctx.repoURL}.git`
}

const setupGitHubActions = async () => {
	const shouldOpenFlyTokens = await confirm({
		message: `${ctx.progress}We need to create a Fly API token. Open https://web.fly.io/user/personal_access_tokens/new, give it a name, and click "Create access token" (at the top right or bottom of page, depending on your resolution). Open the URL?`,
		active: `Yes, open`,
		inactive: `No, I already have one a token`,
	})
	if (isCancel(shouldOpenFlyTokens)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	if (shouldOpenFlyTokens) {
		await open(`https://web.fly.io/user/personal_access_tokens/new`)
	}
	updateProgressIndicator()

	const shouldOpenGitHubActions = await confirm({
		message: `${ctx.progress}Now we need to paste that Fly API token on GitHub's Action Secrets page (${ctx.repoURL}/settings/secrets/actions/new) and call it "${color.green(`FLY_API_TOKEN`)}". Open the URL?`,
		active: `Yes, open`,
		inactive: `No, I'll open it myself`,
	})
	if (isCancel(shouldOpenGitHubActions)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	if (shouldOpenGitHubActions) {
		await open(`${ctx.repoURL}/settings/secrets/actions/new`)
	}
	updateProgressIndicator()
}

const askToOpenIDEStep = async () => {
	const { rootDirectory } = ctx
	const editors = [
		{ label: 'VS Code', value: 'code' },
		{ label: 'Cursor', value: 'cursor' },
		{ label: 'Sublime Text', value: 'subl' },
		{ label: 'Atom', value: 'atom' },
		{ label: 'WebStorm', value: 'webstorm' },
		{ label: 'Emacs', value: 'emacs' },
	]

	const availableEditors = (
		await Promise.all(
			editors.map(({ label, value }) =>
				$({ cwd: rootDirectory })`${value} --version`.then(
					() => ({ label, value }),
					() => null,
				),
			),
		)
	).filter(value => value !== null)

	const editor: symbol | string = await select({
		message: `${ctx.progress}Which editor would you like to use?`,
		options: [
			...availableEditors,
			{ label: `None, I'll open the IDE manually`, value: 'none' },
		],
	})
	if (isCancel(editor)) {
		cancel(`Operation canceled`)
		process.exit(0)
	}
	if (editor !== 'none') {
		await $`${editor} ${rootDirectory}`.catch(() => {})
	}
	updateProgressIndicator(0)
}

const outroStep = () => {
	note(
		`- Start development with ${color.green(`npm run dev`)}
- Run tests with ${color.green(`npm run validate`)}
- Commit your code`,
		`What's next?`,
	)

	outro(`You're all set up! 🚀`)
}

let flyToken: string | null = null
async function makeFlyRequest({
	query,
	variables,
}: {
	query: string
	variables?: any
}) {
	if (!flyToken) {
		flyToken = (await $`fly auth token`).stdout.trim()
	}

	const json = await fetch('https://api.fly.io/graphql', {
		method: 'POST',
		body: JSON.stringify({ query, variables }),
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${flyToken}`,
		},
	}).then(response => response.json())
	return json.data
}

// Extension of the prompts to allow for a multiline message
const strip = (str: string) => str.replace(ansiRegex(), '')
const note = (message = '', title = '') => {
	const lines = `\n${message}\n`.split('\n')
	const len =
		Math.max(
			lines.reduce((sum, ln) => {
				ln = strip(ln)
				return ln.length > sum ? ln.length : sum
			}, 0),
			strip(title).length,
		) + 2
	const msg = lines
		.map(
			ln =>
				`${color.gray(S_BAR)}  ${ln}${' '.repeat(len - strip(ln).length)}${color.gray(
					S_BAR,
				)}`,
		)
		.join('\n')
	process.stdout.write(
		`${color.gray(S_BAR)}\n${color.green(S_STEP_SUBMIT)}  ${color.reset(title)} ${color.gray(
			S_BAR_H.repeat(Math.max(len - title.length - 1, 1)) + S_CORNER_TOP_RIGHT,
		)}\n${msg}\n${color.gray(S_CONNECT_LEFT + S_BAR_H.repeat(len + 2) + S_CORNER_BOTTOM_RIGHT)}\n`,
	)
}

function ansiRegex() {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))',
	].join('|')

	return new RegExp(pattern, 'g')
}

const boxedOutput = async ({
	start,
	subprocess,
	end,
}: {
	start?: string
	subprocess: ResultPromise
	end?: string
}) => {
	process.stdout.write(`${color.gray(S_BAR)}\n`)
	if (start) process.stdout.write(`${color.green(S_STEP_SUBMIT)}  ${start}`)
	process.stdout.write(`\n\x1b[0m${color.gray(S_BAR)}  \x1b[2m`)
	subprocess.stdout?.on('data', data => {
		let dataString = data.toString()
		if (dataString.includes('\n')) {
			dataString = dataString.replace(
				/\n/g,
				`\n\x1b[0m${color.gray(S_BAR)}  \x1b[2m`,
			)
		}
		if (dataString.includes('\r')) {
			dataString = dataString.replace(
				/\r/g,
				`\r\x1b[0m${color.gray(S_BAR)}  \x1b[2m`,
			)
		}
		process.stdout.write(dataString)
	})
	subprocess.stderr?.on('data', data => {
		let dataString = data.toString()
		if (dataString.includes('\n')) {
			dataString = dataString.replace(
				/\n/g,
				`\n\x1b[0m${color.gray(S_BAR)}  \x1b[2m`,
			)
		}
		if (dataString.includes('\r')) {
			dataString = dataString.replace(
				/\r/g,
				`\r\x1b[0m${color.gray(S_BAR)}  \x1b[2m`,
			)
		}
		process.stderr.write(dataString)
	})
	await subprocess
	process.stdout.write(`\x1b[0m\n`)
	if (end) process.stdout.write(`${color.green(S_STEP_ACTIVE)}  ${end}\n`)
}
