import classNames from 'classnames';

export function Button({
  onClick,
  className,
  children,
}: {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <button className={classNames('rounded px-5 py-0', className)} onClick={onClick}>
      {children}
    </button>
  );
}
