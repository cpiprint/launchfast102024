import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A Code component.
 */
const Code = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<code ref={ref} className={cn('code', className)} {...props} />
	),
)
Code.displayName = 'Code'

export { Code }
