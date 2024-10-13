import { type VariantProps, cva } from 'class-variance-authority'
import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

const gridVariants = cva('grid', {
	variants: {
		flow: {
			row: 'grid-flow-row',
			col: 'grid-flow-col',
		},
		justify: {
			start: 'justify-items-start',
			center: 'justify-items-center',
			end: 'justify-items-end',
			stretch: 'justify-items-stretch',
		},
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			baseline: 'items-baseline',
			stretch: 'items-stretch',
		},
		gapX: {
			'0': 'gap-x-fluid-0',
			'1': 'gap-x-fluid-1',
			'2': 'gap-x-fluid-2',
			'3': 'gap-x-fluid-3',
			'4': 'gap-x-fluid-4',
			'5': 'gap-x-fluid-5',
			'6': 'gap-x-fluid-6',
			'7': 'gap-x-fluid-7',
			'8': 'gap-x-fluid-8',
			'9': 'gap-x-fluid-9',
			'10': 'gap-x-fluid-10',
			'11': 'gap-x-fluid-11',
			'12': 'gap-x-fluid-12',
			'13': 'gap-x-fluid-13',
			'14': 'gap-x-fluid-14',
			'15': 'gap-x-fluid-15',
			'16': 'gap-x-fluid-16',
			'17': 'gap-x-fluid-17',
			'18': 'gap-x-fluid-18',
			'19': 'gap-x-fluid-19',
			'20': 'gap-x-fluid-20',
		},
		gapY: {
			'0': 'gap-y-fluid-0',
			'1': 'gap-y-fluid-1',
			'2': 'gap-y-fluid-2',
			'3': 'gap-y-fluid-3',
			'4': 'gap-y-fluid-4',
			'5': 'gap-y-fluid-5',
			'6': 'gap-y-fluid-6',
			'7': 'gap-y-fluid-7',
			'8': 'gap-y-fluid-8',
			'9': 'gap-y-fluid-9',
			'10': 'gap-y-fluid-10',
			'11': 'gap-y-fluid-11',
			'12': 'gap-y-fluid-12',
			'13': 'gap-y-fluid-13',
			'14': 'gap-y-fluid-14',
			'15': 'gap-y-fluid-15',
			'16': 'gap-y-fluid-16',
			'17': 'gap-y-fluid-17',
			'18': 'gap-y-fluid-18',
			'19': 'gap-y-fluid-19',
			'20': 'gap-y-fluid-20',
		},
	},
})

type GridProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> &
	VariantProps<typeof gridVariants> & {
		inline?: boolean
		cols?: `${number}` // Any string which could be produced by coercing a number
		rows?: `${number}` // Any string which could be produced by coercing a number
	}

/**
 * Grid component for creating bidimensional layouts.
 *
 * @component
 * @example
 * ```jsx
 * <Grid cols="12" rows="3" gapX="6" gapY="6" className="bg-muted-200 mt-4 h-96 rounded-md p-4">
 *		<div className="bg-muted-600 col-span-12 flex h-full w-full items-center justify-center rounded-sm text-white">Header</div>
 *		<div className="bg-muted-600 col-span-3 flex h-full w-full items-center justify-center rounded-sm text-white">Sidebar</div>
 *		<div className="bg-muted-600 col-span-9 flex h-full w-full items-center justify-center rounded-sm text-white">Content</div>
 *		<div className="bg-muted-600 col-span-12 flex h-full w-full items-center justify-center rounded-sm text-white">Footer</div>
 *	</Grid>
 * ```
 *
 * @param {`{number}`} [cols] - The number of columns
 * @param {`{number}`} [rows] - The number of rows
 * @param {string} [justify='start'] - The alignment of items along the main axis. Can be 'start', 'center', 'end', or 'stretch'.
 * @param {string} [align='start'] - The alignment of items along the cross axis. Can be 'start', 'center', 'end', 'baseline', or 'stretch'.
 * @param {boolean} [gapX='0'] - The gap between items along the main axis. Can be a number from 0 to 20.
 * @param {boolean} [gapY='0'] - The gap between items along the cross axis. Can be a number from 0 to 20.
 * @param {string} [className] - Additional CSS class names.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes.
 * @returns {JSX.Element} The Grid component.
 */
const Grid = forwardRef<HTMLDivElement, GridProps>(
	(
		{
			inline = false,
			cols,
			rows,
			flow = 'row',
			justify = 'start',
			align = 'start',
			gapX = '0',
			gapY = '0',
			className,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					gridVariants({ flow, justify, align, gapX, gapY }),
					inline ? `inline-grid` : ``,
					className,
				)}
				style={{
					gridTemplateColumns: cols
						? `repeat(${cols}, minmax(0, 1fr))`
						: undefined,
					gridTemplateRows: rows
						? `repeat(${rows}, minmax(0, 1fr))`
						: undefined,
				}}
				{...props}
			/>
		)
	},
)
Grid.displayName = 'Grid'

export { Grid }
