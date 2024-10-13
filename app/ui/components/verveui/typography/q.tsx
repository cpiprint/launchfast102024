import { forwardRef, type QuoteHTMLAttributes, type DetailedHTMLProps } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A Q (quote) component.
 */
const Q = forwardRef<HTMLQuoteElement, DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>(({ className, ...props }, ref) => (
	<q ref={ref} className={cn('q', className)} {...props} />
))
Q.displayName = 'Q'

export { Q }
