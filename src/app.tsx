import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { sections } from '@/lib/constants'

const App = () => (
  <div className="flex flex-col items-center px-4">
    <header className="container sticky top-4 z-50 flex w-full items-center justify-between rounded-lg bg-primary/60 px-4 text-primary-foreground/95 backdrop-blur">
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
    <main className="flex flex-col items-center gap-8 pt-8 pb-24 md:pt-24">
      {sections.map(({ Content, slug, title }) => (
        <section className="container flex scroll-mt-24 flex-col items-center" id={slug} key={slug}>
          {slug !== 'about-me' && <h2 className="font-bold text-4xl capitalize">{title}</h2>}
          <Content />
        </section>
      ))}
    </main>
  </div>
)

export default App
