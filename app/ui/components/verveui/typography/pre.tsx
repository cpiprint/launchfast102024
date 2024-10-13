import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A Pre component.
 */
const Pre = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(
	({ className, ...props }, ref) => (
		<pre ref={ref} className={cn('pre', className)} {...props} />
	),
)
Pre.displayName = 'Pre'

export { Pre }
