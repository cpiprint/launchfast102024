import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A h2 component.
 */
const H2 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h2 ref={ref} className={cn('h2', className)} {...props} />)
H2.displayName = 'H2'

export { H2 }
