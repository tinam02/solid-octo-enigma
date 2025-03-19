export interface IProject {
  title: string;
  description: string;
  images: {
    src: string;
    caption?: string;
    hide?: boolean;
    video?: boolean;
  }[];
  link?: string;
  tags: string[];
  year: string;
  note?: string;
  className?: string;
  type: 'self' | 'client' | 'experiment';
}
