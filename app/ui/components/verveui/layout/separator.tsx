import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

type SeparatorProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
	orientation?: 'horizontal' | 'vertical'
	decorative?: boolean
}

/**
 * Accessible implementation of a Separator. Supports purely decorative separators, i.e. removed from the accessibility tree.
 *
 * @component
 * @example
 * ```jsx
 * <div className="border-muted-200 my-10 max-w-md rounded-lg border p-6">
 * 	<h2 className="text-bold text-2xl font-bold">VerveUI</h2>
 * 	<p className="text-muted-500 text-lg">A UI component library.</p>
 * 	<Separator className="my-4" />
 * 	<Flex gap="10" items="center" className="h-5">
 * 		<p>Blog</p>
 * 		<Separator orientation="vertical" decorative />
 * 		<p>Docs</p>
 * 		<Separator orientation="vertical" decorative />
 * 		<p>Source</p>
 * 	</Flex>
 * </div>
 * ```
 *
 * @param {string} [orientation='horizontal'] - The orientation of the separator. Can be 'horizontal' or 'vertical'.
 * @param {decorative} [decorative] - Whether the separator is decorative or not.
 * @param {string} [className] - Additional CSS class names.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes.
 * @returns {JSX.Element} The Separator component.
 */
const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
	(
		{ orientation = 'horizontal', decorative, className, ...props },
		forwardedRef,
	) => {
		// if orientation is horizontal, we leave aria-orientation undefined because the default is horizontal
		// if it's vertical, we need to specify it
		const ariaOrientation = orientation === 'vertical' ? orientation : undefined
		// If component is purely decorative, we set role as 'none' to remove it from the accessibility tree
		const semanticProps = decorative
			? { role: 'none' }
			: { 'aria-orientation': ariaOrientation, role: 'separator' }

		return (
			<div
				ref={forwardedRef}
				data-orientation={orientation}
				{...semanticProps}
				className={cn('separator', className)}
				{...props}
			/>
		)
	},
)
Separator.displayName = 'Separator'

export { Separator }
