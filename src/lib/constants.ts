export type SectionSlug = 'about-me' | 'publications' | 'talks' | 'education' | 'teaching'
export type IconName = 'User' | 'Book' | 'Presentation' | 'GraduationCap' | 'Pencil'

export interface SectionMeta {
  slug: SectionSlug
  title: string
  iconName: IconName
}

export const sections: SectionMeta[] = [
  { slug: 'about-me', title: 'About me', iconName: 'User' },
  { slug: 'publications', title: 'Publications', iconName: 'Book' },
  { slug: 'talks', title: 'Talks', iconName: 'Presentation' },
  { slug: 'education', title: 'Education', iconName: 'GraduationCap' },
  { slug: 'teaching', title: 'Teaching', iconName: 'Pencil' },
]
