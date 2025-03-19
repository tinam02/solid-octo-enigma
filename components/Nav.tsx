import { useState } from 'react';
import Pill from './atoms/Pill';
import { useStyle } from '@/hooks/StyleProvider';
import classNames from 'classnames';
import { RandomizeFont } from './atoms/FontRandomizer';
import AnimatedTextCharacter from './atoms/AnimatedText';

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { SunIcon } from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface NavProps {
  hide?: boolean;
}

const Nav: React.FC<NavProps> = ({ hide = false }) => {
  const { fonts, toggleTheme } = useStyle();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
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
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/TinaMilosavljevic_CV.pdf';
    link.download = 'TinaMilosavljevic_CV.pdf';
    link.click();
  };

  const handleEmail = () => {
    window.location.href =
      'mailto:oge612@gmail.com?subject=Portfolio Inquiry&body=Hello, I would like to inquire about your portfolio.';
  };

  return (
    <nav className='flex items-center px-2 navx select-none' style={{}}>
      <div></div>
      <div className=' items-center gap-3 hidden md:flex text-4xl'>
        <Pill className='primary text-xxl ' onClick={handleDownload}>
          <p style={{ display: 'inline-flex' }}>
            Portfolio <ArrowDownTrayIcon className='w-8 h-8 ml-2' />
          </p>
        </Pill>
        <Pill className='secondary' onClick={handleEmail}>
          Email
        </Pill>
        <Pill
          className='secondary'
          onClick={() => {
            window.open('https://www.linkedin.com/in/tina333/', '_blank');
          }}
        >
          LinkedIn
        </Pill>
        <SunIcon
          className={classNames(
            'w-8 h-8 inline-block transition duration-300 cursor-pointer hover:rotate-45'
          )}
          onClick={toggleTheme}
        />
      </div>
      <div className='relative md:hidden text-3xl'>
        <SunIcon
          className={classNames(
            'w-8 h-8 inline-block transition duration-300 cursor-pointer mr-2 hover:rotate-45'
          )}
          onClick={toggleTheme}
        />
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
              className='absolute top-[60px] right-0 flex flex-col items-end'
            >
              <motion.div variants={item} className='flex flex-col items-end gap-4'>
                <Pill className='primary' onClick={handleDownload}>
                  <p style={{ display: 'inline-flex' }}>
                    Portfolio <ArrowDownTrayIcon className='w-8 h-8 ml-2' />
                  </p>
                </Pill>
                <Pill className='secondary' onClick={handleEmail}>
                  Email
                </Pill>
                <Pill
                  className='secondary'
                  onClick={() => {
                    window.open(
                      'https://www.linkedin.com/in/tina333/',
                      '_blank'
                    );
                  }}
                >
                  LinkedIn
                </Pill>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>{' '}
      {/* <motion.div
        style={{ scaleX: scrollYProgress,backgroundColor: 'red'  }}
       >
        sda
      </motion.div> */}
    </nav>
  );
};

export default Nav;
