import { IProject } from './types';

export const PROJECTS: IProject[] = [
  {
    title: 'Vogue',
    description:`Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Donec sit amet consequat odio, nec ultrices ex. Etiam iaculis a urna in porta. Morbi convallis diam sed elit dapibus mollis. Donec non sapien vestibulum, commodo massa vitae, tincidunt mauris. Cras luctus massa eu ipsum imperdiet placerat in ultrices eros. `,
    images: [
      {
        src: '/img/project/vogue/Capture.PNG',
      },
      {
        src: '/img/project/vogue/Capture2.PNG',
      },
    ],
    link: 'https://raw-edge.vercel.app/',
    tags: ['react', 'tailwindcss', 'typescript'],
    year: '2022',
    note: '',
    type: 'self',
  },
];
