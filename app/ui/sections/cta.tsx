import { Icon } from '../components/custom/icon'
import { Flex } from '../components/verveui/layout/flex'
import { A } from '../components/verveui/typography/a'
import { H2 } from '../components/verveui/typography/h2'
import { Lead } from '../components/verveui/typography/lead'

export const CTA = ({ className }: { className?: string }) => {
	return (
		<Flex orientation="vertical" justify="center" className={className}>
			<H2 className="mx-auto text-center">Boost your app, launch, earn</H2>
			<Lead className="mx-auto text-center">
				Don't waste time in integration and configuration...
			</Lead>
			<Flex justify="center" className="mt-fluid-15">
				<A
					href="#"
					className="button primary lg animate-pulse-shadow !px-fluid-12 no-underline sm:!px-fluid-15"
				>
					<Icon name="star-filled" className="text-muted-300" /> Launch Your App
					Now <Icon name="star-filled" className="text-muted-300" />
				</A>
			</Flex>
		</Flex>
	)
}
