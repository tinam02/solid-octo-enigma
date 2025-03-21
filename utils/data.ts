import { IProject } from './types';

export const PROJECTS: IProject[] = [
  {
    title: 'Raw Edge',
    description:
      "raw.edge is a fashion news website that uses Vogue's GraphQL API as a data source. Its main purpose is to display data in a clean, ad-free way. The homepage displays livestreams📹 as they're happening, followed by the latest shows and articles. It has a search🔎 function and a user account system with bookmarks🔖 for easy access to your favorite content. The site is fully responsive and has a dark mode.",
    images: [
      {
        src: '/img/project/vogue/Capture.PNG',
        caption: `Homepage with the most recent shows and a carousel of the latest one.`,
      },
      {
        src: '/img/project/vogue/recording.mp4',
        caption: `Video walkthrough <br/> <a href='/img/project/vogue/recording.mp4'>Click here to watch in new tab</a>`,
        video: true,
      },
      {
        src: '/img/project/vogue/review.PNG',
        caption: `Clicking on a show leads to the review page with images, a written review and author credits.`,
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
        src: '/img/project/vogue/Capturedes.PNG',
        caption: `When clicking on the designer name at the top, you will be taken to a page where
        you can see all the shows by that designer, a summary and a list of current/previous creative directors.`,
      },
      {
        src: '/img/project/vogue/Capture2.PNG',
        caption: `Article explore page`,
      },
      {
        src: '/img/project/vogue/articlesearch.PNG',
        caption: `Search for articles and brands by keyword`,
      },
      {
        src: '/img/project/vogue/imagearticle.PNG',
        caption: `The content is displayed differently depending on the article type. This is an image article,`,
      },
      {
        src: '/img/project/vogue/shoparticle.PNG',
        caption: `and this is a shopping article with product links`,
      },
      {
        src: '/img/project/vogue/account.PNG',
        caption: `Account page with settings and bookmarks`,
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
    title: 'Yοοrdi Website',
    link: 'https://yoordi.com/',
    description: `Official website for Yoordi. It has a Strapi CMS for the client to manage the components, localized text and pages which are dynamically generated. Users from target regions automatically get redirected to their language when visiting the site. It includes forms for leads and selfonboarding and pages which show the gastronomy solutions the company offers. GTM, Ads and HubSpot Analytics are used to track user behavior.`,
    year: '2023 - present',
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
  {
    title: 'Yοοrdi Ordering & Payment System',
    description: `Worked on all ordering digitalization apps, enabling management of **POS systems, products, discounts, and loyalty programs**.
    Developed **financial report tools**📊 and **roles and permissions**🔑 within the admin panel.
    💳 Integrated multiple **payment gateways**.
    🚚 Built **pre-ordering, delivery, and pickup** features and features tailored to customer needs. 
    🧪 Wrote and automated E2E tests to validate full user journeys.`,
    year: '2023 - present',
    type: 'client',
    tags: [
      'Node.js',
      'TypeScript',
      'React',
      'YML',
      'Azure',
      'Jira',
      'Strapi',
      'Jest',
      'TestCafe',
    ],
    images: [
      {
        src: '/img/project/ydi/demovid.mp4',
        video: true,
        caption: 'POS',
      },
      {
        src: '/img/project/ydi/waiter1.png',
        caption: 'Digital Ordering',
      },
      {
        src: '/img/project/ydi/prodd.png',
      },
      {
        src: '/img/project/ydi/pay.png',
        caption: 'Payment',
      },
      {
        src: '/img/project/ydi/bill.png',
        caption: 'Customer receipt',
      },
    ],
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
    link: 'https://moshi-monster-cursor.vercel.app/',
    description: `
Recreated the animated login screen from Moshi Monsters where Iggy would chase your cursor and eat it if he caught it. I used vanilla JS events combined with GSAP to track, move change the direction Iggy's eyes are looking based on the cursor position. Successfully sold the code to a few Tumblr bloggers to use, before making it public.
    `,
    year: '2022',
    type: 'experiment',
    tags: ['vanilla js', 'GSAP'],
    images: [
      {
        src: '/img/project/moshi-monsters/iggy-chase.gif',
      },
      {
        src: '/img/project/moshi-monsters/iggy.png',
        caption: 'Default Iggy sprite',
      },
      {
        src: '/img/project/moshi-monsters/iggytongue.png',
        caption: 'Iggy in close proximity to cursor',
      },
      {
        src: '/img/project/moshi-monsters/iggyeat.png',
        caption: 'Iggy eating cursor',
      },
      {
        src: '/img/project/moshi-monsters/iggyleft.png',
        caption: 'Iggy looking at cursor on the left',
      },
      {
        src: '/img/project/moshi-monsters/iggyright.png',
        caption: 'Right',
      },
      {
        src: '/img/project/moshi-monsters/iggyup.png',
        caption: 'Up',
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
];
