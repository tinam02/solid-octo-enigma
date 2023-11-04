import classNames from 'classnames';
import { useState } from 'react';
import { Button } from '../atoms/Button';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
interface IProject {
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
  year: string;
  note?: string;
  className?: string;
  type: 'self' | 'client' | 'experiment';
}

const projects: IProject[] = [
  {
    title: 'Vogue',
    description: 'A fashion magazine website',
    image: '/images/projects/vogue.png',
    link: 'https://raw-edge.vercel.app/',
    tags: ['react', 'tailwindcss', 'typescript'],
    year: '2022',
    note: '',
    type: 'self',
  },
];

const ProjectCard: React.FC<IProject> = ({
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

const SelfProjects: React.FC<any> = () => {
  return <div>Self</div>;
};

export const Projects = () => {
  const [type, setType] = useState('all');

  return (
    <section className={classNames(' ')}>
      <div className='flex items-center justify-center gap-2 py-4'>
        <Button
          className={type === 'all' ? 'active' : ''}
          onClick={() => setType('all')}
        >
          All
        </Button>
        <Button
          className={type === 'self' ? 'active' : ''}
          onClick={() => setType('self')}
        >
          Self-initiated
        </Button>
        <Button
          className={type === 'experimental' ? 'active' : ''}
          onClick={() => setType('experimental')}
        >
          Self-initiated
        </Button>
      </div>
      <div className='w-full'>
        {projects
          .filter(project => (type !== 'all' ? project.type === type : true))
          .map(project => (
            <div key={project.title}>
              <ProjectCard {...project} />
            </div>
          ))}
      </div>
    </section>
  );
};
