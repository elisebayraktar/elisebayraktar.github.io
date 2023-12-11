import { SectionType } from '../components/Section';
import AboutMe from '../sections/AboutMe';
import Education from '../sections/Education';
import Publications from '../sections/Publications';
import Talks from '../sections/Talks';
import Teaching from '../sections/Teaching';

export default [
  {
    name: 'about-me',
    content: AboutMe,
  },
  {
    name: 'publications',
    content: Publications,
  },
  {
    name: 'talks',
    content: Talks,
  },
  {
    name: 'education',
    content: Education,
  },
  {
    name: 'teaching',
    content: Teaching,
  },
] as SectionType[];
