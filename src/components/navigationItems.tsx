import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import ItemIcon from './NavigationItemIcon';
import sections from '../utils/const';

const navigationItemVariants = cva(
  [
    'px-4',
    'py-3',
    'flex',
    'space-x-2',
    'cursor-pointer',
    'rounded',
    'hover:border-white',
    'border',
  ],
  {
    variants: {
      selected: {
        true: ['bg-primary', 'border-white'],
        false: ['bg-primary', 'border-primary'],
      },
    },
  },
);

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
      <span className="text-sm capitalize font-roboto text-white">
        {children}
      </span>
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
    <div className="flex space-x-2 self-center">
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
