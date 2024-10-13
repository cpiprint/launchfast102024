import { type VariantProps, cva } from 'class-variance-authority'
import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

const flexVariants = cva('flex', {
	variants: {
		orientation: {
			horizontal: 'flex-row',
			vertical: 'flex-col',
		},
		justify: {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between',
		},
		items: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			baseline: 'items-baseline',
			stretch: 'items-stretch',
		},
		gap: {
			'0': 'gap-0',
			'1': 'gap-fluid-1',
			'2': 'gap-fluid-2',
			'3': 'gap-fluid-3',
			'4': 'gap-fluid-4',
			'5': 'gap-fluid-5',
			'6': 'gap-fluid-6',
			'7': 'gap-fluid-7',
			'8': 'gap-fluid-8',
			'9': 'gap-fluid-9',
			'10': 'gap-fluid-10',
			'11': 'gap-fluid-11',
			'12': 'gap-fluid-12',
			'13': 'gap-fluid-13',
			'14': 'gap-fluid-14',
			'15': 'gap-fluid-15',
			'16': 'gap-fluid-16',
			'17': 'gap-fluid-17',
			'18': 'gap-fluid-18',
			'19': 'gap-fluid-19',
			'20': 'gap-fluid-20',
		},
	},
})

type FlexProps = { inline?: boolean; wrap?: boolean } & VariantProps<typeof flexVariants> & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Flex component for creating unidimensional layouts.
 *
 * @component
 * @example
 * ```jsx
 * <Flex justify="between" items="center" gap="6">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 * ```
 *
 * @param {string} [justify] - The alignment of items along the main axis. Can be 'start', 'center', 'end', or 'between'.
 * @param {string} [items] - The alignment of items along the cross axis. Can be 'start', 'center', 'end', 'baseline', or 'stretch'.
 * @param {string} [gap='0'] - The gap between items. Can be a number from 0 to 20.
 * @param {string} [orientation='horizontal'] - The orientation of the flex container. Can be 'horizontal' or 'vertical'.
 * @param {boolean} [inline=false] - Whether the flex container should be displayed as an inline element.
 * @param {boolean} [wrap=false] - Whether items should wrap to multiple lines.
 * @param {string} [className] - Additional CSS class names.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes.
 * @returns {JSX.Element} The Flex component.
 */
const Flex = forwardRef<HTMLDivElement, FlexProps>(({ inline = false, wrap = false, orientation = 'horizontal', justify, items, gap = '0', className, ...props }, ref) => {
	return <div ref={ref} className={cn(flexVariants({ orientation, items, justify, gap }), inline ? `inline-flex` : ``, wrap ? `flex-wrap` : ``, className)} {...props} />
})
Flex.displayName = 'Flex'

export { Flex }
