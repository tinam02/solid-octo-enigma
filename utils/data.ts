import { IProject } from './types';

export const PROJECTS: IProject[] = [
  {
    title: 'Raw Edge',
    description:
      "**Raw Edge** is a fashion news website that uses Vogue's GraphQL API as a data source. Its main purpose is to display data in a clean, ad-free way. The homepage displays livestreams as they're happening, followed by the latest shows and articles. It has a search function and a user account system with bookmarks for easy access to your favorite content. The site is fully responsive and has a dark mode.",
    images: [
      {
        src: '/img/project/vogue/Capture.PNG',
        caption: `Homepage with the most recent shows and a carousel of the latest one.`,
      },
      {
        src: '/img/project/vogue/review.PNG',
        caption: `Clicking on a show leads to the review page. With images, a written review and author credits.`,
      },
      {
        src: '/img/project/vogue/withdetails.PNG',
        caption: `If there are close-up shots of the clothing, they will be displayed in a collapsable "Details" section.`,
      },
      {
        src: '/img/project/vogue/withvideo.PNG',
        caption: `Sometimes there is a video of the show, in which case it will be displayed at the top.`,
      },
      {
        src: '/img/project/vogue/capturedes.PNG',
        caption: `When clicking on the designer name at the top, you will be taken to a page where
        you can see all the shows by that designer, a summary and a list of current/previous creative directors.`,
      },
      {
        src: '/img/project/vogue/Capture2.PNG',
        caption: `Article explore page with latest articles.`,
      },
      {
        src: '/img/project/vogue/articlesearch.PNG',
        caption: `Search for articles and brands by keyword.`,
      },
      {
        src: '/img/project/vogue/imagearticle.PNG',
        caption: `Image article - The content is displayed differently depending on the article type.`,
      },
      {
        src: '/img/project/vogue/shoparticle.PNG',
        caption: `Shopping article with product links.`,
      },
      {
        src: '/img/project/vogue/account.PNG',
        caption: `Account page with settings and bookmarks.`,
      },
      {
        src: '/img/project/vogue/saved.PNG',
        caption: `Bookmarked shows`,
      },
    ],
    link: 'https://raw-edge.vercel.app/',
    tags: ['react', 'tailwindcss', 'typescript'],
    year: '2022',
    note: '',
    type: 'self',
  },
];
