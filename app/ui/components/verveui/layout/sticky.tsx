import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * Sticky component.
 *
 * @component
 * @example
 * ```jsx
 * <div className="mt-14 h-80 overflow-y-auto rounded-lg border">
 * 	<div className="h-10" />
 * 	<Sticky className="top-0 bg-green-500">This sticks</Sticky>
 * 	<div className="h-40" />
 * 	<p>Some content</p>
 * 	<div className="h-40" />
 * 	<Sticky className="top-0 bg-emerald-500">This also sticks</Sticky>
 * 	<div className="h-40" />
 * 	<p>Some more content</p>
 * 	<div className="h-40" />
 * </div>
 * ```
 *
 * @param {string} [className] - Additional CSS class names.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes.
 * @returns {JSX.Element} The Sticky component.
 */
const Sticky = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(({ className, ...props }, ref) => {
	return <div ref={ref} className={cn('sticky', className)} {...props} />
})
Sticky.displayName = 'Sticky'

export { Sticky }
