import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { sections } from '@/lib/constants';

function App() {
  return (
    <div className="flex flex-col items-center">
      <header className="container sticky top-4 z-50 flex w-full items-center justify-between rounded-lg bg-primary/60 px-4 text-primary-foreground/95 backdrop-blur">
        <nav className="flex h-16 items-center gap-2 md:gap-4">
          <img
            alt="logo of the university"
            className="h-10"
            src="images/lama.png"
          />
          {sections.map((section) => (
            <Button asChild key={section.slug} variant="ghost">
              <a href={`#${section.slug}`}>
                {section.icon}
                {section.title}
              </a>
            </Button>
          ))}
        </nav>
        <ThemeToggle />
      </header>
      <main className="flex flex-col items-center gap-8 py-24">
        {sections.map((section) => (
          <section
            className="container flex scroll-mt-24 flex-col items-center"
            id={section.slug}
            key={section.slug}
          >
            {section.slug !== 'about-me' && (
              <h2 className="font-bold text-4xl capitalize">{section.title}</h2>
            )}
            <section.content />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
