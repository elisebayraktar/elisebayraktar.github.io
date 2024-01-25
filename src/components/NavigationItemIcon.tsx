import {
  BookOpenText,
  GraduationCap,
  LibraryBig,
  LucideIcon,
  Presentation,
  UserRound,
} from 'lucide-react';

function ItemIcon({ name }: { name: string }) {
  const icons: { [key: string]: any } = {
    'about-me': UserRound,
    education: GraduationCap,
    talks: Presentation,
    publications: LibraryBig,
    teaching: BookOpenText,
  };

  const Icon: LucideIcon | null = icons[name] ?? null;

  return Icon && <Icon size={20} strokeWidth={1.5} />;
}

export default ItemIcon;
