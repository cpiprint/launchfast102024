import { Slot } from '@radix-ui/react-slot'
import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ReactNode,
	type ComponentProps,
} from 'react'
import { Icon } from '#app/ui/components/custom/icon'
import { cn } from '#app/utils/tailwind-merge.ts'

const Breadcrumb = forwardRef<
	HTMLElement,
	ComponentPropsWithoutRef<'nav'> & {
		separator?: ReactNode
	}
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = forwardRef<
	HTMLOListElement,
	ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn(
			'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-600 sm:gap-2.5',
			className,
		)}
		{...props}
	/>
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = forwardRef<
	HTMLLIElement,
	ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn('inline-flex items-center gap-1.5', className)}
		{...props}
	/>
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = forwardRef<
	HTMLAnchorElement,
	ComponentPropsWithoutRef<'a'> & {
		asChild?: boolean
	}
>(({ asChild, className, href, ...props }, ref) => {
	const Comp = asChild ? Slot : 'a'

	return (
		<Comp
			ref={ref}
			className={cn('transition-colors hover:text-foreground', className)}
			{...(Comp === 'a' ? { href } : {})}
			{...props}
		/>
	)
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = forwardRef<
	HTMLSpanElement,
	ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		role="link"
		aria-disabled="true"
		aria-current="page"
		className={cn('font-normal text-foreground', className)}
		{...props}
	/>
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: ComponentProps<'li'>) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cn('[&>svg]:size-3.5', className)}
		{...props}
	>
		{children ?? <Icon name="chevron-right" />}
	</li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({
	className,
	...props
}: ComponentProps<'span'>) => (
	<span
		role="presentation"
		aria-hidden="true"
		className={cn('flex h-9 w-9 items-center justify-center', className)}
		{...props}
	>
		<Icon name="dots-horizontal" className="h-4 w-4" />
		<span className="sr-only">More</span>
	</span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
}
