import { Root as SeparatorRoot } from '@radix-ui/react-separator'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const Separator = ({
  className,
  decorative = true,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof SeparatorRoot>) => (
  <SeparatorRoot
    className={cn(
      'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
      className
    )}
    data-slot="separator-root"
    decorative={decorative}
    orientation={orientation}
    {...props}
  />
)

export { Separator }
