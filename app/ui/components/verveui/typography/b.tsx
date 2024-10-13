import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A b component.
 */
const B = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => {
	return <b ref={ref} className={cn('b', className)} {...props} />
})
B.displayName = 'B'

export { B }
