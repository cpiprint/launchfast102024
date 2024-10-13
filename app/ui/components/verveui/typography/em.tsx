import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * An em component.
 */
const Em = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<em ref={ref} className={cn('em', className)} {...props} />
	),
)
Em.displayName = 'Em'

export { Em }
