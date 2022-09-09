import { v4 as uuidv4 } from 'uuid';
import EmployeersCount from '../images/EmployeersCount.PNG';
import MarvelSetvice from '../images/MarvelService.PNG';
import ToDoList from '../images/toDoList.PNG';
import LandingPage from '../images/LandingPagePNG.PNG';
import CurrencyExchange from '../images/currency-exchange.PNG';
import Chat from "../images/Chat.PNG"
import USSihipLanding from "../images/usShipLanding.PNG"


const projects = [
  {
    id: uuidv4(),
    name: 'Chat',
    img: Chat,
    description: 'The user can send the message in the chat and receive an automatic response in 10-15 seconds. The Chuck Norris API is used to generate an automatic response, namely random jokes.',
    technologies: 'HTML, CSS, SCSS, JavaScript, React, API, CSSTransition',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/react-chat/',
    source: 'https://github.com/Bihanskiy/react-chat',
  },
  {
    id: uuidv4(),
    name: 'Currency Converter',
    img: CurrencyExchange,
    description: 'A real time currency converter using api in react',
    technologies: 'HTML, CSS, SCSS, JavaScript, React, API',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/currency-exchange-calculator/',
    source: 'https://github.com/Bihanskiy/currency-exchange-calculator',
  },
  {
    id: uuidv4(),
    name: 'Marvel Service',
    img: MarvelSetvice,
    description: 'Marvel Service is an application where you can view Marvel characters and the comics with their participation.',
    technologies: 'HTML, CSS, SCSS, React, React Router, Marvel Comics API',
    tools: 'Webpack, NPM, Git, Figma',
    url: 'https://bihanskiy.github.io/marvel-portal/',
    source: 'https://github.com/Bihanskiy/marvel-portal',
  },
  {
    id: uuidv4(),
    name: 'US ship landing page',
    img: USSihipLanding,
    description: 'Modern landing page',
    technologies: 'HTML, CSS, SCSS, JavaScript',
    tools: 'Webpack, Galp, NPM, Git',
    url: 'https://bihanskiy.github.io/us-ship-landing/',
    source: 'https://github.com/Bihanskiy/us-ship-landing',
  },
  {
    id: uuidv4(),
    name: 'EDA',
    img: EmployeersCount,
    description: 'Employees data arrangement (EDA) web app. There are the features of changing and filtering the employees data in the app.',
    technologies: 'HTML, CSS, SCSS, React',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/employeersCount/',
    source: 'https://github.com/Bihanskiy/employeersCount',
  },
  {
    id: uuidv4(),
    name: 'ToDoList',
    img: ToDoList,
    description: 'In my opinion, a todo application is the best practical task for beginner. It is perfect for a short code review.',
    technologies: 'HTML, CSS, SCSS, Vanilla JS',
    tools: 'Gulp NPM, Git',
    url: 'https://bihanskiy.github.io/todolist-vanilaJS/',
    source: 'https://github.com/Bihanskiy/todolist-vanilaJS',
  },
  {
    id: uuidv4(),
    name: "Landing Page Furniture",
    img: LandingPage,
    description: 'This modern landing page is made of Figma layout. The possibility of usage such dynamic tools as Swiper.js and Gallery has been implemented in the project. The site is responsive as well. Interaction with the client is the main goal of the project.',
    technologies: 'HTML, CSS, SCSS, Vanilla JS, Mustache',
    tools: 'Gulp, NPM, Git, Figma',
    url: 'https://bihanskiy.github.io/landing-furniture-js/',
    source: 'https://github.com/Bihanskiy/landing-furniture-js',
  },
];

export default projects;
