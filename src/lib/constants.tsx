import {
  BookIcon,
  GraduationCapIcon,
  PencilIcon,
  PresentationIcon,
  UserIcon,
} from 'lucide-react';

import AboutMe from '@/components/sections/about-me';
import Educations from '@/components/sections/education';
import Publications from '@/components/sections/publications';
import Talks from '@/components/sections/talks';
import Teaching from '@/components/sections/teaching';

export interface SectionType {
  content: React.ReactNode;
  icon: React.ReactNode;
  slug: string;
}

export const sections = [
  {
    content: AboutMe,
    icon: <UserIcon />,
    slug: 'about-me',
    title: 'About me',
  },
  {
    content: Publications,
    icon: <BookIcon />,
    slug: 'publications',
    title: 'Publications',
  },
  {
    content: Talks,
    icon: <PresentationIcon />,
    slug: 'talks',
    title: 'Talks',
  },
  {
    content: Educations,
    icon: <GraduationCapIcon />,
    slug: 'education',
    title: 'Education',
  },
  {
    content: Teaching,
    icon: <PencilIcon />,
    slug: 'teaching',
    title: 'Teaching',
  },
];
