export interface IProject {
  title: string;
  description: string;
  images: {
    src: string;
    desc?: string;
  }[];
  link?: string;
  tags: string[];
  year: string;
  note?: string;
  className?: string;
  type: 'self' | 'client' | 'experiment';
}
