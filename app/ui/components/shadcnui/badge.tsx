import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '#app/utils/tailwind-merge.ts'

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-muted-900 text-muted-50 hover:bg-muted-500',
				secondary:
					'border-transparent bg-muted-300 text-muted-900 hover:bg-muted-200',
				destructive:
					'border-transparent bg-danger-bg text-danger-text hover:bg-danger-bg-hover',
				outline: 'text-foreground bg-background hover:bg-muted-100',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	)
}

export { Badge, badgeVariants }
