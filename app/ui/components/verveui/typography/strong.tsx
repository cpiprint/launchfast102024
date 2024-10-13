import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A strong component.
 */
const Strong = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<strong ref={ref} className={cn('strong', className)} {...props} />
	),
)
Strong.displayName = 'Strong'

export { Strong }
