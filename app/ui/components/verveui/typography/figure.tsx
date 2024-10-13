import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * An Figure component.
 */
const Figure = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<figure ref={ref} className={cn('figure', className)} {...props} />
	),
)
Figure.displayName = 'Figure'

export { Figure }
