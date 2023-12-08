import { useRef } from 'react';
import { NavigationItems } from './components/NavigationItems';
import sections from './components/sections';

function App() {
  const refs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  return (
    <main className="flex flex-col bg-gray-50">
      <div className="fixed w-72 px-6 py-4 h-screen flex flex-col bg-white shadow-md">
        <div className="flex relative w-full h-1/3">
          <img
            src="/images/logo.png"
            alt="labo icon"
            className="object-contain"
          />
        </div>
        <NavigationItems sectionsRefs={refs} />
      </div>
      <div className="flex ml-72 p-10 overflow-auto flex-col space-y-10">
        {sections.map((item) => (
          <div
            className="bg-white p-10 border-slate-200 border rounded-xl flex flex-col scroll-m-10"
            ref={(ref) => {
              refs.current[item.name] = ref;
            }}
            key={item.name}
          >
            <div className="text-3xl text-primary text-bold font-semibold capitalize">
              {item.name.replace('-', ' ')}
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
