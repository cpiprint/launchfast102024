import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A h1 component.
 */
const H1 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h1 ref={ref} className={cn('h1', className)} {...props} />)
H1.displayName = 'H1'

export { H1 }
