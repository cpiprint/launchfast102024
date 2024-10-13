# Routing

LaunchFast uses file-based routing with Remix. However, it's not using the
built-in routing convention of Remix and instead is using
[remix-flat-routes](https://github.com/kiliman/remix-flat-routes) which is a
special implementation of the Remix convention that adds a few features. You'll
find it configured for the application in the `vite.config.js` file at the root
of the app. Specifically "hybrid routes."

We'll defer to the `remix-flat-routes` documentation for specifics, but an
important thing for you to know as you get used to this convention is you can
always run `npx remix routes` from the root of the app and it will output the
routes of your application in a JSX-like output that will reveal the routes that
will be generated based on your current file structure. Here's an example of the
LaunchFast routes at the time of this writing:

```
app/routes
├── $.tsx
├── _auth+
│   ├── auth.$provider.callback.test.ts
│   ├── auth.$provider.callback.ts
│   ├── auth.$provider.ts
│   ├── forgot-password.tsx
│   ├── login.server.ts
│   ├── login.tsx
│   ├── logout.tsx
│   ├── onboarding.server.ts
│   ├── onboarding.tsx
│   ├── onboarding_.$provider.server.ts
│   ├── onboarding_.$provider.tsx
│   ├── reset-password.server.ts
│   ├── reset-password.tsx
│   ├── signup.tsx
│   ├── verify.server.ts
│   └── verify.tsx
├── _dev-resources+
│   ├── typography.tsx
│   └── ui-components.tsx
├── _marketing+
│   ├── about.tsx
│   ├── index.tsx
│   ├── privacy.tsx
│   ├── support.tsx
│   ├── tailwind-preset.ts
│   └── tos.tsx
├── _seo+
│   ├── robots[.]txt.ts
│   └── sitemap[.]xml.ts
├── admin+
│   ├── cache.tsx
│   ├── cache_.lru.$cacheKey.ts
│   ├── cache_.sqlite.$cacheKey.ts
│   ├── cache_.sqlite.server.ts
│   └── cache_.sqlite.tsx
├── resources+
│   ├── download-user-data.tsx
│   ├── healthcheck.tsx
│   ├── theme-switch.tsx
│   └── user-images.$imageId.tsx
└── settings+
    ├── profile.change-email.server.tsx
    ├── profile.change-email.tsx
    ├── profile.connections.tsx
    ├── profile.index.tsx
    ├── profile.password.tsx
    ├── profile.password_.create.tsx
    ├── profile.photo.tsx
    ├── profile.tsx
    ├── profile.two-factor.disable.tsx
    ├── profile.two-factor.index.tsx
    ├── profile.two-factor.tsx
    └── profile.two-factor.verify.tsx

8 directories, 48 files
```

```tsx
<Routes>
	<Route file="root.tsx">
		<Route path="*" file="routes/$.tsx" />
		<Route path="auth/:provider" file="routes/_auth+/auth.$provider.ts">
			<Route path="callback" file="routes/_auth+/auth.$provider.callback.ts" />
		</Route>
		<Route path="forgot-password" file="routes/_auth+/forgot-password.tsx" />
		<Route path="login" file="routes/_auth+/login.tsx" />
		<Route path="logout" file="routes/_auth+/logout.tsx" />
		<Route path="onboarding" file="routes/_auth+/onboarding.tsx" />
		<Route
			path="onboarding/:provider"
			file="routes/_auth+/onboarding_.$provider.tsx"
		/>
		<Route path="reset-password" file="routes/_auth+/reset-password.tsx" />
		<Route path="signup" file="routes/_auth+/signup.tsx" />
		<Route path="verify" file="routes/_auth+/verify.tsx" />
		<Route path="typography" file="routes/_dev-resources+/typography.tsx" />
		<Route
			path="ui-components"
			file="routes/_dev-resources+/ui-components.tsx"
		/>
		<Route path="about" file="routes/_marketing+/about.tsx" />
		<Route index file="routes/_marketing+/index.tsx" />
		<Route path="privacy" file="routes/_marketing+/privacy.tsx" />
		<Route path="support" file="routes/_marketing+/support.tsx" />
		<Route
			path="tailwind-preset"
			file="routes/_marketing+/tailwind-preset.ts"
		/>
		<Route path="tos" file="routes/_marketing+/tos.tsx" />
		<Route path="robots.txt" file="routes/_seo+/robots[.]txt.ts" />
		<Route path="sitemap.xml" file="routes/_seo+/sitemap[.]xml.ts" />
		<Route path="admin/cache" file="routes/admin+/cache.tsx" />
		<Route
			path="admin/cache/lru/:cacheKey"
			file="routes/admin+/cache_.lru.$cacheKey.ts"
		/>
		<Route path="admin/cache/sqlite" file="routes/admin+/cache_.sqlite.tsx">
			<Route path=":cacheKey" file="routes/admin+/cache_.sqlite.$cacheKey.ts" />
		</Route>
		<Route
			path="resources/download-user-data"
			file="routes/resources+/download-user-data.tsx"
		/>
		<Route
			path="resources/healthcheck"
			file="routes/resources+/healthcheck.tsx"
		/>
		<Route
			path="resources/theme-switch"
			file="routes/resources+/theme-switch.tsx"
		/>
		<Route
			path="resources/user-images/:imageId"
			file="routes/resources+/user-images.$imageId.tsx"
		/>
		<Route path="settings/profile" file="routes/settings+/profile.tsx">
			<Route
				path="change-email"
				file="routes/settings+/profile.change-email.tsx"
			/>
			<Route
				path="connections"
				file="routes/settings+/profile.connections.tsx"
			/>
			<Route index file="routes/settings+/profile.index.tsx" />
			<Route path="password" file="routes/settings+/profile.password.tsx" />
			<Route
				path="password/create"
				file="routes/settings+/profile.password_.create.tsx"
			/>
			<Route path="photo" file="routes/settings+/profile.photo.tsx" />
			<Route path="two-factor" file="routes/settings+/profile.two-factor.tsx">
				<Route
					path="disable"
					file="routes/settings+/profile.two-factor.disable.tsx"
				/>
				<Route index file="routes/settings+/profile.two-factor.index.tsx" />
				<Route
					path="verify"
					file="routes/settings+/profile.two-factor.verify.tsx"
				/>
			</Route>
		</Route>
	</Route>
</Routes>
```

Basically, remix-flat-routes hybrid routing allows us to get the best of both
worlds:

- Colocation of routes to the code they use
- Organized folder structure to keep routes together as needed

If you're familiar with the Remix routing convention, just think of it this way,
remix-flat-routes converts `+/` to `.`.
