import { forwardRef, type ImgHTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

/**
 * An Img component.
 */
const Img = forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>(
	({ alt, className, ...props }, ref) => (
		<img ref={ref} className={cn('img', className)} alt={alt} {...props} />
	),
)
Img.displayName = 'Img'

export { Img }
