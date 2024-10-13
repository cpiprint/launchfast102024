import { type MetaFunction } from '@remix-run/node'
import {
	type ColumnDef,
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { format } from 'date-fns'
import {
	type ReactNode,
	useState,
	forwardRef,
	type ElementRef,
	type ComponentPropsWithoutRef,
} from 'react'
import { toast } from 'sonner'
import { useIsomorphicLayoutEffect } from '#app/hooks/useIsomorphicLayoutEffect.js'
import { Icon } from '#app/ui/components/custom/icon.js'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '#app/ui/components/shadcnui/accordion.js'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '#app/ui/components/shadcnui/alert-dialog.js'
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from '#app/ui/components/shadcnui/alert.js'
import {
	Avatar,
	AvatarImage,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupList,
	AvatarOverflowIndicator,
} from '#app/ui/components/shadcnui/avatar.js'
import { Badge } from '#app/ui/components/shadcnui/badge.js'
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '#app/ui/components/shadcnui/breadcrumb.js'
import { Button } from '#app/ui/components/shadcnui/button.js'
import { Calendar } from '#app/ui/components/shadcnui/calendar.js'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '#app/ui/components/shadcnui/card.js'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '#app/ui/components/shadcnui/carousel.js'
import { Checkbox } from '#app/ui/components/shadcnui/checkbox.js'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '#app/ui/components/shadcnui/collapsible.js'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	/* CommandSeparator,
	CommandShortcut, */
} from '#app/ui/components/shadcnui/command.js'
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '#app/ui/components/shadcnui/context-menu.js'
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '#app/ui/components/shadcnui/dialog.js'
/* import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '#app/ui/components/shadcnui/drawer.js' */
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from '#app/ui/components/shadcnui/dropdown-menu.js'
import {
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
} from '#app/ui/components/shadcnui/hover-card.js'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
	InputOTPSeparator,
} from '#app/ui/components/shadcnui/input-otp.js'
import { Input } from '#app/ui/components/shadcnui/input.js'
import { Label } from '#app/ui/components/shadcnui/label.js'
import {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarShortcut,
	MenubarSeparator,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
} from '#app/ui/components/shadcnui/menubar.js'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from '#app/ui/components/shadcnui/navigation-menu.js'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationEllipsis,
	PaginationNext,
} from '#app/ui/components/shadcnui/pagination.js'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '#app/ui/components/shadcnui/popover.js'
import { Progress } from '#app/ui/components/shadcnui/progress.js'
import {
	RadioGroup,
	RadioGroupItem,
} from '#app/ui/components/shadcnui/radio-group.js'
import {
	ResizablePanelGroup,
	ResizablePanel,
	ResizableHandle,
} from '#app/ui/components/shadcnui/resizable.js'
import { ScrollArea } from '#app/ui/components/shadcnui/scroll-area.js'
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
} from '#app/ui/components/shadcnui/select.js'
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetFooter,
	SheetClose,
} from '#app/ui/components/shadcnui/sheet.js'
import { Skeleton } from '#app/ui/components/shadcnui/skeleton.js'
import { Slider } from '#app/ui/components/shadcnui/slider.js'
import { Switch } from '#app/ui/components/shadcnui/switch.js'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '#app/ui/components/shadcnui/table.js'
import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from '#app/ui/components/shadcnui/tabs.js'
import { Textarea } from '#app/ui/components/shadcnui/textarea.js'
import {
	ToggleGroup,
	ToggleGroupItem,
} from '#app/ui/components/shadcnui/toggle-group.js'
import { Toggle } from '#app/ui/components/shadcnui/toggle.js'
import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from '#app/ui/components/shadcnui/tooltip.js'
import { Container } from '#app/ui/components/verveui/layout/container.js'
import { Flex } from '#app/ui/components/verveui/layout/flex.js'
import { Separator } from '#app/ui/components/verveui/layout/separator.js'
import { A } from '#app/ui/components/verveui/typography/a.js'
import { P } from '#app/ui/components/verveui/typography/p.js'
import { cn } from '#app/utils/tailwind-merge.js'

export const meta: MetaFunction = () => {
	return [{ name: 'robots', content: `noindex,nofollow` }]
}

const data: Payment[] = [
	{
		id: 'm5gr84i9',
		amount: 316,
		status: 'success',
		email: 'ken99@yahoo.com',
	},
	{
		id: '3u1reuv4',
		amount: 242,
		status: 'success',
		email: 'Abe45@gmail.com',
	},
	{
		id: 'derv1ws0',
		amount: 837,
		status: 'processing',
		email: 'Monserrat44@gmail.com',
	},
	{
		id: '5kma53ae',
		amount: 874,
		status: 'success',
		email: 'Silas22@gmail.com',
	},
	{
		id: 'bhqecj4p',
		amount: 721,
		status: 'failed',
		email: 'carmella@hotmail.com',
	},
]

type Payment = {
	id: string
	amount: number
	status: 'pending' | 'processing' | 'success' | 'failed'
	email: string
}

const columns: ColumnDef<Payment>[] = [
	{
		id: 'select',
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && 'indeterminate')
				}
				onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={value => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('status')}</div>
		),
	},
	{
		accessorKey: 'email',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Email
					<Icon name="caret-sort" className="ml-2 h-4 w-4" />
				</Button>
			)
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
	},
	{
		accessorKey: 'amount',
		header: () => <div className="text-right">Amount</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('amount'))

			// Format the amount as a dollar amount
			const formatted = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(amount)

			return <div className="text-right font-medium">{formatted}</div>
		},
	},
	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<Icon name="dots-horizontal" className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		},
	},
]

export default function Route() {
	const [dateCalendar, setDateCalendar] = useState<Date | undefined>(new Date())
	const [dateDatePicker, setDateDatePicker] = useState<Date | undefined>(
		new Date(),
	)
	const [isOpenCollapsible, setIsOpenCollapsible] = useState(false)
	const [openCombobox, setOpenCombobox] = useState(false)
	const [valueCombobox, setValueCombobox] = useState('')

	// Data Table
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})
	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	})

	const frameworks = [
		{
			value: 'next.js',
			label: 'Next.js',
		},
		{
			value: 'sveltekit',
			label: 'SvelteKit',
		},
		{
			value: 'nuxt.js',
			label: 'Nuxt.js',
		},
		{
			value: 'remix',
			label: 'Remix',
		},
		{
			value: 'astro',
			label: 'Astro',
		},
	]

	/* const [goalDrawer, setGoalDrawer] = useState(350)

	function onClickDrawer(adjustment: number) {
		setGoalDrawer(Math.max(200, Math.min(400, goalDrawer + adjustment)))
	} */

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Alert Dialog',
			href: '/docs/primitives/alert-dialog',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.',
		},
		{
			title: 'Hover Card',
			href: '/docs/primitives/hover-card',
			description:
				'For sighted users to preview content available behind a link.',
		},
		{
			title: 'Progress',
			href: '/docs/primitives/progress',
			description:
				'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
		},
		{
			title: 'Scroll-area',
			href: '/docs/primitives/scroll-area',
			description: 'Visually or semantically separates content.',
		},
		{
			title: 'Tabs',
			href: '/docs/primitives/tabs',
			description:
				'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
		},
		{
			title: 'Tooltip',
			href: '/docs/primitives/tooltip',
			description:
				'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
		},
	]

	const [progress, setProgress] = useState(5)

	useIsomorphicLayoutEffect(() => {
		if (progress >= 100) return
		const interval = setInterval(() => {
			setProgress(prevProgress => {
				const newProgress = prevProgress + 5
				if (newProgress >= 100) {
					clearInterval(interval)
					return 100
				}
				return newProgress
			})
		}, 500)
		return () => clearInterval(interval)
	}, [progress])

	const tagsScrollable = Array.from({ length: 50 }).map(
		(_, i, a) => `v1.2.0-beta.${a.length - i}`,
	)

	const tableData = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card',
		},
	]

	return (
		<Container>
			<P className="rounded-2xl bg-foreground p-5 text-background">
				Use this page to see how changes to your design system affect your UI
				components. Typography components have their own route so you can see
				how they interact with each other.
			</P>
			<CategoryWrapper title="Layout">
				<ComponentWrapper title="Separator">
					<div className="my-10 max-w-md rounded-lg border border-muted-200 p-6">
						<h2 className="text-bold text-2xl font-bold">LaunchFast</h2>
						<p className="text-lg text-muted-500">A Remix Stack.</p>
						<Separator className="my-4" />
						<Flex gap="10" items="center" className="h-5">
							<p>Blog</p>
							<Separator orientation="vertical" decorative />
							<p>Docs</p>
							<Separator orientation="vertical" decorative />
							<p>Source</p>
						</Flex>
					</div>
				</ComponentWrapper>
				<ComponentWrapper title="Scrollable">
					<ScrollArea className="h-72 w-48 rounded-md border">
						<div className="p-4">
							<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
							{tagsScrollable.map(tag => (
								<div key={tag}>
									<div className="text-sm">{tag}</div>
									<Separator className="my-2" />
								</div>
							))}
						</div>
					</ScrollArea>
				</ComponentWrapper>
				<ComponentWrapper title="Skeleton">
					<div className="flex items-center space-x-4">
						<Skeleton className="h-12 w-12 rounded-full" />
						<div className="space-y-2">
							<Skeleton className="h-4 w-[250px]" />
							<Skeleton className="h-4 w-[200px]" />
						</div>
					</div>
				</ComponentWrapper>
				<ComponentWrapper title="Resizable">
					<ResizablePanelGroup
						direction="horizontal"
						className="max-w-md rounded-lg border border-muted-200"
					>
						<ResizablePanel defaultSize={50}>
							<div className="flex h-[200px] items-center justify-center p-6">
								<span className="font-semibold">One</span>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={50}>
							<ResizablePanelGroup direction="vertical">
								<ResizablePanel defaultSize={25}>
									<div className="flex h-full items-center justify-center p-6">
										<span className="font-semibold">Two</span>
									</div>
								</ResizablePanel>
								<ResizableHandle withHandle />
								<ResizablePanel defaultSize={75}>
									<div className="flex h-full items-center justify-center p-6">
										<span className="font-semibold">Three</span>
									</div>
								</ResizablePanel>
							</ResizablePanelGroup>
						</ResizablePanel>
					</ResizablePanelGroup>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Media">
				<ComponentWrapper title="Icon">
					<Icon name="image" className="h-10 w-10" />
				</ComponentWrapper>
				<ComponentWrapper title="Avatar">
					<Avatar>
						<AvatarImage src="/img/0.jpg" alt="Woman" />
						<AvatarFallback>LF</AvatarFallback>
					</Avatar>
				</ComponentWrapper>
				<ComponentWrapper title="Avatar Group">
					<AvatarGroup limit={3} className="flex flex-wrap">
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
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Navigation">
				<ComponentWrapper title="Breadcrumb">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<DropdownMenu>
									<DropdownMenuTrigger className="flex items-center gap-1">
										<BreadcrumbEllipsis className="h-4 w-4" />
										<span className="sr-only">Toggle menu</span>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="start">
										<DropdownMenuItem>Documentation</DropdownMenuItem>
										<DropdownMenuItem>Themes</DropdownMenuItem>
										<DropdownMenuItem>GitHub</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/docs/components">
									Components
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</ComponentWrapper>
				<ComponentWrapper title="Navigation Menu">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted-100 to-muted-200 p-6 no-underline outline-none focus:shadow-md"
													href="/"
												>
													<Icon name="home" className="h-6 w-6" />
													<div className="mb-2 mt-4 text-lg font-medium">
														shadcn/ui
													</div>
													<p className="text-sm leading-tight text-muted-600">
														Beautifully designed components that you can copy
														and paste into your apps. Accessible. Customizable.
														Open Source.
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem href="/docs" title="Introduction">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem>
										<ListItem href="/docs/installation" title="Installation">
											How to install dependencies and structure your app.
										</ListItem>
										<ListItem
											href="/docs/primitives/typography"
											title="Typography"
										>
											Styles for headings, paragraphs, lists...etc
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Components</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{components.map(component => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/docs"
									className={navigationMenuTriggerStyle()}
								>
									Documentation
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</ComponentWrapper>
				<ComponentWrapper title="Pagination">
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" isActive>
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</ComponentWrapper>
				<ComponentWrapper title="Menubar">
					<Menubar>
						<MenubarMenu>
							<MenubarTrigger>File</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									New Tab <MenubarShortcut>⌘T</MenubarShortcut>
								</MenubarItem>
								<MenubarItem>
									New Window <MenubarShortcut>⌘N</MenubarShortcut>
								</MenubarItem>
								<MenubarItem disabled>New Incognito Window</MenubarItem>
								<MenubarSeparator />
								<MenubarSub>
									<MenubarSubTrigger>Share</MenubarSubTrigger>
									<MenubarSubContent>
										<MenubarItem>Email link</MenubarItem>
										<MenubarItem>Messages</MenubarItem>
										<MenubarItem>Notes</MenubarItem>
									</MenubarSubContent>
								</MenubarSub>
								<MenubarSeparator />
								<MenubarItem>
									Print... <MenubarShortcut>⌘P</MenubarShortcut>
								</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Edit</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									Undo <MenubarShortcut>⌘Z</MenubarShortcut>
								</MenubarItem>
								<MenubarItem>
									Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarSub>
									<MenubarSubTrigger>Find</MenubarSubTrigger>
									<MenubarSubContent>
										<MenubarItem>Search the web</MenubarItem>
										<MenubarSeparator />
										<MenubarItem>Find...</MenubarItem>
										<MenubarItem>Find Next</MenubarItem>
										<MenubarItem>Find Previous</MenubarItem>
									</MenubarSubContent>
								</MenubarSub>
								<MenubarSeparator />
								<MenubarItem>Cut</MenubarItem>
								<MenubarItem>Copy</MenubarItem>
								<MenubarItem>Paste</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>View</MenubarTrigger>
							<MenubarContent>
								<MenubarCheckboxItem>
									Always Show Bookmarks Bar
								</MenubarCheckboxItem>
								<MenubarCheckboxItem checked>
									Always Show Full URLs
								</MenubarCheckboxItem>
								<MenubarSeparator />
								<MenubarItem inset>
									Reload <MenubarShortcut>⌘R</MenubarShortcut>
								</MenubarItem>
								<MenubarItem disabled inset>
									Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
								</MenubarItem>
								<MenubarSeparator />
								<MenubarItem inset>Toggle Fullscreen</MenubarItem>
								<MenubarSeparator />
								<MenubarItem inset>Hide Sidebar</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
						<MenubarMenu>
							<MenubarTrigger>Profiles</MenubarTrigger>
							<MenubarContent>
								<MenubarRadioGroup value="benoit">
									<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
									<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
									<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
								</MenubarRadioGroup>
								<MenubarSeparator />
								<MenubarItem inset>Edit...</MenubarItem>
								<MenubarSeparator />
								<MenubarItem inset>Add Profile...</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Buttons">
				<ComponentWrapper title="Button">
					<Button variant="default">Button</Button>
					<Button variant="secondary">Button</Button>
					<Button variant="destructive">Button</Button>
					<Button variant="ghost">Button</Button>
					<Button variant="link">Button</Button>
					<Button variant="outline">Button</Button>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Overlays">
				<ComponentWrapper title="Tooltip">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline">Hover Me</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Add to library</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</ComponentWrapper>
				<ComponentWrapper title="Dialog">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Open Dialog</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Edit profile</DialogTitle>
								<DialogDescription>
									Make changes to your profile here. Click save when you're
									done.
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input
										id="name"
										defaultValue="Pedro Duarte"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										Username
									</Label>
									<Input
										id="username"
										defaultValue="@peduarte"
										className="col-span-3"
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type="submit">Save changes</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</ComponentWrapper>
				<ComponentWrapper title="Alert Dialog">
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button variant="outline">Show Alert Dialog</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction>Continue</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				</ComponentWrapper>
				<ComponentWrapper title="Sheet">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">Open</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Edit profile</SheetTitle>
								<SheetDescription>
									Make changes to your profile here. Click save when you're
									done.
								</SheetDescription>
							</SheetHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input
										id="name"
										defaultValue="André Casal"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="username" className="text-right">
										Username
									</Label>
									<Input
										id="username"
										defaultValue="@andrecasaldev"
										className="col-span-3"
									/>
								</div>
							</div>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="submit">Save changes</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</ComponentWrapper>
				<ComponentWrapper title="Drawer">
					<p>
						The Drawer is commented out because it has a{' '}
						<A
							href="https://github.com/emilkowalski/vaul/pull/377"
							target="_blank"
						>
							useLayoutEffect bug
						</A>{' '}
						that affects SSR.
					</p>
					{/* <Drawer>
						<DrawerTrigger asChild>
							<Button variant="outline">Open Drawer</Button>
						</DrawerTrigger>
						<DrawerContent>
							<div className="mx-auto w-full max-w-sm">
								<DrawerHeader>
									<DrawerTitle>Move Goal</DrawerTitle>
									<DrawerDescription>
										Set your daily activity goal.
									</DrawerDescription>
								</DrawerHeader>
								<div className="p-4 pb-0">
									<div className="flex items-center justify-center space-x-2">
										<Button
											variant="outline"
											size="icon"
											className="h-8 w-8 shrink-0 rounded-full"
											onClick={() => onClickDrawer(-10)}
											disabled={goalDrawer <= 200}
										>
											<Icon name="minus" className="h-4 w-4" />
											<span className="sr-only">Decrease</span>
										</Button>
										<div className="flex-1 text-center">
											<div className="text-7xl font-bold tracking-tighter">
												{goalDrawer}
											</div>
											<div className="text-[0.70rem] uppercase text-muted-600">
												Calories/day
											</div>
										</div>
										<Button
											variant="outline"
											size="icon"
											className="h-8 w-8 shrink-0 rounded-full"
											onClick={() => onClickDrawer(10)}
											disabled={goalDrawer >= 400}
										>
											<Icon name="plus" className="h-4 w-4" />
											<span className="sr-only">Increase</span>
										</Button>
									</div>
									<div className="mt-3 h-[120px]">
										<P>
											Your goal is to burn {goalDrawer} calories per day. This
											is based on your activity level and weight loss goals.
										</P>
									</div>
								</div>
								<DrawerFooter>
									<Button>Submit</Button>
									<DrawerClose asChild>
										<Button variant="outline">Cancel</Button>
									</DrawerClose>
								</DrawerFooter>
							</div>
						</DrawerContent>
					</Drawer> */}
				</ComponentWrapper>
				<ComponentWrapper title="Popover">
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline">Open popover</Button>
						</PopoverTrigger>
						<PopoverContent className="w-80">
							<div className="grid gap-4">
								<div className="space-y-2">
									<h4 className="font-medium leading-none">Dimensions</h4>
									<p className="text-sm text-muted-600">
										Set the dimensions for the layer.
									</p>
								</div>
								<div className="grid gap-2">
									<div className="grid grid-cols-3 items-center gap-4">
										<Label htmlFor="width">Width</Label>
										<Input
											id="width"
											defaultValue="100%"
											className="col-span-2 h-8"
										/>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<Label htmlFor="maxWidth">Max. width</Label>
										<Input
											id="maxWidth"
											defaultValue="300px"
											className="col-span-2 h-8"
										/>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<Label htmlFor="height">Height</Label>
										<Input
											id="height"
											defaultValue="25px"
											className="col-span-2 h-8"
										/>
									</div>
									<div className="grid grid-cols-3 items-center gap-4">
										<Label htmlFor="maxHeight">Max. height</Label>
										<Input
											id="maxHeight"
											defaultValue="none"
											className="col-span-2 h-8"
										/>
									</div>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</ComponentWrapper>
				<ComponentWrapper title="Dropdown Menu">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">Open</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Icon name="avatar" className="mr-2 h-4 w-4" />
									<span>Profile</span>
									<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Icon name="card-stack" className="mr-2 h-4 w-4" />
									<span>Billing</span>
									<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Icon name="gear" className="mr-2 h-4 w-4" />
									<span>Settings</span>
									<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Icon name="keyboard" className="mr-2 h-4 w-4" />
									<span>Keyboard shortcuts</span>
									<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Icon name="avatar" className="mr-2 h-4 w-4" />
									<span>Team</span>
								</DropdownMenuItem>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
										<Icon name="paper-plane" className="mr-2 h-4 w-4" />
										<span>Invite users</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											<DropdownMenuItem>
												<Icon name="envelope-closed" className="mr-2 h-4 w-4" />
												<span>Email</span>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Icon name="chat-bubble" className="mr-2 h-4 w-4" />
												<span>Message</span>
											</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												<Icon name="plus-circled" className="mr-2 h-4 w-4" />
												<span>More...</span>
											</DropdownMenuItem>
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								<DropdownMenuItem>
									<Icon name="plus" className="mr-2 h-4 w-4" />
									<span>New Team</span>
									<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Icon name="github-logo" className="mr-2 h-4 w-4" />
								<span>GitHub</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Icon name="info-circled" className="mr-2 h-4 w-4" />
								<span>Support</span>
							</DropdownMenuItem>
							<DropdownMenuItem disabled>
								<Icon name="code" className="mr-2 h-4 w-4" />
								<span>API</span>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Icon name="exit" className="mr-2 h-4 w-4" />
								<span>Log out</span>
								<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</ComponentWrapper>
				<ComponentWrapper title="ContextMenu">
					<ContextMenu>
						<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
							Right click here
						</ContextMenuTrigger>
						<ContextMenuContent className="w-64">
							<ContextMenuItem inset>
								Back
								<ContextMenuShortcut>⌘[</ContextMenuShortcut>
							</ContextMenuItem>
							<ContextMenuItem inset disabled>
								Forward
								<ContextMenuShortcut>⌘]</ContextMenuShortcut>
							</ContextMenuItem>
							<ContextMenuItem inset>
								Reload
								<ContextMenuShortcut>⌘R</ContextMenuShortcut>
							</ContextMenuItem>
							<ContextMenuSub>
								<ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
								<ContextMenuSubContent className="w-48">
									<ContextMenuItem>
										Save Page As...
										<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuItem>Create Shortcut...</ContextMenuItem>
									<ContextMenuItem>Name Window...</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuItem>Developer Tools</ContextMenuItem>
								</ContextMenuSubContent>
							</ContextMenuSub>
							<ContextMenuSeparator />
							<ContextMenuCheckboxItem checked>
								Show Bookmarks Bar
								<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
							</ContextMenuCheckboxItem>
							<ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
							<ContextMenuSeparator />
							<ContextMenuRadioGroup value="pedro">
								<ContextMenuLabel inset>People</ContextMenuLabel>
								<ContextMenuSeparator />
								<ContextMenuRadioItem value="pedro">
									Pedro Duarte
								</ContextMenuRadioItem>
								<ContextMenuRadioItem value="colm">
									Colm Tuite
								</ContextMenuRadioItem>
							</ContextMenuRadioGroup>
						</ContextMenuContent>
					</ContextMenu>
				</ComponentWrapper>
				<ComponentWrapper title="Hover Card">
					<HoverCard>
						<HoverCardTrigger asChild>
							<Button variant="link">@alexandra</Button>
						</HoverCardTrigger>
						<HoverCardContent className="w-80">
							<div className="flex justify-start space-x-4">
								<Avatar>
									<AvatarImage src="/img/0.jpg" />
									<AvatarFallback>AV</AvatarFallback>
								</Avatar>
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">@alexandra</h4>
									<p className="text-sm">Alexandra Viers</p>
									<div className="flex items-center pt-2">
										<Icon name="calendar" className="mr-2 h-4 w-4 opacity-70" />{' '}
										<span className="text-xs text-muted-600">
											Joined December 2021
										</span>
									</div>
								</div>
							</div>
						</HoverCardContent>
					</HoverCard>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Disclosure">
				<ComponentWrapper title="Tabs">
					<Tabs defaultValue="account" className="w-[400px]">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="account">Account</TabsTrigger>
							<TabsTrigger value="password">Password</TabsTrigger>
						</TabsList>
						<TabsContent value="account">
							<Card>
								<CardHeader>
									<CardTitle>Account</CardTitle>
									<CardDescription>
										Make changes to your account here. Click save when you're
										done.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="name">Name</Label>
										<Input id="name" defaultValue="Pedro Duarte" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="username">Username</Label>
										<Input id="username" defaultValue="@peduarte" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save changes</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value="password">
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>
										Change your password here. After saving, you'll be logged
										out.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="current">Current password</Label>
										<Input id="current" type="password" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">New password</Label>
										<Input id="new" type="password" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save password</Button>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>
				</ComponentWrapper>
				<ComponentWrapper title="Collapsible">
					<Collapsible
						open={isOpenCollapsible}
						onOpenChange={setIsOpenCollapsible}
						className="w-[350px] space-y-2"
					>
						<div className="flex items-center justify-between space-x-4 px-4">
							<h4 className="text-sm font-semibold">
								@peduarte starred 3 repositories
							</h4>
							<CollapsibleTrigger asChild>
								<Button variant="ghost" size="sm" className="w-9 p-0">
									<Icon name="chevron-down" className="h-4 w-4" />
									<span className="sr-only">Toggle</span>
								</Button>
							</CollapsibleTrigger>
						</div>
						<div className="rounded-md border px-4 py-3 font-mono text-sm">
							@radix-ui/primitives
						</div>
						<CollapsibleContent className="space-y-2">
							<div className="rounded-md border px-4 py-3 font-mono text-sm">
								@radix-ui/colors
							</div>
							<div className="rounded-md border px-4 py-3 font-mono text-sm">
								@stitches/react
							</div>
						</CollapsibleContent>
					</Collapsible>
				</ComponentWrapper>
				<ComponentWrapper title="Accordion">
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>Is it accessible?</AccordionTrigger>
							<AccordionContent>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Is it styled?</AccordionTrigger>
							<AccordionContent>
								Yes. It comes with default styles that matches the other
								components&apos; aesthetic.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Is it animated?</AccordionTrigger>
							<AccordionContent>
								Yes. It&apos;s animated by default, but you can disable it if
								you prefer.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Notifications">
				<ComponentWrapper title="Toast">
					<Button
						variant="outline"
						onClick={() =>
							toast('Your profile has been updated.', {
								description: 'Changes saved successfully.',
								duration: 5000,
								icon: <Icon name="avatar" />,
							})
						}
					>
						Update profile
					</Button>
				</ComponentWrapper>
				<ComponentWrapper title="Alert">
					<Flex orientation="vertical" gap="10">
						<Alert>
							<Icon name="exclamation-triangle" className="h-4 w-4" />
							<AlertTitle>Heads up!</AlertTitle>
							<AlertDescription>
								This is a warning. You should pay attention to it.
							</AlertDescription>
						</Alert>
						<Alert variant="destructive">
							<Icon name="exclamation-triangle" className="h-4 w-4" />
							<AlertTitle>Heads up!</AlertTitle>
							<AlertDescription>
								This is a warning. You should pay attention to it.
							</AlertDescription>
						</Alert>
					</Flex>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Status">
				<p>Empty</p>
			</CategoryWrapper>
			<CategoryWrapper title="Data Display">
				<ComponentWrapper title="Badge">
					<Badge variant="default">Badge</Badge>
					<Badge variant="secondary">Badge</Badge>
					<Badge variant="destructive">Badge</Badge>
					<Badge variant="outline">Badge</Badge>
				</ComponentWrapper>
				<ComponentWrapper title="Progress">
					<Progress value={progress} className="w-[60%]" />
				</ComponentWrapper>
				<ComponentWrapper title="Table">
					<Table>
						<TableCaption>A list of your recent invoices.</TableCaption>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{tableData.map(invoice => (
								<TableRow key={invoice.invoice}>
									<TableCell className="font-medium">
										{invoice.invoice}
									</TableCell>
									<TableCell>{invoice.paymentStatus}</TableCell>
									<TableCell>{invoice.paymentMethod}</TableCell>
									<TableCell className="text-right">
										{invoice.totalAmount}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Total</TableCell>
								<TableCell className="text-right">$2,500.00</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</ComponentWrapper>
				<ComponentWrapper title="Data Table">
					<div className="w-full">
						<div className="flex items-center py-4">
							<Input
								placeholder="Filter emails..."
								value={
									(table.getColumn('email')?.getFilterValue() as string) ?? ''
								}
								onChange={event =>
									table.getColumn('email')?.setFilterValue(event.target.value)
								}
								className="max-w-sm"
							/>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" className="ml-auto">
										Columns{' '}
										<Icon name="chevron-down" className="ml-2 h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									{table
										.getAllColumns()
										.filter(column => column.getCanHide())
										.map(column => {
											return (
												<DropdownMenuCheckboxItem
													key={column.id}
													className="capitalize"
													checked={column.getIsVisible()}
													onCheckedChange={value =>
														column.toggleVisibility(!!value)
													}
												>
													{column.id}
												</DropdownMenuCheckboxItem>
											)
										})}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="rounded-md border">
							<Table>
								<TableHeader>
									{table.getHeaderGroups().map(headerGroup => (
										<TableRow key={headerGroup.id}>
											{headerGroup.headers.map(header => {
												return (
													<TableHead key={header.id}>
														{header.isPlaceholder
															? null
															: flexRender(
																	header.column.columnDef.header,
																	header.getContext(),
																)}
													</TableHead>
												)
											})}
										</TableRow>
									))}
								</TableHeader>
								<TableBody>
									{table.getRowModel().rows?.length ? (
										table.getRowModel().rows.map(row => (
											<TableRow
												key={row.id}
												data-state={row.getIsSelected() && 'selected'}
											>
												{row.getVisibleCells().map(cell => (
													<TableCell key={cell.id}>
														{flexRender(
															cell.column.columnDef.cell,
															cell.getContext(),
														)}
													</TableCell>
												))}
											</TableRow>
										))
									) : (
										<TableRow>
											<TableCell
												colSpan={columns.length}
												className="h-24 text-center"
											>
												No results.
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
						</div>
						<div className="flex items-center justify-end space-x-2 py-4">
							<div className="flex-1 text-sm text-muted-600">
								{table.getFilteredSelectedRowModel().rows.length} of{' '}
								{table.getFilteredRowModel().rows.length} row(s) selected.
							</div>
							<div className="space-x-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => table.previousPage()}
									disabled={!table.getCanPreviousPage()}
								>
									Previous
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={() => table.nextPage()}
									disabled={!table.getCanNextPage()}
								>
									Next
								</Button>
							</div>
						</div>
					</div>
				</ComponentWrapper>
				<ComponentWrapper title="Card">
					<Card className="w-[350px]">
						<CardHeader>
							<CardTitle>Card title</CardTitle>
							<CardDescription>Card description.</CardDescription>
						</CardHeader>
						<CardContent>
							<P>Card content.</P>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline">Cancel</Button>
							<Button>Deploy</Button>
						</CardFooter>
					</Card>
				</ComponentWrapper>
				<ComponentWrapper title="Carousel">
					<Carousel className="w-full max-w-xs">
						<CarouselContent>
							{Array.from({ length: 5 }).map((_, index) => (
								<CarouselItem key={index}>
									<div className="p-1">
										<Card>
											<CardContent className="flex aspect-square items-center justify-center p-6">
												<span className="text-4xl font-semibold">
													{index + 1}
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</ComponentWrapper>
			</CategoryWrapper>
			<CategoryWrapper title="Data Entry">
				<ComponentWrapper title="Input">
					<Input type="email" placeholder="Email" />
				</ComponentWrapper>
				<ComponentWrapper title="Textarea">
					<Textarea placeholder="Type your message here." />
				</ComponentWrapper>
				<ComponentWrapper title="Input OTP">
					<InputOTP maxLength={6}>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</ComponentWrapper>
				<ComponentWrapper title="Label">
					<div>
						<div className="flex items-center space-x-2">
							<Checkbox id="terms-label" />
							<Label htmlFor="terms-label">Accept terms and conditions</Label>
						</div>
					</div>
				</ComponentWrapper>
				<ComponentWrapper title="Checkbox">
					<div className="flex items-center space-x-2">
						<Checkbox id="terms-checkbox" />
						<label
							htmlFor="terms-checkbox"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Accept terms and conditions
						</label>
					</div>
				</ComponentWrapper>
				<ComponentWrapper title="Switch">
					<div className="flex items-center space-x-2">
						<Switch id="airplane-mode" />
						<Label htmlFor="airplane-mode">Airplane Mode</Label>
					</div>
				</ComponentWrapper>
				<ComponentWrapper title="Toggle">
					<Toggle aria-label="Toggle bold">
						<Icon name="bookmark-filled" className="h-4 w-4" />
					</Toggle>
				</ComponentWrapper>
				<ComponentWrapper title="Toggle Group">
					<ToggleGroup type="multiple">
						<ToggleGroupItem value="bold" aria-label="Toggle bold">
							<Icon name="bookmark" className="h-4 w-4" />
						</ToggleGroupItem>
						<ToggleGroupItem value="italic" aria-label="Toggle italic">
							<Icon name="commit" className="h-4 w-4" />
						</ToggleGroupItem>
						<ToggleGroupItem value="underline" aria-label="Toggle underline">
							<Icon name="magnifying-glass" className="h-4 w-4" />
						</ToggleGroupItem>
					</ToggleGroup>
				</ComponentWrapper>
				<ComponentWrapper title="Radio Group">
					<RadioGroup defaultValue="comfortable">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="default" id="r1" />
							<Label htmlFor="r1">Default</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="comfortable" id="r2" />
							<Label htmlFor="r2">Comfortable</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="compact" id="r3" />
							<Label htmlFor="r3">Compact</Label>
						</div>
					</RadioGroup>
				</ComponentWrapper>
				<ComponentWrapper title="Slider">
					<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
				</ComponentWrapper>
				<ComponentWrapper title="Select">
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">Pineapple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</ComponentWrapper>
				<ComponentWrapper title="Command">
					<p>
						This component is commented out because it forces the page to scroll
						to the{' '}
						<A
							href="https://github.com/pacocoursey/cmdk/issues/171"
							target="_blank"
						>
							first selected item
						</A>
						. At the moment there is no way to disable this behavior, so
						uncomment/comment conditionally.
					</p>
					{/* <Command className="rounded-lg border shadow-md" shouldFilter={false}>
						<CommandInput placeholder="Type a command or search..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup heading="Suggestions">
								<CommandItem>
									<Icon name="calendar" className="mr-2 h-4 w-4" />
									<span>Calendar</span>
								</CommandItem>
								<CommandItem>
									<Icon name="activity-log" className="mr-2 h-4 w-4" />
									<span>Activity</span>
								</CommandItem>
								<CommandItem>
									<Icon name="accessibility" className="mr-2 h-4 w-4" />
									<span>Accessibility</span>
								</CommandItem>
							</CommandGroup>
							<CommandSeparator />
							<CommandGroup heading="Settings">
								<CommandItem>
									<Icon name="avatar" className="mr-2 h-4 w-4" />
									<span>Profile</span>
									<CommandShortcut>⌘P</CommandShortcut>
								</CommandItem>
								<CommandItem>
									<Icon name="card-stack" className="mr-2 h-4 w-4" />
									<span>Cards</span>
									<CommandShortcut>⌘B</CommandShortcut>
								</CommandItem>
								<CommandItem>
									<Icon name="bookmark" className="mr-2 h-4 w-4" />
									<span>Bookmarks</span>
									<CommandShortcut>⌘S</CommandShortcut>
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command> */}
				</ComponentWrapper>
				<ComponentWrapper title="Combobox">
					<Popover open={openCombobox} onOpenChange={setOpenCombobox}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={openCombobox}
								className="w-[200px] justify-between"
							>
								{valueCombobox
									? frameworks.find(
											framework => framework.value === valueCombobox,
										)?.label
									: 'Select framework...'}
								<Icon
									name="chevron-down"
									className="ml-2 h-4 w-4 shrink-0 opacity-50"
								/>
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search framework..." />
								<CommandList>
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										{frameworks.map(framework => (
											<CommandItem
												key={framework.value}
												value={framework.value}
												onSelect={currentValue => {
													setValueCombobox(
														currentValue === valueCombobox ? '' : currentValue,
													)
													setOpenCombobox(false)
												}}
											>
												<Icon
													name="check"
													className={cn(
														'mr-2 h-4 w-4',
														valueCombobox === framework.value
															? 'opacity-100'
															: 'opacity-0',
													)}
												/>
												{framework.label}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>
				</ComponentWrapper>
				<ComponentWrapper title="Calendar">
					<Calendar
						mode="single"
						selected={dateCalendar}
						onSelect={setDateCalendar}
						className="inline-block rounded-md border"
					/>
				</ComponentWrapper>
				<ComponentWrapper title="Date Picker">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={'outline'}
								className={cn(
									'w-[280px] justify-start text-left font-normal',
									!dateDatePicker && 'text-muted-600',
								)}
							>
								<Icon name="calendar" className="mr-2 h-4 w-4" />
								{dateDatePicker ? (
									format(dateDatePicker, 'PPP')
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Calendar
								mode="single"
								selected={dateDatePicker}
								onSelect={setDateDatePicker}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</ComponentWrapper>
			</CategoryWrapper>
		</Container>
	)
}

const CategoryWrapper = ({
	title,
	children,
}: {
	title: string
	children: ReactNode
}) => {
	return (
		<section className="mb-16">
			<div className="mb-8 flex items-center space-x-4">
				<div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600"></div>
				<h2 className="text-3xl font-bold text-muted-800">{title}</h2>
			</div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{children}
			</div>
		</section>
	)
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted-200 focus:bg-muted-200',
							className,
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-600">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		)
	},
)
ListItem.displayName = 'ListItem'

const ComponentWrapper = ({
	title,
	children,
}: {
	title: string
	children: ReactNode
}) => {
	return (
		<div className="mb-10 transform rounded-xl border border-muted-200 bg-background shadow-md transition duration-300 hover:shadow-lg">
			<div className="rounded-t-xl bg-gradient-to-r from-muted-600 to-muted-500 p-5">
				<h2 className="text-lg font-light text-background">{title}</h2>
			</div>
			<Flex justify="center" items="center" wrap className="p-8">
				{children}
			</Flex>
		</div>
	)
}
