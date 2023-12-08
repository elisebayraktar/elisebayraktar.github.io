import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import ItemIcon from './NavigationItemIcon';
import sections from './sections';

const navigationItemVariants = cva(
  ['px-4', 'py-4', 'flex', 'space-x-2', 'rounded-lg', 'cursor-pointer'],
  {
    variants: {
      selected: {
        true: 'bg-primary',
        false: 'bg-white',
      },
    },
  },
);

const navigationItemTextVariants = cva(['text-sm', 'capitalize'], {
  variants: {
    selected: {
      true: 'text-white',
      false: 'text-slate-600',
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
      <ItemIcon name={name} isSelected={selected} />
      <span className={navigationItemTextVariants({ selected })}>
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
    const handleScroll = () => {
      const refKeys = Object.keys(sectionsRefs.current);
      for (let i = 0; i < refKeys.length; i += 1) {
        const componentRef = sectionsRefs.current[refKeys[i]];
        if (componentRef) {
          const rect = componentRef.getBoundingClientRect();
          if (rect.bottom >= rect.height / 3) {
            setActiveSection(refKeys[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionsRefs]);

  return (
    <div className="flex space-y-2 flex-col">
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
