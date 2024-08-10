import sections from "../../utils/const";
import NavigationItem from "./NavigationItem";

interface INavigationItemsProps {
  activeSection: string | null;
  handleClick: (name: string) => void;
}

export default function NavigationItems({
  activeSection,
  handleClick,
}: INavigationItemsProps) {
  return sections.map((item) => (
    <NavigationItem
      name={item.name}
      selected={activeSection === item.name}
      key={item.name}
      onClick={() => handleClick(item.name)}
    >
      {item.name.replace("-", " ")}
    </NavigationItem>
  ));
}
