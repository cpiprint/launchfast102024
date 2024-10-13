import { Icon } from '../components/custom/icon'
import {
	Avatar,
	AvatarImage,
	AvatarFallback,
} from '../components/shadcnui/avatar'
import { Flex } from '../components/verveui/layout/flex'
import { B } from '../components/verveui/typography/b'
import { H2 } from '../components/verveui/typography/h2'
import { Q } from '../components/verveui/typography/q'

export const Testimonials = () => {
	return (
		<Flex orientation="vertical" gap="15" className="pb-48">
			<H2 className="mx-auto text-center">What people are saying</H2>
			<div className="mx-auto space-y-4 md:columns-2 md:gap-6 md:space-y-6 lg:columns-3 xl:columns-4">
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div>
						<p className="p-4">
							Extremely useful and easy to use. I was able to get my app up and
							running in no time.
						</p>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Flex justify="between">
							<Flex items="center" gap="10">
								<Avatar>
									<AvatarImage src="/img/0.jpg" alt="Profile" />
									<AvatarFallback>LV</AvatarFallback>
								</Avatar>
								<Flex orientation="vertical" gap="2">
									<p>
										<B>Lara Vel</B>
									</p>
									<p className="text-xs text-muted-500">Indie Hacker</p>
								</Flex>
							</Flex>
							<Flex items="center" className="h-full text-muted-900">
								{[...Array(5)].map((_, i) => (
									<Icon key={i} name="star-filled" className="text-lg" />
								))}
							</Flex>
						</Flex>
					</div>
				</Flex>
				<Flex
					orientation="vertical"
					items="stretch"
					className="max-w-xs overflow-hidden rounded-lg border"
				>
					<div className="relative">
						<img
							src="/img/0.jpg"
							alt="Lara Vel"
							className="w-full object-cover"
						/>
						<div className="absolute bottom-0 left-0 right-0">
							<Flex justify="between" className="px-3 pb-3 text-muted-50">
								<Icon name="play" className="text-fluid-xl text-muted-100" />
								<div>
									<p>Lara Vel</p>
									<div>
										{[...Array(5)].map((_, i) => (
											<Icon key={i} name="star-filled" className="text-lg" />
										))}
									</div>
								</div>
							</Flex>
						</div>
					</div>
					<div className="h-full w-full bg-gradient-to-b from-muted-100 to-muted-200 p-3">
						<Q>
							I shipped in 3 days an app I have been struggling to get online
							for weeks!
						</Q>
					</div>
				</Flex>
			</div>
		</Flex>
	)
}
