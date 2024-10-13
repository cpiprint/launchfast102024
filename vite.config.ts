import { vitePlugin as remix } from '@remix-run/dev'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { glob } from 'glob'
import { flatRoutes } from 'remix-flat-routes'
import { defineConfig } from 'vite'

const MODE = process.env.NODE_ENV

export default defineConfig({
	build: {
		cssMinify: MODE === 'production',

		rollupOptions: {
			external: [/node:.*/, 'stream', 'crypto', 'fsevents'],
		},

		assetsInlineLimit: (source: string) => {
			if (source.endsWith('sprite.svg')) {
				return false
			}
		},

		sourcemap: true,
	},
	server: {
		watch: {
			ignored: ['**/playwright-report/**'],
		},
	},
	optimizeDeps: {
		include: [
			'@conform-to/react',
			'@conform-to/zod',
			'@epic-web/invariant',
			'@epic-web/client-hints',
			'@epic-web/client-hints/color-scheme',
			'@epic-web/client-hints/time-zone',
			'@epic-web/remember',
			'@epic-web/cachified',
			'@epic-web/totp',
			'@eslint/*',
			'@nasa-gcn/*',
			'@paralleldrive/cuid2',
			'@prisma/client',
			'@radix-ui/react-visually-hidden',
			'@radix-ui/react-slot',
			'@radix-ui/react-dropdown-menu',
			'@radix-ui/react-dialog',
			'@radix-ui/react-tooltip',
			'@radix-ui/react-checkbox',
			'@radix-ui/react-label',
			'@radix-ui/react-accordion',
			'@radix-ui/react-tabs',
			'@react-email/components',
			'@remix-run/node',
			'@sentry/remix',
			'@tanstack/*',
			'address',
			'bcryptjs',
			'better-sqlite3',
			'chalk',
			'class-variance-authority',
			'close-with-grace',
			'clsx',
			'cmdk',
			'compression',
			'cookie',
			'cross-env',
			'crypto-js',
			'date-fns',
			'dotenv',
			'embla-carousel-react',
			'execa',
			'express',
			'express-rate-limit',
			'get-port',
			'glob',
			'helmet',
			'input-otp',
			'intl-parse-accept-language',
			'isbot',
			'litefs-js',
			'litefs-js/remix.js',
			'lru-cache',
			'morgan',
			'next-themes',
			'prisma',
			'qrcode',
			'react',
			'react-day-picker',
			'react-dom',
			'react-hook-form',
			'react-resizable-panels',
			'remix-auth',
			'remix-auth-github',
			'remix-utils/honeypot/server',
			'remix-utils/honeypot/react',
			'remix-utils/safe-redirect',
			'remix-utils/client-only',
			'remix-utils/server-only',
			'set-cookie-parser',
			'sonner',
			'source-map-support',
			'spin-delay',
			'tailwind-merge',
			'tailwindcss',
			'tailwindcss-animate',
			'tailwindcss-radix',
			'vaul',
			'zod',
		],
	},
	plugins: [
		remix({
			ignoredRouteFiles: ['**/*'],
			serverModuleFormat: 'esm',
			routes: async defineRoutes => {
				return flatRoutes('routes', defineRoutes, {
					ignoredRouteFiles: [
						'.*',
						'**/*.css',
						'**/*.test.{js,jsx,ts,tsx}',
						'**/__*.*',
						// This is for server-side utilities you want to colocate
						// next to your routes without making an additional
						// directory. If you need a route that includes "server" or
						// "client" in the filename, use the escape brackets like:
						// my-route.[server].tsx
						'**/*.server.*',
						'**/*.client.*',
					],
				})
			},
		}),
		process.env.SENTRY_AUTH_TOKEN
			? sentryVitePlugin({
					disable: MODE !== 'production',
					authToken: process.env.SENTRY_AUTH_TOKEN,
					org: process.env.SENTRY_ORG,
					project: process.env.SENTRY_PROJECT,
					release: {
						name: process.env.COMMIT_SHA,
						setCommits: {
							auto: true,
						},
					},
					sourcemaps: {
						filesToDeleteAfterUpload: await glob([
							'./build/**/*.map',
							'.server-build/**/*.map',
						]),
					},
				})
			: null,
	],
})
