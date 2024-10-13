# Preparing Your Web App for Public Release

Welcome to your new LaunchFast app! Feel free to explore and play around with
the features and to read the documentation and decision documents to get a sense
of what it can do. When you’re ready to turn this into a fully-fledged
application, follow the next steps to transform your starter app into a polished
application that is truly your own!

## 1. Update Logo and Icons

1. Open your Figma file.
2. Replace the existing logo and icons with your own SVG designs.
3. Export the logos for the light and dark themes and copy and paste their SVG
   code into the Logo component in `/app/root.tsx`
4. Export the icons. A `public` folder will be created. Drop this folder into
   your repo's root.

## 2. Enable Content Security Policy (CSP)

1. The CSP is initially in a warn-only state.
2. Enable the CSP by modifying the `/server/index.ts` file.
3. Add the necessary domains that your app will need access to and remove the
   `reportOnly: true` line. Example to allow loading images from Unsplash:

```ts
contentSecurityPolicy: {
	directives: {
		// ...
		'img-src': ['unsplash.com', "'self'", 'data:'].filter(Boolean),
		// ...
	},
},
```

## 3. Connect Custom Domains to Fly Instances

1. Update your A and AAAA DNS records to point to Fly's IPv4 and IPv6 addresses:

```sh
fly ips list
```

2. Connect your custom domain using the following command:

```sh
fly certs add example.com
```

## 4. OAuth providers

1. If you have OAuth providers, follow the instructions in the
   `/docs/authentication.md` file to set up the necessary credentials.

## 5. Configure zero-downtime deployments

1. Set up zero-downtime deployments by following the instructions in the
   `/docs/database.md` file.

## 5. Configure email

1. If you have email functionality, follow the instructions in the
   `/docs/email.md` file to set up the necessary credentials.

## Summary

By updating your logo and icons, enabling and configuring the Content Security
Policy, and connecting your custom domains to Fly, your web app will be ready
for public release.

For further assistance, refer to the detailed documentation in the /docs folder
of the LaunchFast stack.
