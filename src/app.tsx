import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { sections } from '@/lib/constants'
import { cn } from '@/lib/utils'

const App = () => (
  <div className="flex flex-col items-center">
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-background px-4 text-foreground border-b py-2">
      <nav className="flex h-16 items-center gap-2 md:gap-4">
        <img alt="logo of the university" className="h-10" src="images/lpsm.png" />
        {sections.map(({ Icon, slug, title }) => (
          <Button asChild className="hidden md:flex" key={slug} variant="ghost">
            <a href={`#${slug}`}>
              <Icon />
              {title}
            </a>
          </Button>
        ))}
      </nav>
      <ThemeToggle />
    </header>
    <main className="flex flex-col items-center pt-8 w-full">
      {sections.map(({ Content, slug, title }, index) => (
        <section
          className={cn(
            'flex scroll-mt-20 flex-col items-center bg-background w-full border-b py-20',
            {
              'bg-card': index % 2 !== 0,
            }
          )}
          id={slug}
          key={slug}
        >
          <div className="w-full container md:px-20 px-8">
            {slug !== 'about-me' && (
              <>
                <h2 className="font-extrabold text-4xl uppercase">{title}</h2>
                <Separator className="my-4 max-w-10 mb-10" />
              </>
            )}
            <Content />
          </div>
        </section>
      ))}
    </main>
  </div>
)

export default App
