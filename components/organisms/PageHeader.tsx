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
    <header
      className={classNames(
        'pageHeader w-[100%] flex items-center justify-center h-[35vh]',
        className
      )}
    >
      <h1 className='text-[45vw] md:text-9xl '>{text}</h1>
    </header>
  );
};
