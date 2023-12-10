import { useRef } from 'react';
import { NavigationItems } from './components/NavigationItems';
import sections from './components/sections';

function App() {
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const screenRef = useRef<HTMLDivElement | null>(null);
  return (
    <main className="flex flex-col bg-gray-50" ref={screenRef}>
      <div className="fixed w-72 px-6 py-4 h-screen flex flex-col bg-white shadow-md">
        <img
          src="/images/logo.png"
          alt="labo logo"
          className="object-contain my-10 w-4/5 self-center"
        />
        <NavigationItems sectionsRefs={sectionsRefs} />
      </div>
      <div className="flex ml-72 p-10 overflow-auto flex-col space-y-10">
        {sections.map((item) => (
          <div
            ref={(ref) => {
              sectionsRefs.current[item.name] = ref;
            }}
            key={item.name}
            className="scroll-m-10"
          >
            <item.content />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
