import { cn } from '#app/utils/tailwind-merge.ts'

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('animate-pulse rounded-md bg-muted-200', className)}
			{...props}
		/>
	)
}

export { Skeleton }
