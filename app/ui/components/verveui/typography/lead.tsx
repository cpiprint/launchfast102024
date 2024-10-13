import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A Lead component.
 */
const Lead = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn('lead', className)} {...props} />
	),
)
Lead.displayName = 'Lead'

export { Lead }
