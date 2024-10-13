import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

const Ol = forwardRef<HTMLOListElement, HTMLAttributes<HTMLOListElement>>(
	({ className, ...props }, ref) => (
		<ol ref={ref} className={cn('ol', className)} {...props} />
	),
)
Ol.displayName = 'Ol'

export { Ol }
