import { type HTMLAttributes, type PropsWithChildren, forwardRef } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

type AspectRatioProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
	ratio?: number
}

/**
 * AspectRatio component.
 *
 * @component
 * @example
 * ```jsx
 * <AspectRatio ratio={16 / 9}>
 * 	<img src={blueSkies} alt="By Sarah Lee on Unsplash" className="h-full w-full rounded-xl object-cover" />
 * </AspectRatio>
 * ```
 *
 * @param {number} [ratio=1] - The aspect ratio.
 * @param {string} [className] - Additional CSS class names.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional HTML attributes.
 * @returns {JSX.Element} The AspectRatio component.
 */
const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
	({ ratio = 1 / 1, className, ...props }, forwardedRef) => {
		return (
			<div
				className="relative w-full"
				style={{ paddingBottom: `${100 / ratio}%` }}
			>
				<div
					ref={forwardedRef}
					className={cn(`absolute bottom-0 left-0 right-0 top-0`, className)}
					{...props}
				/>
			</div>
		)
	},
)
AspectRatio.displayName = 'AspectRatio'

export { AspectRatio }
