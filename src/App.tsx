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
    <main className="flex flex-col bg-[#F5F5F5] text-neutral-800">
      {window.innerWidth >= 768 && (
        <div className="fixed h-20 px-6 py-4 w-screen flex bg-primary shadow-md justify-center items-center font-normal">
          <NavigationItems sectionsRefs={sectionsRefs} />
        </div>
      )}
      <div className="md:pt-20 overflow-auto flex flex-col">
        {sections.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-center flex-col"
          >
            <Section
              index={index}
              item={item}
              setRef={(ref) => setRef(item.name, ref)}
            />
            {index !== sections.length - 1 && (
              <img
                src="/images/divider.svg"
                alt="divider"
                className="h-6 md:h-8 text-primary place-self-center"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
