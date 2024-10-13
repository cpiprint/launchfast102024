import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A h4 component.
 */
const H4 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h4 ref={ref} className={cn('h4', className)} {...props} />
	),
)
H4.displayName = 'H4'

export { H4 }
