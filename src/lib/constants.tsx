import {
  BookIcon,
  GraduationCapIcon,
  type LucideIcon,
  PencilIcon,
  PresentationIcon,
  UserIcon,
} from 'lucide-react'

import AboutMe from '@/components/sections/about-me'
import Educations from '@/components/sections/education'
import Publications from '@/components/sections/publications'
import Talks from '@/components/sections/talks'
import Teachings from '@/components/sections/teachings'

export interface SectionType {
  Content: () => React.ReactNode
  Icon: LucideIcon
  slug: string
  title: string
}

export const sections: SectionType[] = [
  {
    Content: AboutMe,
    Icon: UserIcon,
    slug: 'about-me',
    title: 'About me',
  },
  {
    Content: Publications,
    Icon: BookIcon,
    slug: 'publications',
    title: 'Publications',
  },
  {
    Content: Talks,
    Icon: PresentationIcon,
    slug: 'talks',
    title: 'Talks',
  },
  {
    Content: Educations,
    Icon: GraduationCapIcon,
    slug: 'education',
    title: 'Education',
  },
  {
    Content: Teachings,
    Icon: PencilIcon,
    slug: 'teaching',
    title: 'Teaching',
  },
]
