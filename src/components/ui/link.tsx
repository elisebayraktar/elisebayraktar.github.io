import { cn } from '@/lib/utils'

export default function Link({ className, ...props }: React.ComponentProps<'a'>) {
  return <a className={cn(className)} {...props} />
}
