import { Link, type LinkProps } from '@remix-run/react'
import { forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * An A component.
 */
const A = forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'> & { href: string }>(({ href, children, className, ...props }, ref) => (
	<Link to={href} ref={ref} className={cn('a', className)} {...props}>
		{children}
	</Link>
))
A.displayName = 'A'

export { A }
