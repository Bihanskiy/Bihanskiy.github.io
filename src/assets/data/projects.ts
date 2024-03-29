import { v4 as uuidv4 } from 'uuid';
import EmployeersCount from '../images/projects/EmployeersCount.png';
import MarvelSetvice from '../images/projects/MarvelService.png';
import ToDoList from '../images/projects/toDoList.png';
import LandingPage from '../images/projects/LandingPagePNG.png';
import CurrencyExchange from '../images/projects/currency-exchange.png';
import Chat from "../images/projects/Chat.png";
import USSihipLanding from "../images/projects/usShipLanding.png";
import RatingPro from '../images/projects/ratingPro.png';
import YouFine from '../images/projects/FineService.png';
import RatingProProject from '../images/projects/ratingProProject.png';
import ReactFinanceApp from '../images/projects/react-finance-app.png';
import FormInModal from '../images/projects/form-in-modal.png';
import ExpressFinance from '../images/projects/ExpressFinance.png';
import CheetahLegacy from '../images/projects/CheetahLegacy.png';


const projects = [
  {
    id: uuidv4(),
    name: 'RatingPro',
    title: 'Rating Pro',
    type: "Freelancing platform",
    img: RatingPro,
    projectImg: RatingProProject,
    description: "Rating Pro - freelancing platform. Startup in Poland. Created using React at Next.js platform for server side rendering. Rating Pro allows clients to hire and work with freelancers through the company's platform. The client posts a description of their job and a price range they are willing to pay for a freelancer to complete it. The client may invite specific freelancers to apply for their jobs, or else post the job for any freelancer who is interested to apply. There is a bonus system and an affiliate program.",
    technologies: 'HTML, CSS, SCSS, TypeScript, React, Next.js, Axios, Material UI',
    tools: 'Webpack, NPM, Git, Figma, Trello, Jira',
    url: 'https://ratingpro.pl/',
    source: '',
  },
  {
    id: uuidv4(),
    name: 'ExpressFinance',
    title: 'Express Finance',
    type: "Website",
    img: ExpressFinance,
    projectImg: ExpressFinance,
    description: 'Anycash - your own online wallet. Using the Any.cash service, you can make exchanges and cryptocurrency conversions. There is a bonus system and an affiliate program.',
    technologies: 'HTML, CSS, SCSS, JavaScript, Vue.js, Nuxt.js',
    tools: 'Webpack, NPM, Git, Figma',
    url: 'https://any.cash/',
    source: '',
  },
  {
    id: uuidv4(),
    name: 'YouFine',
    title: 'You Fine',
    type: "Landing page",
    img: YouFine,
    projectImg: YouFine,
    description: 'You Fine is a Apple service landing page created using React at Next.js platform for server side rendering.',
    technologies: 'HTML, CSS, SCSS, JavaScript, React, Next.js, Material UI, Framer Motion',
    tools: 'Webpack, NPM, Git, Figma, Trello',
    url: 'https://youfine.vercel.app/',
    source: '',
  },
  {
    id: uuidv4(),
    name: 'USShip',
    title: 'US ship',
    type: "Landing page",
    img: USSihipLanding,
    projectImg: USSihipLanding,
    description: 'Modern landing page',
    technologies: 'HTML, CSS, SCSS, JavaScript',
    tools: 'Webpack, Galp, NPM, Git',
    url: 'https://bihanskiy.github.io/us-ship-landing/',
    source: 'https://github.com/Bihanskiy/us-ship-landing',
  },
  {
    id: uuidv4(),
    name: "Furniture",
    title: "Furniture shop",
    type: "Landing page",
    img: LandingPage,
    projectImg: LandingPage,
    description: 'This modern landing page is made of Figma layout. The possibility of usage such dynamic tools as Swiper.js and Gallery has been implemented in the project. The site is responsive as well. Interaction with the client is the main goal of the project.',
    technologies: 'HTML, CSS, SCSS, Vanilla JS, Mustache',
    tools: 'Gulp, NPM, Git, Figma',
    url: 'https://bihanskiy.github.io/landing-furniture-js/',
    source: 'https://github.com/Bihanskiy/landing-furniture-js',
  },
  {
    id: uuidv4(),
    name: "CheetahLegacy",
    title: "Cheetah Legacy",
    type: "Landing page",
    img: CheetahLegacy,
    projectImg: CheetahLegacy,
    description: 'Cheetah Legacy is the first NFT collection to support wildlife organizations.Indeed our goal is to stop the extinction of cheetahs, thanks to a part of the profit of this project.',
    technologies: 'Webflow',
    tools: 'Webflow',
    url: 'https://cheetah-leagacy-138c39.webflow.io/',
    source: '',
  },
  {
    id: uuidv4(),
    name: 'Chat',
    title: 'Chat',
    type: "Chat application",
    img: Chat,
    projectImg: Chat,
    description: 'The user can send the message in the chat and receive an automatic response in 10-15 seconds. The Chuck Norris API is used to generate an automatic response, namely random jokes.',
    technologies: 'HTML, CSS, SCSS, JavaScript, React, API, CSSTransition',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/react-chat/',
    source: 'https://github.com/Bihanskiy/react-chat',
  },
  {
    id: uuidv4(),
    name: 'CurrencyConverter',
    title: 'Currency Converter',
    type: "Converter application",
    img: CurrencyExchange,
    projectImg: CurrencyExchange,
    description: 'A real time currency converter using api in react',
    technologies: 'HTML, CSS, SCSS, JavaScript, React, API',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/currency-exchange-calculator/',
    source: 'https://github.com/Bihanskiy/currency-exchange-calculator',
  },
  {
    id: uuidv4(),
    name: 'ReactFinanceApp',
    title: 'React finance app',
    type: "Finance application",
    img: ReactFinanceApp,
    projectImg: ReactFinanceApp,
    description: 'App display price tickers data on the UI in realtime. Price data is available from a locally running service.',
    technologies: 'HTML, CSS, SCSS, React, Redux, Socket.io, Testing library Jest ',
    tools: 'Webpack, NPM, Git',
    url: '',
    source: 'https://github.com/Bihanskiy/finance-task',
  },
  {
    id: uuidv4(),
    name: 'MarvelService',
    title: 'Marvel Service',
    type: "Marvel characters application",
    img: MarvelSetvice,
    projectImg: MarvelSetvice,
    description: 'Marvel Service is an application where you can view Marvel characters and the comics with their participation.',
    technologies: 'HTML, CSS, SCSS, React, React Router, Marvel Comics API',
    tools: 'Webpack, NPM, Git, Figma',
    url: 'https://bihanskiy.github.io/marvel-portal/',
    source: 'https://github.com/Bihanskiy/marvel-portal',
  },
  {
    id: uuidv4(),
    name: 'EDA',
    title: 'EDA',
    type: "Arrangement application",
    img: EmployeersCount,
    projectImg: EmployeersCount,
    description: 'Employees data arrangement (EDA) web app. There are the features of changing and filtering the employees data in the app.',
    technologies: 'HTML, CSS, SCSS, React',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/employeersCount/',
    source: 'https://github.com/Bihanskiy/employeersCount',
  },
  {
    id: uuidv4(),
    name: 'ToDoList',
    title: 'ToDoList',
    type: "TODO's mvc",
    img: ToDoList,
    projectImg: ToDoList,
    description: 'In my opinion, a todo application is the best practical task for beginner. It is perfect for a short code review.',
    technologies: 'HTML, CSS, SCSS, Vanilla JS',
    tools: 'Gulp NPM, Git',
    url: 'https://bihanskiy.github.io/todolist-vanilaJS/',
    source: 'https://github.com/Bihanskiy/todolist-vanilaJS',
  },
  {
    id: uuidv4(),
    name: "FormInModal",
    title: "Form in modal",
    type: "Form component",
    img: FormInModal,
    projectImg: FormInModal,
    description: 'Modal window with form fields',
    technologies: 'HTML, CSS, SCSS, Vanilla JS',
    tools: 'Webpack, NPM, Git',
    url: 'https://bihanskiy.github.io/form-in-modal/',
    source: 'https://github.com/Bihanskiy/form-in-modal',
  },
];

export default projects;
