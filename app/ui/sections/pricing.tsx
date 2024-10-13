import { Icon } from '../components/custom/icon'
import { H2 } from '../components/verveui/typography/h2'
import { H3 } from '../components/verveui/typography/h3'

export const Pricing = () => {
	return (
		<div id="pricing" className="bg-background py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<H2 className="mx-auto text-center">
						One command line to a fully featured, secure, production-ready
						starter app.
					</H2>
				</div>
				<div className="isolate mx-auto mt-10 grid max-w-full grid-cols-3 gap-8">
					<div className="rounded-3xl p-8 ring-2 ring-muted-300 xl:p-10">
						<div className="flex items-baseline justify-between gap-x-4">
							<H3 className="mt-0">Starter</H3>
						</div>
						<p className="mt-4 text-sm leading-6 text-muted-600">
							Pay once. Build unlimited projects!
						</p>
						<p className="mt-6 flex flex-col items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-muted-900">
								99€
							</span>
							<span className="text-sm font-semibold leading-6 text-muted-600">
								One-time payment
							</span>
						</p>
						<a
							href="#"
							className="animate-pulse-shadow mt-6 block rounded-md bg-brand-bg px-3 py-2 text-center text-sm font-semibold leading-6 text-foreground shadow-sm hover:bg-brand-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-border"
						>
							<Icon name="star-filled" className="text-muted-300" /> Launch Your
							App Now <Icon name="star-filled" className="text-muted-300" />
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-muted-600 xl:mt-10"
						>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Remix Framework
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated SQLite Database
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated Authentication
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated Payments (with Stripe)
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Transactional and Marketing Email Integration
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Complete set of UI components
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								SEO Integrations
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								E2e and unit tests
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Linting and formatting
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Offline development
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Production-ready CD/CI pipeline
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Sentry Monitoring
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Lifetime updates
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Discord community
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Access to the private GitHub repo
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Discuss and shape new features
							</li>
						</ul>
					</div>
					<div className="rounded-3xl p-8 ring-2 ring-brand-border-active xl:p-10">
						<div className="flex items-baseline justify-between gap-x-4">
							<H3 className="mt-0">Pro</H3>
							<p className="rounded-full bg-brand-bg px-2.5 py-1 text-xs font-semibold leading-5 text-brand-text">
								Most popular
							</p>
						</div>
						<p className="mt-4 text-sm leading-6 text-muted-600">
							Pay once. Build unlimited projects!
						</p>
						<p className="mt-6 flex flex-col items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-muted-900">
								199€
							</span>
							<span className="text-sm font-semibold leading-6 text-muted-600">
								One-time payment
							</span>
						</p>
						<a
							href="#"
							className="animate-pulse-shadow mt-6 block rounded-md bg-brand-bg px-3 py-2 text-center text-sm font-semibold leading-6 text-foreground shadow-sm hover:bg-brand-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-border"
						>
							<Icon name="star-filled" className="text-muted-300" /> Launch Your
							App Now <Icon name="star-filled" className="text-muted-300" />
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-muted-600 xl:mt-10"
						>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Remix Framework
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated SQLite Database
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated Authentication
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated Payments (with Stripe)
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Transactional and Marketing Email Integration
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Complete set of UI components
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								SEO Integrations
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								E2e and unit tests
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Linting and formatting
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Offline development
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Production-ready CD/CI pipeline
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Sentry Monitoring
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Lifetime updates
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Discord community
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Access to the private GitHub repo
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Discuss and shape new features
							</li>
						</ul>
					</div>
					<div className="rounded-3xl p-8 ring-2 ring-muted-300 xl:p-10">
						<div className="flex items-baseline justify-between gap-x-4">
							<H3 className="mt-0">Enterprise</H3>
						</div>
						<p className="mt-4 text-sm leading-6 text-muted-600">
							Pay once. Build unlimited projects!
						</p>
						<p className="mt-6 flex flex-col items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-muted-900">
								299€
							</span>
							<span className="text-sm font-semibold leading-6 text-muted-600">
								One-time payment
							</span>
						</p>
						<a
							href="#"
							className="animate-pulse-shadow mt-6 block rounded-md bg-brand-bg px-3 py-2 text-center text-sm font-semibold leading-6 text-foreground shadow-sm hover:bg-brand-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-border"
						>
							<Icon name="star-filled" className="text-muted-300" /> Launch Your
							App Now <Icon name="star-filled" className="text-muted-300" />
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-muted-600 xl:mt-10"
						>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Remix Framework
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated SQLite Database
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated Authentication
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Integrated Payments (with Stripe)
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Transactional and Marketing Email Integration
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Complete set of UI components
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								SEO Integrations
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								E2e and unit tests
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Linting and formatting
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Offline development
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Production-ready CD/CI pipeline
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Sentry Monitoring
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Lifetime updates
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Discord community
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Access to the private GitHub repo
							</li>
							<li className="flex gap-x-3">
								<Icon
									name="check"
									aria-hidden="true"
									className="h-6 w-5 flex-none self-auto text-brand-text"
								/>
								Discuss and shape new features
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
