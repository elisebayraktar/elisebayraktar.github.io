import type { SectionType } from "../components/Section";
import AboutMe from "../sections/AboutMe";
import Educations from "../sections/Education";
import Publications from "../sections/Publications";
import Talks from "../sections/Talks";
import Teachings from "../sections/Teaching";

export default [
  {
    name: "about-me",
    content: AboutMe,
  },
  {
    name: "publications",
    content: Publications,
  },
  {
    name: "talks",
    content: Talks,
  },
  {
    name: "education",
    content: Educations,
  },
  {
    name: "teaching",
    content: Teachings,
  },
] as SectionType[];
