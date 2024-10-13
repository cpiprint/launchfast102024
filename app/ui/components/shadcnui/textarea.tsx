import * as React from 'react'

import { cn } from '#app/utils/tailwind-merge.ts'

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'flex min-h-[80px] w-full rounded-md border border-brand-border bg-background px-3 py-2 text-sm placeholder:text-muted-600 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-danger-border',
					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Textarea.displayName = 'Textarea'

export { Textarea }
