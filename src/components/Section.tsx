export type SectionType = {
  name: string;
  content: () => JSX.Element;
};

interface ISection {
  item: SectionType;
  index: number;
  setRef: (ref: HTMLDivElement | null) => void;
}

export default function Section({ item, index, setRef }: Readonly<ISection>) {
  if (index === 0)
    return (
      <div className="box lg:flex-row" ref={(ref) => setRef(ref)}>
        <item.content />
      </div>
    );
  return (
    <div className="box" ref={(ref) => setRef(ref)}>
      <h2>{item.name}</h2>
      <item.content />
    </div>
  );
}
