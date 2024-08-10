import {
  BookOpenText,
  GraduationCap,
  LibraryBig,
  type LucideIcon,
  Presentation,
  UserRound,
} from "lucide-react";

interface IItemIconProps {
  name: string;
}

function ItemIcon({ name }: IItemIconProps) {
  const icons: { [key: string]: LucideIcon } = {
    "about-me": UserRound,
    education: GraduationCap,
    talks: Presentation,
    publications: LibraryBig,
    teaching: BookOpenText,
  };

  const Icon: LucideIcon | null = icons[name] ?? null;

  return Icon && <Icon size={20} strokeWidth={1.5} />;
}

export default ItemIcon;
