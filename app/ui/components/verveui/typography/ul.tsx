import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '#app/utils/tailwind-merge.ts'

const Ul = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(({ className, ...props }, ref) => <ul ref={ref} className={cn('ul', className)} {...props} />)
Ul.displayName = 'Ul'

export { Ul }
