import { Flex } from '../components/verveui/layout/flex'
import { H2 } from '../components/verveui/typography/h2'
import { H4 } from '../components/verveui/typography/h4'
import { Lead } from '../components/verveui/typography/lead'
import { P } from '../components/verveui/typography/p'

export const Problem = () => {
	return (
		<Flex orientation="vertical" gap="15" className="pb-48">
			<div>
				<H2 className="mx-auto text-center">Struggling with Project Setup?</H2>
				<Lead className="mx-auto text-center">
					Setting up a new project can be time-consuming and frustrating.
					Without a solid foundation, you might face:
				</Lead>
			</div>
			<Flex justify="center" wrap>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Wasted Time</H4>
						<P className="text-muted-600">
							Hours spent on configuration instead of focusing on the actual
							development.
						</P>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Inconsistencies</H4>
						<P className="text-muted-600">
							Different setups across projects leading to inconsistencies and
							bugs.
						</P>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Lack of Standards</H4>
						<P className="text-muted-600">
							Missing standard practices causing difficulties in maintenance and
							scaling.
						</P>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Tutorial Hell</H4>
						<P className="text-muted-600">
							Getting stuck in endless tutorials without ever building real
							projects.
						</P>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Expensive Courses</H4>
						<P className="text-muted-600">
							Spending money on costly courses that don't provide practical,
							hands-on experience.
						</P>
					</div>
				</div>
				<div className="w-full p-4 md:w-1/2 lg:w-1/3">
					<div className="h-full rounded-lg border border-muted-100 bg-background p-6 shadow-lg">
						<H4 className="mt-0">Overwhelming Choices</H4>
						<P className="text-muted-600">
							The plethora of tools and frameworks can be overwhelming, making
							it difficult to choose the best one for your project.
						</P>
					</div>
				</div>
			</Flex>
		</Flex>
	)
}
