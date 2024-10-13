import { type Config } from 'tailwindcss'

export const extendedTheme = {
	maxWidth: {
		website:
			'calc(var(--website-max-width) * 1px + 2 * var(--spacing-viewport-padding))',
	},
	spacing: {
		'viewport-padding': 'var(--spacing-viewport-padding)',
		'viewport-edge': 'var(--spacing-viewport-edge)',
		'fluid-1': 'var(--spacing-fluid-1)',
		'fluid-2': 'var(--spacing-fluid-2)',
		'fluid-3': 'var(--spacing-fluid-3)',
		'fluid-4': 'var(--spacing-fluid-4)',
		'fluid-5': 'var(--spacing-fluid-5)',
		'fluid-6': 'var(--spacing-fluid-6)',
		'fluid-7': 'var(--spacing-fluid-7)',
		'fluid-8': 'var(--spacing-fluid-8)',
		'fluid-9': 'var(--spacing-fluid-9)',
		'fluid-10': 'var(--spacing-fluid-10)',
		'fluid-11': 'var(--spacing-fluid-11)',
		'fluid-12': 'var(--spacing-fluid-12)',
		'fluid-13': 'var(--spacing-fluid-13)',
		'fluid-14': 'var(--spacing-fluid-14)',
		'fluid-15': 'var(--spacing-fluid-15)',
		'fluid-16': 'var(--spacing-fluid-16)',
		'fluid-17': 'var(--spacing-fluid-17)',
		'fluid-18': 'var(--spacing-fluid-18)',
		'fluid-19': 'var(--spacing-fluid-19)',
		'fluid-20': 'var(--spacing-fluid-20)',
	},
	colors: {
		background: 'var(--color-background)',
		foreground: 'var(--color-foreground)',
		'brand-bg': 'var(--color-brand-bg)',
		'brand-bg-hover': 'var(--color-brand-bg-hover)',
		'brand-bg-active': 'var(--color-brand-bg-active)',
		'brand-border': 'var(--color-brand-border)',
		'brand-border-hover': 'var(--color-brand-border-hover)',
		'brand-border-active': 'var(--color-brand-border-active)',
		'brand-card-title': 'var(--color-brand-card-title)',
		'brand-text': 'var(--color-brand-text)',
		'brand-text-hover': 'var(--color-brand-text-hover)',
		'brand-text-active': 'var(--color-brand-text-active)',
		'success-bg': 'var(--color-success-bg)',
		'success-bg-hover': 'var(--color-success-bg-hover)',
		'success-bg-active': 'var(--color-success-bg-active)',
		'success-border': 'var(--color-success-border)',
		'success-border-hover': 'var(--color-success-border-hover)',
		'success-border-active': 'var(--color-success-border-active)',
		'success-card-title': 'var(--color-success-card-title)',
		'success-text': 'var(--color-success-text)',
		'success-text-hover': 'var(--color-success-text-hover)',
		'success-text-active': 'var(--color-success-text-active)',
		'info-bg': 'var(--color-info-bg)',
		'info-bg-hover': 'var(--color-info-bg-hover)',
		'info-bg-active': 'var(--color-info-bg-active)',
		'info-border': 'var(--color-info-border)',
		'info-border-hover': 'var(--color-info-border-hover)',
		'info-border-active': 'var(--color-info-border-active)',
		'info-card-title': 'var(--color-info-card-title)',
		'info-text': 'var(--color-info-text)',
		'info-text-hover': 'var(--color-info-text-hover)',
		'info-text-active': 'var(--color-info-text-active)',
		'warning-bg': 'var(--color-warning-bg)',
		'warning-bg-hover': 'var(--color-warning-bg-hover)',
		'warning-bg-active': 'var(--color-warning-bg-active)',
		'warning-border': 'var(--color-warning-border)',
		'warning-border-hover': 'var(--color-warning-border-hover)',
		'warning-border-active': 'var(--color-warning-border-active)',
		'warning-card-title': 'var(--color-warning-card-title)',
		'warning-text': 'var(--color-warning-text)',
		'warning-text-hover': 'var(--color-warning-text-hover)',
		'warning-text-active': 'var(--color-warning-text-active)',
		'danger-bg': 'var(--color-danger-bg)',
		'danger-bg-hover': 'var(--color-danger-bg-hover)',
		'danger-bg-active': 'var(--color-danger-bg-active)',
		'danger-border': 'var(--color-danger-border)',
		'danger-border-hover': 'var(--color-danger-border-hover)',
		'danger-border-active': 'var(--color-danger-border-active)',
		'danger-card-title': 'var(--color-danger-card-title)',
		'danger-text': 'var(--color-danger-text)',
		'danger-text-hover': 'var(--color-danger-text-hover)',
		'danger-text-active': 'var(--color-danger-text-active)',
		'muted-50': 'var(--color-muted-50)',
		'muted-100': 'var(--color-muted-100)',
		'muted-200': 'var(--color-muted-200)',
		'muted-300': 'var(--color-muted-300)',
		'muted-400': 'var(--color-muted-400)',
		'muted-500': 'var(--color-muted-500)',
		'muted-600': 'var(--color-muted-600)',
		'muted-700': 'var(--color-muted-700)',
		'muted-800': 'var(--color-muted-800)',
		'muted-900': 'var(--color-muted-900)',
		'muted-950': 'var(--color-muted-950)',
	},
	borderRadius: {
		lg: 'var(--radius)',
		md: 'calc(var(--radius) - 2px)',
		sm: 'calc(var(--radius) - 4px)',
	},
	fontSize: {
		'fluid-xs': [
			'var(--font-size-fluid-xs)',
			{
				lineHeight: 'var(--font-size-fluid-xs--line-height)',
				letterSpacing: 'var(--font-size-fluid-xs--letter-spacing)',
			},
		],
		'fluid-sm': [
			'var(--font-size-fluid-sm)',
			{
				lineHeight: 'var(--font-size-fluid-sm--line-height)',
				letterSpacing: 'var(--font-size-fluid-sm--letter-spacing)',
			},
		],
		'fluid-md': [
			'var(--font-size-fluid-md)',
			{
				lineHeight: 'var(--font-size-fluid-md--line-height)',
				letterSpacing: 'var(--font-size-fluid-md--letter-spacing)',
			},
		],
		'fluid-lg': [
			'var(--font-size-fluid-lg)',
			{
				lineHeight: 'var(--font-size-fluid-lg--line-height)',
				letterSpacing: 'var(--font-size-fluid-lg--letter-spacing)',
			},
		],
		'fluid-xl': [
			'var(--font-size-fluid-xl)',
			{
				lineHeight: 'var(--font-size-fluid-xl--line-height)',
				letterSpacing: 'var(--font-size-fluid-xl--letter-spacing)',
			},
		],
		'fluid-2xl': [
			'var(--font-size-fluid-2xl)',
			{
				lineHeight: 'var(--font-size-fluid-2xl--line-height)',
				letterSpacing: 'var(--font-size-fluid-2xl--letter-spacing)',
			},
		],
		'fluid-3xl': [
			'var(--font-size-fluid-3xl)',
			{
				lineHeight: 'var(--font-size-fluid-3xl--line-height)',
				letterSpacing: 'var(--font-size-fluid-3xl--letter-spacing)',
			},
		],
		'fluid-4xl': [
			'var(--font-size-fluid-4xl)',
			{
				lineHeight: 'var(--font-size-fluid-4xl--line-height)',
				letterSpacing: 'var(--font-size-fluid-4xl--letter-spacing)',
			},
		],
		'fluid-5xl': [
			'var(--font-size-fluid-5xl)',
			{
				lineHeight: 'var(--font-size-fluid-5xl--line-height)',
				letterSpacing: 'var(--font-size-fluid-5xl--letter-spacing)',
			},
		],
		'fluid-6xl': [
			'var(--font-size-fluid-6xl)',
			{
				lineHeight: 'var(--font-size-fluid-6xl--line-height)',
				letterSpacing: 'var(--font-size-fluid-6xl--letter-spacing)',
			},
		],

		// 1rem = 16px
		/** 80px size / 84px high / bold */
		mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
		/** 56px size / 62px high / bold */
		h1: ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700' }],
		/** 40px size / 48px high / bold */
		h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
		/** 32px size / 36px high / bold */
		h3: ['2rem', { lineHeight: '2.25rem', fontWeight: '700' }],
		/** 28px size / 36px high / bold */
		h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
		/** 24px size / 32px high / bold */
		h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
		/** 16px size / 20px high / bold */
		h6: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],

		/** 32px size / 36px high / normal */
		'body-2xl': ['2rem', { lineHeight: '2.25rem' }],
		/** 28px size / 36px high / normal */
		'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
		/** 24px size / 32px high / normal */
		'body-lg': ['1.5rem', { lineHeight: '2rem' }],
		/** 20px size / 28px high / normal */
		'body-md': ['1.25rem', { lineHeight: '1.75rem' }],
		/** 16px size / 20px high / normal */
		'body-sm': ['1rem', { lineHeight: '1.25rem' }],
		/** 14px size / 18px high / normal */
		'body-xs': ['0.875rem', { lineHeight: '1.125rem' }],
		/** 12px size / 16px high / normal */
		'body-2xs': ['0.75rem', { lineHeight: '1rem' }],

		/** 18px size / 24px high / semibold */
		caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
		/** 12px size / 16px high / bold */
		button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
	},
	animation: {
		'loop-scroll': 'loop-scroll 50s linear infinite',
		'caret-blink': 'caret-blink 1.25s ease-out infinite',
	},
	keyframes: {
		'loop-scroll': {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(-100%)' },
		},
		'caret-blink': {
			'0%,70%,100%': { opacity: '1' },
			'20%,50%': { opacity: '0' },
		},
	},
} satisfies Config['theme']
