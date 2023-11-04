import { useState } from 'react';
import Pill from './atoms/Pill';
import { useStyle } from '@/hooks/StyleProvider';
import classNames from 'classnames';
import { RandomizeFont } from './atoms/FontRandomizer';
import AnimatedTextCharacter from './atoms/AnimatedText';

import { AnimatePresence, motion } from 'framer-motion';

interface NavProps {
  hide?: boolean;
}

const Nav: React.FC<NavProps> = ({ hide = false }) => {
  const { fonts, toggleTheme } = useStyle();
  const [open, setOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <nav className='flex items-center px-2 navx select-none' style={{}}>
      <Pill className={classNames('secondary', fonts.divine)}>as </Pill>
      <div className=' items-center gap-3 hidden md:flex'>
        <Pill className='primary'>Home</Pill>
        <Pill className='secondary'>Email</Pill>
        <Pill
          className='secondary'
          onClick={() => {
            window.open('https://www.linkedin.com/in/tina333/', '_blank');
          }}
        >
          <RandomizeFont text='LinkedIn' />
        </Pill>
        <Pill className='secondary' onClick={toggleTheme}>
          T
        </Pill>
      </div>
      <div className='relative md:hidden'>
        <Pill className='secondary' onClick={() => setOpen(prev => !prev)}>
          Menu
        </Pill>
        <AnimatePresence>
          {open && (
            <motion.div
              key='menu'
              variants={container}
              initial='hidden'
              animate='show'
              className='absolute top-[60px] right-0 flex flex-col items-end gap-4'
            >
              <motion.div variants={item}>
                <Pill className='secondary' onClick={toggleTheme}>
                  T
                </Pill>
              </motion.div>
              <motion.div variants={item}>
                <Pill className='secondary' onClick={toggleTheme}>
                  Tsfsdfsdf
                </Pill>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
