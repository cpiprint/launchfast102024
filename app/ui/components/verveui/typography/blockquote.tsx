import {
	forwardRef,
	type BlockquoteHTMLAttributes,
	type DetailedHTMLProps,
} from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * A blockquote component.
 */
const Blockquote = forwardRef<
	HTMLQuoteElement,
	DetailedHTMLProps<
		BlockquoteHTMLAttributes<HTMLQuoteElement>,
		HTMLQuoteElement
	>
>(({ className, ...props }, ref) => (
	<blockquote ref={ref} className={cn('blockquote', className)} {...props} />
))
Blockquote.displayName = 'Blockquote'

export { Blockquote }
