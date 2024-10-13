import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * An i component.
 */
const I = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<i ref={ref} className={cn('i', className)} {...props} />
	),
)
I.displayName = 'I'

export { I }
