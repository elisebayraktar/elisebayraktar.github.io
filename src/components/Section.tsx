import { twMerge } from 'tailwind-merge';
import { boxClassName, titleClassName } from '../utils/style';

export type SectionType = {
  name: string;
  content: () => JSX.Element;
};

interface ISection {
  item: SectionType;
  index: number;
  setRef: (ref: HTMLDivElement | null) => void;
}

export default function Section({ item, index, setRef }: ISection) {
  if (index === 0)
    return (
      <div
        className={twMerge(boxClassName, 'lg:flex-row')}
        ref={(ref) => setRef(ref)}
      >
        <item.content />
      </div>
    );
  return (
    <div className={boxClassName} ref={(ref) => setRef(ref)}>
      <div className={titleClassName}>{item.name}</div>
      <item.content />
    </div>
  );
}
