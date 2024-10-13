import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A Hr component.
 */
const Hr = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
	({ className, ...props }, ref) => (
		<hr ref={ref} className={cn('hr', className)} {...props} />
	),
)
Hr.displayName = 'Hr'

export { Hr }
