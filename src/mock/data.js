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
    'https://www.linkedin.com/in/jgarnerwebdev/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAABp3QKIBaEPIyYYeW_TMY542_NvliNf9Nd4,1603736909200)/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
      "While I'm always celebrating when I learn more about servers and databases, front end work was fulfilling and enjoyable since I first wrote code.",
    info2:
      "Here's an organized collection of my latest material - either made to replicate designs by eye, or to make entirely new ones!",
    url: 'https://codepen.io/JeffGarner',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'JGDevBlog',
    info:
      "Given my past in Liberal Arts, I always enjoy talking and writing about programming concepts, projects that I'm working on, and code challenges that I've been given.",
    info2:
      "Here's my blog where you can see me approach a variety of subjects and see how I think!",
    url: 'https://jgdevblog.ca/',
    repo: '', // if no repo, the button will not show up
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
