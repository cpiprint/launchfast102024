import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * Container component.
 *
 * @component
 * @example
 * ```jsx
 * <Container>Some content</Container>
 * ```
 *
 * @param {string} [className] - Additional CSS class names.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes.
 * @returns {JSX.Element} The Container component.
 */
const Container = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('container', className)} {...props} />
))
Container.displayName = 'Container'

export { Container }
