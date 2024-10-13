import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge'

const Kbd = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<kbd ref={ref} className={cn('kbd', className)} {...props} />
	),
)
Kbd.displayName = 'Kbd'

export { Kbd }
