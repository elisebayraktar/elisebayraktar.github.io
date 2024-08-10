import { cva } from "class-variance-authority";
import ItemIcon from "./NavigationItemIcon";

interface INavigationItemProps {
  selected: boolean;
  name: string;
  children: string;
  onClick: () => void;
}
const navigationItemVariants = cva(["btn", "btn-primary", "shadow-none"], {
  variants: {
    selected: {
      true: ["border-primary-content", "hover:border-primary-content"],
      false: [],
    },
  },
});

export default function NavigationItem({
  selected,
  name,
  children,
  onClick,
}: Readonly<INavigationItemProps>) {
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
