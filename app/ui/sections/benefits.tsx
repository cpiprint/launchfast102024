import { Flex } from '../components/verveui/layout/flex'
import { H2 } from '../components/verveui/typography/h2'
import { H4 } from '../components/verveui/typography/h4'
import { Lead } from '../components/verveui/typography/lead'

export const Benefits = () => {
	return (
		<Flex orientation="vertical" gap="15" className="pb-48">
			<div>
				<H2 className="mx-auto text-center">Why Choose LaunchFast?</H2>
				<Lead className="mx-auto text-center">
					Discover the unique advantages of using LaunchFast and take your
					project to the next level.
				</Lead>
			</div>
			<Flex justify="center" wrap>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Quick Deployment</H4>
						<p className="text-muted-600">
							Deploy your application in just 2 minutes with our easy-to-use
							setup.
						</p>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Complete Feature Set</H4>
						<p className="text-muted-600">
							Includes authentication, payments, AI, monitoring, testing, and
							more.
						</p>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Excellent Documentation</H4>
						<p className="text-muted-600">
							Comprehensive and easy-to-follow documentation to guide you
							through every step.
						</p>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Great Developer Experience</H4>
						<p className="text-muted-600">
							Optimized for a smooth and efficient development process.
						</p>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Robust Security</H4>
						<p className="text-muted-600">
							Built-in security features to protect your application and user
							data.
						</p>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Active Community</H4>
						<p className="text-muted-600">
							Join a community of developers to share knowledge and get support.
						</p>
					</div>
				</div>
			</Flex>
		</Flex>
	)
}
