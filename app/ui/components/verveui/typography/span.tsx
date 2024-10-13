import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A span component.
 */
const Span = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => <span ref={ref} className={cn('span', className)} {...props} />)
Span.displayName = 'Span'

export { Span }
