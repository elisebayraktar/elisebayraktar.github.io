import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import ItemIcon from './NavigationItemIcon';
import sections from '../utils/const';

const navigationItemVariants = cva(['btn', 'btn-primary'], {
  variants: {
    selected: {
      true: ['border-white', 'hover:border-white'],
      false: [],
    },
  },
});

interface INavigationItemProps {
  selected: boolean;
  name: string;
  children: string;
  onClick: () => void;
}

export function NavigationItem({
  selected,
  name,
  children,
  onClick,
}: INavigationItemProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={navigationItemVariants({ selected })}
    >
      <ItemIcon name={name} />
      <span className="text-sm capitalize font-roboto">{children}</span>
    </button>
  );
}

export function NavigationItems({
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
    <div className="navbar-center space-x-2">
      {sections.map((item) => (
        <NavigationItem
          name={item.name}
          selected={activeSection === item.name}
          key={item.name}
          onClick={() => handleClick(item.name)}
        >
          {item.name.replace('-', ' ')}
        </NavigationItem>
      ))}
    </div>
  );
}
