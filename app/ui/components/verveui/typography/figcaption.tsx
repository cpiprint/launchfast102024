import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * An Figcaption component.
 */
const Figcaption = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<figcaption ref={ref} className={cn('figcaption', className)} {...props} />
	),
)
Figcaption.displayName = 'Figcaption'

export { Figcaption }
