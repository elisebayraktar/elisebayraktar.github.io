import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

import { Button, type buttonVariants } from './button'

export const Link = ({
  children,
  className,
  variant = 'link',
  size = 'fit',
  ...props
}: React.ComponentProps<'a'> & VariantProps<typeof buttonVariants>) => (
  <Button render={<a {...props}>{children}</a>} className={cn('whitespace-normal', className)} variant={variant} size={size} />
)
