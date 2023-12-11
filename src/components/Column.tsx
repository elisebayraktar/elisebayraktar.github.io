import { twMerge } from 'tailwind-merge';

interface IColumn {
  children: React.ReactNode;
  className?: string;
}

export const flexColumnClassName = 'flex flex-col justify-center';

export default function Column({ children, className }: IColumn) {
  return (
    <div className={twMerge(flexColumnClassName, className)}>{children}</div>
  );
}

Column.defaultProps = { className: '' };
