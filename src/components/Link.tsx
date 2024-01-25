interface ILink {
  label: string;
  href: string;
  className?: string;
}

export default function Link({ label, href, className }: ILink) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

Link.defaultProps = { className: 'link-primary link-hover' };
