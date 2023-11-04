import { IProject } from "@/utils/types";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export const ProjectCard: React.FC<IProject> = ({
    title,
    description,
    image,
    link,
    tags,
    year,
    note,
    className,
  }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <article className={classNames('project w-full', className)}>
        <header
          className={classNames(
            'cursor-pointer flex items-center content-center justify-center py-2 w-full relative  '
          )}
          onClick={() => setExpanded(!expanded)}
        >
          <p>{title}</p>
          <div className='absolute right-8 flex h-full items-center'>
            <div className='divider-line mx-8 py-0 my-0 dividerx' />
            <ChevronDownIcon
              className={classNames(
                'w-5 h-5 transition-transform duration-300 ',
                expanded ? 'transform rotate-180' : ''
              )}
            />
          </div>
        </header>
  
        <AnimatePresence mode='wait'>
          {expanded && (
            <motion.div
              className={classNames('w-[100%]')}
              key='answer'
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{
                opacity: 1,
                maxHeight: '1000px',
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0, maxHeight: 0 }}
            >
              <p>{description}</p>
              <div className='flex items-center'>
                <span className='text-xs'>Year: </span>
                <span className='text-xs'>{year}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    );
  };