import { Icon } from '#app/ui/components/custom/icon'
import {
	AvatarGroup,
	AvatarGroupList,
	Avatar,
	AvatarImage,
	AvatarFallback,
	AvatarOverflowIndicator,
} from '#app/ui/components/shadcnui/avatar'
import { Flex } from '#app/ui/components/verveui/layout/flex'
import { cn } from '#app/utils/tailwind-merge.js'
//import { useLoaderData } from '@remix-run/react'

export const ReviewSummary = ({ className }: { className?: string }) => {
	//const { sales, rating } = useLoaderData<typeof loader>()
	const sales = 8237
	const rating = 4.9

	return (
		<Flex justify="center" className={cn('text-muted-600', className)}>
			<Flex orientation="vertical" gap="5">
				<Flex gap="14">
					<AvatarGroup limit={5}>
						<AvatarGroupList>
							{Array.from({ length: 5 }).map((_, i) => (
								<Avatar key={i}>
									<AvatarImage src={`/img/${i}.jpg`} alt="Profile" />
									<AvatarFallback>LF</AvatarFallback>
								</Avatar>
							))}
						</AvatarGroupList>
						<AvatarOverflowIndicator />
					</AvatarGroup>
					<Flex orientation="vertical" items="start" gap="2">
						<p className="mx-auto">
							{[...Array(5)].map((_, i) => (
								<Icon key={i} name="star-filled" className="text-xl" />
							))}
						</p>
						<p className="text-xs">Average rating: {rating}/5</p>
					</Flex>
				</Flex>
				<p className="text-center">Trusted by {sales} developers worldwide.</p>
			</Flex>
		</Flex>
	)
}
