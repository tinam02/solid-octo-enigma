import { PROJECTS } from '@/utils/data';
import classNames from 'classnames';
import { useState } from 'react';
import { Button } from '../atoms/Button';
import { ProjectCard } from '../molecules/ProjectCard';

export const Projects = () => {
  const [type, setType] = useState('all');

  return (
    <section>
      <div className='flex items-center justify-center gap-5 py-4 flex-wrap'>
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
          className={type === 'client' ? 'active' : ''}
          onClick={() => setType('client')}
        >
          Work
        </Button>
        <Button
          className={type === 'experiment' ? 'active' : ''}
          onClick={() => setType('experiment')}
        >
          Experiments
        </Button>
      </div>
      <div className='w-full'>
        {PROJECTS.filter(project =>
          type !== 'all' ? project.type === type : true
        ).map(project => (
          <div key={project.title}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
