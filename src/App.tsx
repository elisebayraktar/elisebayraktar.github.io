import { useRef } from 'react';
import Section from './components/Section';
import sections from './utils/const';
import { NavigationItems } from './components/navigationItems';

function App() {
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const setRef = (name: string, ref: HTMLDivElement | null) => {
    sectionsRefs.current[name] = ref;
  };

  return (
    <>
      <header>
        <div className="navbar bg-primary py-4 justify-center fixed z-50">
          <NavigationItems sectionsRefs={sectionsRefs} />
        </div>
      </header>
      <main className="column light justify-normal pt-20">
        {sections.map((item, index) => (
          <div key={item.name} className="column items-center justify-center">
            <Section
              index={index}
              item={item}
              setRef={(ref) => setRef(item.name, ref)}
            />
            {index !== sections.length - 1 && (
              <img
                src="/images/divider.svg"
                alt="divider"
                className="h-6 md:h-8 text-primary"
              />
            )}
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
