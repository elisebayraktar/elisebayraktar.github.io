export type IconName = 'Book' | 'GraduationCap' | 'Pencil' | 'Presentation' | 'User'
export interface SectionMeta {
  iconName: IconName
  slug: SectionSlug
  title: string
}

export type SectionSlug = 'about-me' | 'education' | 'publications' | 'talks' | 'teaching'

export const sections: SectionMeta[] = [
  { iconName: 'User', slug: 'about-me', title: 'About me' },
  { iconName: 'Book', slug: 'publications', title: 'Publications' },
  { iconName: 'Presentation', slug: 'talks', title: 'Talks' },
  { iconName: 'GraduationCap', slug: 'education', title: 'Education' },
  { iconName: 'Pencil', slug: 'teaching', title: 'Teaching' },
]
