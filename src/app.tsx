import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { sections } from '@/lib/constants'
import { cn } from '@/lib/utils'

const App = () => (
  <div className="flex flex-col items-center">
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b bg-background px-4 py-2 text-foreground">
      <nav className="flex h-16 items-center gap-2 md:gap-4">
        <img
          alt="LPSM — Laboratoire de Probabilités, Statistiques et Modélisation"
          className="h-10"
          decoding="async"
          height="162"
          src="images/lpsm.webp"
          width="320"
        />
        {sections.map(({ Icon, slug, title }) => (
          <Button
            render={
              <a href={`#${slug}`}>
                <Icon />
                {title}
              </a>
            }
            className="hidden md:flex"
            key={slug}
            variant="ghost"
          />
        ))}
      </nav>
      <ThemeToggle />
    </header>
    <main className="flex w-full flex-col items-center pt-8">
      {sections.map(({ Content, slug, title }, index) => (
        <section
          className={cn('flex scroll-mt-20 flex-col items-center bg-background w-full border-b py-20', {
            'bg-card': index % 2 !== 0,
          })}
          id={slug}
          key={slug}
        >
          <div className="container w-full px-8 md:px-20">
            {slug !== 'about-me' && (
              <>
                <h2 className="text-4xl font-extrabold uppercase">{title}</h2>
                <Separator className="my-4 mb-10 max-w-10" />
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
