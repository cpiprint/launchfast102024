import { type ReactNode } from 'react'
import { cn } from '#app/utils/tailwind-merge.js'

const ScrollingLogos = ({
	className,
	children,
	...props
}: {
	className?: string
	children: ReactNode
}) => {
	return (
		<div className={cn('group flex overflow-hidden', className)} {...props}>
			<div className="animate-loop-scroll flex space-x-10 group-hover:paused">
				{children}
			</div>
			<div
				className="animate-loop-scroll flex space-x-10 group-hover:paused"
				aria-hidden="true"
			>
				{children}
			</div>
			<div
				className="animate-loop-scroll flex space-x-10 group-hover:paused"
				aria-hidden="true"
			>
				{children}
			</div>
			<div
				className="animate-loop-scroll flex space-x-10 group-hover:paused"
				aria-hidden="true"
			>
				{children}
			</div>
		</div>
	)
}
export { ScrollingLogos }
