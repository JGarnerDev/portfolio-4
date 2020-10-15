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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
    img: 'codepen.jpg',
    title: 'Designs on Codepen',
    info:
      "While I'm always celebrating when I learn more about servers and databases, front end work was fulfilling and enjoyable since I first wrote code.",
    info2:
      "Here's an organized collection of my latest material - either made to replicate designs by eye, or to make entirely new ones!",
    url: 'https://codepen.io/JeffGarner',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Blog',
    info:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptatibus necessitatibus omnis delectus sequi quam pariatur officia mollitia repellat deleniti fugiat repellendus fugit, atque quisquam laborum, recusandae eligendi id incidunt?',
    info2:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam animi, iure eum quidem earum error exercitationem, quisquam sapiente impedit provident nemo veniam assumenda deserunt odio ratione natus dolores enim ut!',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
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
