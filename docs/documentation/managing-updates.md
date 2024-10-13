# Managing updates

## Updating Node.js

LaunchFast runs a long-running Node.js server. It defaults to the current active
LTS version of Node
([read the Node.js version decision document](./decisions/021-node-version.md)).

If you wish to change the Node.js version, you can do so by updating the
`engines.node` property in the `package.json` file.

```json
{
	"engines": {
		"node": "20.3.1"
	}
}
```

Make certain you do not use a version range here because this is used in the
`./other/build-server.ts` to compile the express server code.

You will also want to update the `Dockerfile` to use the same version of Node.js
as the `package.json` file.

```diff
- FROM node:18-bookworm-slim as base
+ FROM node:20.3.1-bookworm-slim as base
```

You'll find the
[Node.js versions available on Docker Hub](https://hub.docker.com/_/node).

## Within LaunchFast

When you create a new project with LaunchFast, a bunch of code is generated for
you. This code is completely yours and you can tweak it to fit your specific use
cases. This is a good thing. You shouldn't feel compelled to keep up-to-date
with the latest LaunchFast version. If what you're using is working fine for you
then just keep going with it. Only adopt updates made to the LaunchFast stack if
you have to.

## How to update NPM dependencies

Another part of LaunchFast is the dependencies of the project. You will also
have to keep up-to-date yourself, but there is a bit of an automated process to
help you.

It’s important to update your packages to get new features, bug fixes, and
security patches.
[NPM Check Updates](https://www.npmjs.com/package/npm-check-updates) is a CLI
that will help you safely make those updates. You can watch
[this youtube video](https://www.youtube.com/watch?v=0XQXGx3lLaU) for a
demonstration of how to do this.

What follows are the steps to update your NPM dependencies.

### See a list of packages that can be updated

NPM packages follow [semantic versioning](https://semver.org). This command will
show you which packages can be updated and which major, minor, or patch versions
are available.

```sh
npx npm-check-updates
```

Notice the colors:

- Green = (non-major version zero) patch updates
- Cyan = minor updates
- Red = major or [version zero (0.y.z)](https://semver.org/#spec-item-4) updates

### Update green patch versions first, all at once

Since green patch version updates are meant for backward-compatible bug fixes,
it's ok to update them all at once.

```sh
npx npm-check-updates -u --target patch
...
npm i
```

> Note: `npx npm-check-updates -u -t patch` updates all patch versions,
> including major version zero patch versions, which can break your code. If all
> your patch updates are green, feel free to use this command instead to update
> them all at once.

Assuming package maintainers follow semantic versioning, updating patch versions
shouldn't break anything, but it's good practice to re-run your tests before
committing these changes.

```sh
npm run test -- run
npm run test:e2e:run
```

If all tests pass, commit your changes.

```sh
git add .
git commit -m "Updated patch versions"
```

### Update cyan minor versions second, one by one

Minor version updates introduce new features in a backward-compatible way. This
is exciting and it's good practice to take some time to explore the new
functionality and apply relevant updates to your code base or plan to apply them
later. It's recommended you do this package by package instead of all at once.

To check for the new package's features, check its release notes on GitHub.

> If you haven't updated a fairly active package in a while, reading all its
> release notes can take some time. Take into consideration how important a
> package is for your project when choosing which to update first.

```sh
npx npm-check-updates -u --filter <package-with-cyan-minor-update>
npm i
```

Again, assuming package maintainers follow semantic versioning updating patch
versions shouldn't break anything, but it's good practice to re-run your tests
to make sure.

```sh
npm run test -- run
npm run test:e2e:run
```

If all tests pass, commit your changes.

```sh
git add .
git commit -m "Updated minor versions"
```

### Update red versions third, one by one

Red updates can happen on patch or minor versions (for zero major version
(0.y.z) packages) or major versions. Either way, they could be breaking changes.
It's recommended you read its release notes to see what changed and plan
accordingly.

> Again, you might want to take into consideration how important a package is
> for your project when choosing which to update first.

```sh
npx npm-check-updates -u -f <package-with-red-version-update>
npm i
```

Make sure you've made all relevant changes and that the tests pass.

```sh
npm run test -- run
npm run test:e2e:run
```

If all tests pass, commit your changes.

```sh
git add .
git commit -m "Updated <package-with-red-version-update> major version"
```

Then repeat for each package.
