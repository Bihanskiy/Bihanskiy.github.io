import { v4 as uuidv4 } from 'uuid';
import EmployeersCount from '../images/EmployeersCount.PNG'
import MarvelSetvice from '../images/MarvelService.PNG'
import ToDoList from '../images/toDoList.PNG'
import LandingPage from '../images/LandingPagePNG.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Employees count',
    img: EmployeersCount,
    description: 'A small aplication for counting employees',
    technologies: 'HTML, CSS, SCSS, React',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/employeersCount/',
    source: 'https://github.com/Bihanskiy/employeersCount',
  },
  {
    id: uuidv4(),
    name: 'Marvel Service',
    img: MarvelSetvice,
    description: 'Marvel Service is an application that allows you to view Marvel characters and the comics in which they participated',
    technologies: 'HTML, CSS, SCSS, React, React Router, Marvel Comics API',
    tools: 'Webpack, NPM, Git, Figma',
    url: 'https://bihanskiy.github.io/marvwlTest/',
    source: 'https://github.com/Bihanskiy/marvwlTest',
  },
  {
    id: uuidv4(),
    name: 'ToDoList',
    img: ToDoList,
    description: 'In my opinion, todo application is the best practical task for a beginner. Ideal for short code review.',
    technologies: 'HTML, CSS, SCSS, Vanilla JS',
    tools: 'Gulp NPM, Git',
    url: 'https://bihanskiy.github.io/todolist/',
    source: 'https://github.com/Bihanskiy/todolist',
  },
  {
    id: uuidv4(),
    name: "Landing Page furniture",
    img: LandingPage,
    description: 'The modern landing page was built from Figma design. Interesting possibilities of usage dynamic tools, like Swiper.js or Gallery were implemented in the project. Also this site is responsive. Interaction with the client is the main goal in the project.',
    technologies: 'HTML, CSS, SCSS, Vanilla JS, Mustache',
    tools: 'Gulp, NPM, Git, Figma',
    url: 'https://bihanskiy.github.io/eCommerce-landing-page/',
    source: 'https://github.com/Bihanskiy/eCommerce-landing-page',
  },
];

export default projects;
