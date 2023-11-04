export interface IProject {
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
  