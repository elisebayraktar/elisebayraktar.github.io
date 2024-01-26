import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavigationItems from './NavigationItems';

export default function NavigationBar({
  sectionsRefs,
}: {
  sectionsRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>;
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClick = (key: string) => {
    sectionsRefs.current[key]?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const getActiveSection = (): string | null => {
      const refKeys = Object.keys(sectionsRefs.current);
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      if (clientHeight + scrollTop >= scrollHeight) {
        return refKeys[refKeys.length - 1];
      }
      for (let i = 0; i < refKeys.length; i += 1) {
        const componentRef = sectionsRefs.current[refKeys[i]];

        if (componentRef) {
          const rect = componentRef.getBoundingClientRect();
          if (rect.bottom - 80 >= 0) {
            return refKeys[i];
          }
        }
      }
      return null;
    };

    const handleScroll = () => {
      setActiveSection(getActiveSection());
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionsRefs]);

  return (
    <div className="navbar bg-primary fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-primary lg:hidden">
            <Menu />
          </div>
          <div className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-primary">
            <NavigationItems
              activeSection={activeSection}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex space-x-4">
        <NavigationItems
          activeSection={activeSection}
          handleClick={handleClick}
        />
      </div>
      <div className="navbar-end" />
    </div>
  );
}
