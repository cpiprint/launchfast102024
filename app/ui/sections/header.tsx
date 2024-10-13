import { Link, useRouteLoaderData } from '@remix-run/react'
import { type loader as rootLoader } from '#app/root.tsx'
import { ThemeSwitch } from '#app/routes/resources+/theme-switch.js'
import { Logo } from '#app/ui/components/custom/logo'
import { Button } from '#app/ui/components/shadcnui/button'
import { Container } from '#app/ui/components/verveui/layout/container'
import { useOptionalUser } from '#app/utils/user.js'
import { UserDropdown } from '../patterns/user-dropdown'

export const Header = () => {
	const data = useRouteLoaderData<typeof rootLoader>('root')!
	const user = useOptionalUser()

	return (
		<Container>
			<header className="py-6">
				<nav className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
					<Logo />
					<div className="flex items-center gap-10">
						<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
						{user ? (
							<UserDropdown />
						) : (
							<Button asChild variant="default" size="lg">
								<Link to="/login">Log In</Link>
							</Button>
						)}
					</div>
				</nav>
			</header>
		</Container>
	)
}
