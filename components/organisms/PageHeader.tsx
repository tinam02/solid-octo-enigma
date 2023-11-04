import classNames from 'classnames';
import { useState } from 'react';

// interface NavProps {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }

export const PageHeader: React.FC<any> = ({
  text = 'Info',
  className,
}: any) => {
  return (
    <header className={classNames('pageHeader', className)}>
      <h1 className="text-8xl ">{text}</h1>
    </header>
  );
};
