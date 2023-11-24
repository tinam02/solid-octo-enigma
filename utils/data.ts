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
    tags: ['react', 'next.js', 'graphql', 'firebase', 'material-ui', 'apollo'],
    year: '2022',
    note: '',
    type: 'self',
  },
  {
    title: 'Gallery App',
    link: 'https://code-projekat.vercel.app/',
    description:
      'A gallery app where you can upload images, create albums and share them with other users. It uses Firebase for authentication and storage. Each user has their profile page where they can view the images they uploaded or delete them. The app is fully responsive and has a dark mode.',
    year: '2021',
    type: 'self',
    tags: ['react', 'firebase', 'framer motion'],
    images: [
      {
        src: '/img/project/gallery/galleryhome.PNG',
        caption: `Home/explore page`,
      },
      {
        src: '/img/project/gallery/lightbox.PNG',
      },
      {
        src: '/img/project/gallery/profiledef.PNG',
        caption: `Profile page with your uploaded images and info.`,
      },
      {
        src: '/img/project/gallery/submit.PNG',
        caption: `Signed in users can upload images.`,
      },
    ],
  },
  {
    title: 'Moshi Monsters login screen recreation',
    link: 'https://fractal-tree-generator.vercel.app/',
    description: `
Moshi Monsters was a game I used to play as a kid. I recreated the animated login screen where Iggy the moshling would chase your cursor and eat it if he caught it. I used vanilla JS events combined with GSAP to track, move, change the sprite and change the direction Iggy's eyes are looking according to the cursor position. A few people integrated this code on their tumblr blogs or edited it into their own projects.
    `,
    year: '2022',
    type: 'experiment',
    tags: ['vanilla js', 'GSAP'],
    images: [
      {
        src: '/img/project/moshi-monsters/iggy-chase.gif',
      },
    ],
  },
  {
    title: 'Fractal tree generator',
    link: 'https://fractal-tree-generator.vercel.app/',
    description: `Small canvas app that generates a fractal tree. The user can change the angle and number of branches.`,
    year: '2021',
    type: 'experiment',
    tags: ['vanilla js', 'canvas'],
    images: [
      {
        src: '/img/project/fractal-tree/fractal-3.PNG',
      },
      {
        src: '/img/project/fractal-tree/fractal-3-complex.PNG',
        caption: 'Tree with a smaller min branch length',
      },
    ],
  },
  {
    title: 'Yοοrdi Website',
    link: 'https://yoordi.com/',
    description: `Official website for Yοοrdi. It has a Strapi CMS for the client to manage the components, localized text and pages which are dynamically generated. Users from target regions automatically get redirected to their language when visiting the site. It includes forms for leads and selfonboarding and pages which show the gastronomy solutions the company offers. Google and HubSpot Analytics are used to track user behavior.`,
    year: '2023',
    type: 'client',
    tags: [
      'Strapi',
      'Next.js',
      'TypeScript',
      'Vanilla Extract CSS',
      'Storybook',
      'Analytics',
      'SEO',
      'GA4',
      'Google Ads',
    ],
    images: [
      {
        src: '/img/project/ydi/homepage-de.PNG',
      },
      {
        src: '/img/project/ydi/megamenu.PNG',
        caption: 'Megamenu with submenus',
      },
      {
        src: '/img/project/ydi/yd-sitemp.PNG',
        caption: 'Sitemap with every page and its localized versions',
      },
      {
        src: '/img/project/ydi/contactform.PNG',
        caption:
          'Contact form which connects the user to the company HubSpot and sends an email to the marketing teams channel',
      },
      {
        src: '/img/project/ydi/yd-register.PNG',
        caption:
          "Registration form for the company's other website where the user controls everything related to their restaurant",
      },
      {
        src: '/img/project/ydi/yd-team.PNG',
      },
      {
        src: '/img/project/ydi/yd-resutl.PNG',
      },
    ],
  },
];
