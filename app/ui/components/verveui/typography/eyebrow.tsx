import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A Eyebrow component.
 */
const Eyebrow = forwardRef<
	HTMLHeadingElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn('eyebrow', className)} {...props} />
))
Eyebrow.displayName = 'Eyebrow'

export { Eyebrow }
