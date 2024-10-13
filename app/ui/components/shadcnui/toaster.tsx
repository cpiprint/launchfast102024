import { Toaster as Sonner, toast as showToast } from 'sonner'
import { useIsomorphicLayoutEffect } from '#app/hooks/useIsomorphicLayoutEffect.js'
import { type Toast } from '#app/utils/toast.server.ts'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ theme, ...props }: ToasterProps) => {
	return (
		<Sonner
			theme={theme}
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-brand-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-500',
				},
			}}
			{...props}
		/>
	)
}

function useToast(toast?: Toast | null) {
	useIsomorphicLayoutEffect(() => {
		if (toast) {
			setTimeout(() => {
				showToast[toast.type](toast.title, {
					id: toast.id,
					description: toast.description,
				})
			}, 0)
		}
	}, [toast])
}

export { Toaster, useToast }
