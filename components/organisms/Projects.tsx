import classNames from 'classnames';
import { useState } from 'react';
import { Button } from '../atoms/Button';
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
    link: 'https://vogue.netlify.app',
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
    <article className={classNames('project w-[100%]', className)}>
      <header className={classNames('w-[100%]')}>{title}</header>
      <div className={classNames('w-[100%]', expanded ? 'h-100' : 'h-0')}>
        <p>{description}</p>
        <div className='flex items-center'>
          <span className='text-xs'>Year: </span>
          <span className='text-xs'>{year}</span>
        </div>
      </div>
    </article>
  );
};

const SelfProjects: React.FC<any> = () => {
  return <div>Self</div>;
};

export const Projects = () => {
  const [type, setType] = useState('all');

  return (
    <section className={classNames(' w-[100%]')}>
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
      <div className='grid grid-cols-2 gap-4'>
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
