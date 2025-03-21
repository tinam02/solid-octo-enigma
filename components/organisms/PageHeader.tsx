import classNames from 'classnames';
import { RandomizeFont } from '../atoms/FontRandomizer';

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
        'pageHeader w-[100%] flex items-center justify-center h-[35vh] border-b borderColor',
        className
      )}
    >
      <h1 className='text-[45vw] md:text-[190px] pt-7 '>
        <RandomizeFont text={text} loop></RandomizeFont>
      </h1>
    </header>
  );
};
