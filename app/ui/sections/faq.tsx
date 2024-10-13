import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '../components/shadcnui/accordion'
import { Flex } from '../components/verveui/layout/flex'
import { A } from '../components/verveui/typography/a'
import { H2 } from '../components/verveui/typography/h2'
import { Lead } from '../components/verveui/typography/lead'
import { P } from '../components/verveui/typography/p'
import { Q } from '../components/verveui/typography/q'
import { Ul } from '../components/verveui/typography/ul'

export const FAQ = () => {
	return (
		<Flex orientation="vertical" className="pb-48">
			<H2 className="mx-auto text-center">FAQ</H2>
			<Lead className="mx-auto text-center">
				Have a different question? Reach out at{' '}
				<A href="mailto:hello@launchfast.pro" target="_blank">
					hello@launchfast.pro
				</A>
				.
			</Lead>
			<Accordion type="single" collapsible className="w-full space-y-2">
				<AccordionItem value="item-0">
					<AccordionTrigger className="rounded-lg bg-muted-100 px-4">
						How is LaunchFast different from other products?
					</AccordionTrigger>
					<AccordionContent className="px-4">
						<P>
							The fundamental difference, and what makes LaunchFast stand out
							from other products, is the care that has been taken to ensure you
							have an exceptional developer experience.
						</P>
						<P>
							The aim is for you to go from idea to a production-ready app as
							fast as possible and, barring features that are specific to your
							app, to give you all the tools you'll need to build whatever you
							want.
						</P>
						<P>
							Our goal is to enable you to go from idea to production-ready app
							as fast as possible. Barring features that are specific to your
							app, LaunchFast gives you all the tools you need to build anything
							you want.
						</P>
						<P>
							This is done by incorporating insights from industry leaders,
							engaging with the broader community, and applying a good dose of
							first principles thinking.
						</P>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-1">
					<AccordionTrigger className="rounded-lg bg-muted-100 px-4">
						How is LaunchFast different from the Indie or Epic Stacks?
					</AccordionTrigger>
					<AccordionContent className="px-4">
						<P>
							The fundamental difference between these stacks are their
							principles and how those translate into what the stack contains
							and how good the developer experience is.
						</P>
						<P>
							Think of the{' '}
							<A
								href="https://github.com/remix-run/indie-stack"
								target="_blank"
							>
								Indie Stack
							</A>{' '}
							as the foundation. It brings together most of the developer tools
							we need (TS, ESLint, Prettier), deployment on Fly with Docker,
							SQLite, GitHub Actions, Prisma, Tailwind, Vitest and MSW. But it
							also packs some decisions that might not be the best, like Cypress
							for e2e testing.
						</P>
						<P>
							The Epic Stack has{' '}
							<A
								href="https://github.com/epicweb-dev/epic-stack/blob/main/docs/guiding-principles.md"
								target="_blank"
							>
								these principles
							</A>
							. Among other things,{' '}
							<Q>it is expected that some code will necessarily be deleted</Q>.
							You have to undo a few things to get started, like its notes
							feature that Kent uses to teach his workshops, having a username
							for login, which is unnecessary for most use-cases (and sometimes
							bad practice), it doesn't bring a proper design system, it only
							brings a handful of components built-in, and so on.
						</P>
						<P>
							LaunchFast has a different set of principles (check above) all
							aimed at a single goal: to allow you to go from idea to finished
							product as fast as possible. There's nothing you need to undo and
							it already packs everything you need to hit the ground running
							building your app, including support files (like a Figma file to
							help you export your logo and icons when you're ready for public
							release), documentation, and guides to help you along the way.
						</P>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="rounded-lg bg-muted-100 px-4">
						What do I get, exactly, after purchase?
					</AccordionTrigger>
					<AccordionContent className="px-4">
						<P>
							You get a zip file that contains the stack (from which you can
							create as many projects as you like) and support files. The
							documentation and guides are included in the stack itself, so they
							are colocated with the code. You also get access to a Discord
							server just for LaunchFast users and a private GitHub repo where
							you can discuss and help shape new features.
						</P>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="rounded-lg bg-muted-100 px-4">
						The stack doesn't have a feature I need. What can I do?
					</AccordionTrigger>
					<AccordionContent className="px-4">
						<P>You have three options:</P>
						<Ul>
							<li>
								Check if an example with the thing you want already exists
							</li>
							<li>
								Create a copy or fork and change it to your hearts content
							</li>
							<li>
								Add a feature request in the private GitHub repo (after
								purchase)
							</li>
						</Ul>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="rounded-lg bg-muted-100 px-4">
						I can't afford LaunchFast. What can I do?
					</AccordionTrigger>
					<AccordionContent className="px-4">
						<P>
							If you can't afford LaunchFast, my suggestion is that you take a
							look at{' '}
							<A
								href="https://github.com/epicweb-dev/epic-stack"
								target="_blank"
							>
								Epic Stack
							</A>{' '}
							made by Kent C. Dodds and community. It's a great stack and it's
							what I used to build LaunchFast.
						</P>
						<P>
							If that's not what you're looking for, take a look at the{' '}
							<A href="https://remix.run/blog/remix-stacks" target="_blank">
								Remix Stacks
							</A>{' '}
							built by the Remix team. They have a few different stacks to get
							you started.
						</P>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Flex>
	)
}
