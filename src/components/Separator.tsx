import { twMerge } from 'tailwind-merge';

export default function Separator({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        'border-b border-l border-primary-200 place-self-center w-24 lg:w-52',
        className,
      )}
    />
  );
}

Separator.defaultProps = { className: '' };
