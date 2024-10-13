import { type MetaFunction } from '@remix-run/node'
import { Container } from '#app/ui/components/verveui/layout/container.js'
import { A } from '#app/ui/components/verveui/typography/a.js'
import { Code } from '#app/ui/components/verveui/typography/code.js'
import { H1 } from '#app/ui/components/verveui/typography/h1.js'
import { H2 } from '#app/ui/components/verveui/typography/h2.js'
import { Lead } from '#app/ui/components/verveui/typography/lead.js'
import { P } from '#app/ui/components/verveui/typography/p.js'
import { Ul } from '#app/ui/components/verveui/typography/ul.js'
import { appName } from '#app/utils/constants.ts'

export const meta: MetaFunction = () => [{ title: appName }]

export default function Index() {
	return (
		<Container className="mb-10">
			<H1>Welcome to Your New App!</H1>
			<Lead>Here's what you can do next.</Lead>
			<H2>Poke around the app</H2>
			<P>
				Before you start building, take a moment to poke around the current
				bare-bones app. Login with <Code>admin@example.com</Code> and{' '}
				<Code>youareawesome</Code> and check out the user's dashboard.
			</P>
			<P>
				Also create a new account to see the onboarding flow: when a user
				inserts their email on the signup page, a TOTP code will be sent to
				confirm his email. LaunchFast mocks Resend's API (and all other
				3rd-party APIs) during development to support offline work, so the TOTP
				code will be logged in the terminal instead of hitting the real API and
				sent to the user.
			</P>
			<H2>Explore The Stack</H2>
			<P>
				Then take a moment explore the folder structure. Here's what you'll
				find:
			</P>
			<Ul>
				<li>
					Components in <Code>/app/components</Code>
				</li>
				<li>
					Hooks in <Code>/app/hooks</Code>
				</li>
				<li>
					Routes in <Code>/app/routes</Code>
					<P>
						You'll notice that some folders have <Code>_</Code> and{' '}
						<Code>+</Code> characters. This is part of a convention called{' '}
						<A
							href="https://remix.run/resources/remix-flat-routes"
							target="_blank"
						>
							Flat Routes
						</A>
						. The <Code>_</Code> in <Code>/app/routes/_marketing+</Code>{' '}
						indicates that this folder won't be part of the URL. So{' '}
						<Code>/app/routes/_marketing+/index.tsx</Code> and{' '}
						<Code>/app/routes/_auth+/login.tsx</Code> are both accessible at{' '}
						<Code>/</Code> and <Code>/login</Code> respectively. I think about
						it like this: "<Code>_</Code> means the folder is invisible".
					</P>
					<P>
						The <Code>+</Code> makes it so the flat-routes convention extend to
						the items inside that folder.
					</P>
				</li>
				<li>
					Styles in <Code>/app/styles</Code>
				</li>
				<li>
					Utilities in <Code>/app/utils</Code>
				</li>
				<li>
					Root file in <Code>/app/root.tsx</Code>
				</li>
				<li>
					Database schema in <Code>/prisma/schema.prisma</Code>
				</li>
				<li>
					End-to-end tests in <Code>/tests</Code>
				</li>
			</Ul>
			<H2>Read the docs</H2>
			<P>
				Once you're ready to start building, check out the{' '}
				<A href="https://launchfast.pro/docs" target="_blank">
					docs
				</A>
				.
			</P>
			<H2>Edit this homepage</H2>
			<P>
				Go to <Code>/app/routes/_marketing+/index.tsx</Code> and replace its
				contents with this:
			</P>
			<div className="overflow-x-auto rounded-lg border border-muted-200 bg-muted-100 p-4">
				<pre>
					{`import { Container } from '#app/ui/components/verveui/layout/container.js'
import { Benefits } from '#app/ui/sections/benefits.js'
import { CTA } from '#app/ui/sections/cta.js'
import { FAQ } from '#app/ui/sections/faq.js'
import { FeaturedOn } from '#app/ui/sections/featured-on.js'
import { Hero } from '#app/ui/sections/hero.js'
import { Pricing } from '#app/ui/sections/pricing.js'
import { Problem } from '#app/ui/sections/problem.js'
import { Testimonials } from '#app/ui/sections/testimonials.js'

const Route = () => {
	return (
		<Container>
			<Hero />
			<FeaturedOn />
			<Problem />
			<Benefits />
			<Testimonials />
			<Pricing />
			<FAQ />
			<CTA className="mb-48" />
		</Container>
	)
}
export default Route
`}
				</pre>
			</div>
			<P className="mt-10">
				I hope you enjoy building with LaunchFast. Happy coding!
			</P>
		</Container>
	)
}
