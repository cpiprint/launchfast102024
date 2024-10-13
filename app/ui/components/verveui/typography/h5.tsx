import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A h5 component.
 */
const H5 = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => <h5 ref={ref} className={cn('h5', className)} {...props} />)
H5.displayName = 'H5'

export { H5 }
