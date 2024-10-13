import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '#app/utils/tailwind-merge.ts'

const toggleVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted-200 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-muted-400',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'border border-brand-border bg-transparent hover:bg-muted-200',
			},
			size: {
				default: 'h-10 px-3',
				sm: 'h-9 px-2.5',
				lg: 'h-11 px-5',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({ variant, size, className }))}
		{...props}
	/>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
