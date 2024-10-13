import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import { Icon } from '#app/ui/components/custom/icon'
import { cn } from '#app/utils/tailwind-merge.ts'

export type CheckboxProps = Omit<
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
	'type'
> & {
	type?: string
}

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-4 w-4 shrink-0 rounded-sm border border-muted-900 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-muted-900 data-[state=checked]:text-muted-50',
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn('flex items-center justify-center text-current')}
		>
			<Icon name="check" className="h-4 w-4" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
