import * as React from 'react'
import { useSpinDelay } from 'spin-delay'
import { cn } from '#app/utils/tailwind-merge.ts'
import { Button, type ButtonProps } from '../shadcnui/button.tsx'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../shadcnui/tooltip.tsx'
import { Icon } from './icon.tsx'

export const StatusButton = React.forwardRef<
	HTMLButtonElement,
	ButtonProps & {
		status: 'pending' | 'success' | 'error' | 'idle'
		message?: string | null
		spinDelay?: Parameters<typeof useSpinDelay>[1]
	}
>(({ message, status, className, children, spinDelay, ...props }, ref) => {
	const delayedPending = useSpinDelay(status === 'pending', {
		delay: 400,
		minDuration: 300,
		...spinDelay,
	})
	const companion = {
		pending: delayedPending ? (
			<div
				role="status"
				className="inline-flex h-6 w-6 items-center justify-center"
			>
				<Icon name="update" className="animate-spin" title="loading" />
			</div>
		) : null,
		success: (
			<div
				role="status"
				className="inline-flex h-6 w-6 items-center justify-center"
			>
				<Icon name="check" title="success" />
			</div>
		),
		error: (
			<div
				role="status"
				className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-danger-bg"
			>
				<Icon name="cross-1" className="text-danger-text" title="error" />
			</div>
		),
		idle: null,
	}[status]

	return (
		<Button
			ref={ref}
			className={cn('flex justify-center gap-4', className)}
			{...props}
		>
			<div>{children}</div>
			{message ? (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>{companion}</TooltipTrigger>
						<TooltipContent>{message}</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			) : (
				companion
			)}
		</Button>
	)
})
StatusButton.displayName = 'Button'
