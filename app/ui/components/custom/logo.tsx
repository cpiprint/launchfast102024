import { Link } from '@remix-run/react'
import { cn } from '#app/utils/tailwind-merge.js'

const Logo = ({ className }: { className?: string }) => {
	return (
		<Link
			to="/"
			className={cn(
				'rounded-md bg-gradient-to-b from-muted-500 to-muted-900 bg-clip-text text-center text-fluid-xl font-bold leading-snug text-transparent',
				className,
			)}
		>
			LaunchFast
		</Link>
	)
}
export { Logo }
