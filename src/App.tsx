import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Section from "./components/Section";
import NavigationItems from "./components/navigation/NavigationItems";
import StyledDivider from "./components/svg/StyledDivider";
import sections from "./utils/const";

function App() {
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const setRef = (name: string, ref: HTMLDivElement | null) => {
    sectionsRefs.current[name] = ref;
  };

  const [activeSection, setActiveSection] = useState<string | null>(
    window.location.pathname,
  );

  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark") ?? "false"),
  );

  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);

  const handleClick = (key: string) => {
    sectionsRefs.current[key]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const getActiveSection = (): string | null => {
      const refKeys = Object.keys(sectionsRefs.current);
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      if (clientHeight + scrollTop >= scrollHeight) {
        return refKeys[refKeys.length - 1];
      }
      for (const refKey of refKeys) {
        const componentRef = sectionsRefs.current[refKey];

        if (componentRef) {
          const rect = componentRef.getBoundingClientRect();
          if (rect.bottom - 80 >= 0) {
            return refKey;
          }
        }
      }
      return null;
    };

    const handleScroll = () => {
      setActiveSection(getActiveSection());
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="navbar bg-primary fixed">
          <div className="navbar-start">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="navbar-drawer"
                aria-label="open sidebar"
                className="btn btn-primary"
              >
                <Menu />
              </label>
            </div>
          </div>
          <ul className="navbar-center hidden lg:flex space-x-4">
            <NavigationItems
              activeSection={activeSection}
              handleClick={handleClick}
            />
          </ul>
          <div className="navbar-end">
            <label className="swap swap-rotate pr-4">
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
                checked={isdark}
                onChange={() => setIsdark(!isdark)}
              />
              <Sun className="swap-off w-full h-full text-primary-content" />
              <Moon className="swap-on w-full h-full text-primary-content" />
            </label>
          </div>
        </header>
        <main className="column justify-normal pt-20 bg-base-200">
          {sections.map((item, index) => (
            <div key={item.name} className="column items-center justify-center">
              <Section
                index={index}
                item={item}
                setRef={(ref) => setRef(item.name, ref)}
              />
              {index !== sections.length - 1 && (
                <StyledDivider className="fill-primary h-6 md:h-8" />
              )}
            </div>
          ))}
        </main>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="navbar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu p-2 shadow w-52 bg-primary min-h-full">
          <img src="images/lama.png" alt="LAMA logo" className="p-4 mb-5" />
          <NavigationItems
            activeSection={activeSection}
            handleClick={handleClick}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
