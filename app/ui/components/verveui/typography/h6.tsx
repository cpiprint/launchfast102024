import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A h6 component.
 */
const H6 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h6 ref={ref} className={cn('h6', className)} {...props} />)
H6.displayName = 'H6'

export { H6 }
