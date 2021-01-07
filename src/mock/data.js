import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Front End Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey! I'm ",
  name: 'Jeffrey Garner',
  subtitle: "I'm a Front End Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '1.jpg',
  paragraphOne: "Hey there! My name's Jeff, and I've been a JavaScript web developer since 2019!",
  paragraphTwo:
    'While I have made my share of full stack applications with React and Node, I would say that my strong suits are with front end and design - especially being able to recreate designs with HTML and CSS from a given image.',
  paragraphThree: 'Take a look at my most current work below, and on CodePen!',
  resume:
    'https://www.linkedin.com/in/jgarnerwebdev/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABp3QKIBaEPIyYYeW_TMY542_NvliNf9Nd4,1610034360726)/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'telephono.jpg',
    title: 'TelePhono - A Full-stack eCommerce App',
    info:
      'Using React and Node, I designed and built both the server and client to make an online store directed at selling phones. Browse products and make a purchase as a user, or manage content as an administrator.',
    info2:
      'Includes NoSQL database management and schema design, product queries, password encryption, user authorization, private and administrative routing protection, order confirmation mailing, and more!',
    url: 'https://telephono.netlify.app/',
    repo: 'https://github.com/JGarnerDev/telephono-ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jimmy-photography-portfolio.jpg',
    title: 'Photography Portfolio for Jimmy Karamanis',
    info:
      'Using Gatsby.js, GraphQL, and Sanity.io, I designed and implemented a website and headless CMS for Jimmy Karamanis to publish his photography and to advertise himself as a potential photographer.',
    info2:
      'I had a great time closely collaborating with him to structure a schedule of deliverable features, researching and implementing a design that he wanted, and creating a website that showed his amazing high-resolution photos quickly and elegantly within a zero-cost plan.',
    url: 'https://jimmykphotography.netlify.app/',
    repo: 'https://github.com/JGarnerDev/jimmy-portfolio',
  },
  {
    id: nanoid(),
    img: 'chatterbox.jpg',
    title: 'ChatterBox - A Live Chat WebApp',
    info:
      "A live chat service I built with React for the front end, and Node for the back end. Chatterbox is a slim-built application that uses Web Sockets to enable bi-directional communication between the client's browser and the application's server.",
    info2:
      'Uses React (with Hooks and Context), SCSS, Socket.io, Node, Express, and Jest-Enzyme for unit and intergration tests.',
    url: 'https://chatterboxjg.netlify.app/',
    repo: 'https://github.com/JGarnerDev/chatterbox-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'restaurant-design.jpg',
    title: 'The Original Smokehouse - A Mock Restaurant Website',
    info:
      "Since my close friend opened a restaurant, they've been planning to increase their presence on the internet - this is a mock website I made to give them inspiration as we plan their own site design!",
    info2:
      "Made with HTML, SCSS, JQuery, and BootStrap. Scores highly in best practices and SEO via Google's Lighthouse assessment.",
    url: 'https://restaurant-design-demo.netlify.app/',
    repo: 'https://github.com/JGarnerDev/chatterbox-2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'codepen.jpg',
    title: 'Designs on Codepen',
    info:
      "When I'm in between projects, I pick up design drafts, functional component concepts, and webapp projects and implement them here with HTML, CSS, and Vanilla JavaScript",
    info2: '',
    url: 'https://codepen.io/JeffGarner',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send a message!',
  email: 'j.garner200@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/JeffGarner',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jgarnerwebdev/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/JGarnerDev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
