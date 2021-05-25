import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Riddhi Suteri', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Riddhi Suteri is a Full Stack Web Developer, Open Source Enthusiast, Tech Blogger and a Mentor', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Riddhi Suteri',
  subtitle: 'Developer | Mentor | Tech Enthusiast',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'HI 👋',
  paragraphTwo: 'I’m a Web Developer by day, blogger by evening, a functional wantrepreneur by midnight and a hustler always.',
  paragraphThree: 'You can find me watching cricket 🏏, brewing coffee ☕  or writing blogs 📝 ',
  paragraphFour:'I do stocks 📈',
  resume: 'https://drive.google.com/file/d/1ijS-vwJZ1ZKtqYgIzWnL4c91D0WvJWVk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'Instagram Clone',
    info: 'React MongoDb Node.js',
    info2: 'Feb 2021 - Present',
    url: 'https://github.com/ridsuteri/instagram-clone',
    repo: 'https://github.com/ridsuteri/instagram-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Chatter',
    info: 'Node.js Socket.io',
    info2: 'Feb 2021',
    url: 'https://chat-er.herokuapp.com/',
    repo: 'https://github.com/ridsuteri/chatte-R', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Rixx Studios',
    info: 'HTML CSS JS',
    info2: 'Aug 2020',
    url: 'https://rixx-studios.netlify.app/',
    repo: 'https://github.com/ridsuteri/RixxStudios', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ridsuteri@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rid_suteri',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/riddhi-suteri/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ridsuteri',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@ridsuteri',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ridsuteri/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
