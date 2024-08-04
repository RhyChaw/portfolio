import trilloImage from '../images/proj/trillo.png'; 
import NatoursImage from "../images/proj/Natours.png";
import UsePopcornImage from "../images/proj/UsePopcorn.png";
import DASHImage from "../images/proj/DASH.png";
import WATisZine from "../images/proj/WATisZine.png";
import NexterImage from "../images/proj/Nexter.png";
import CSGPTPRO from "../images/proj/csgptpro.png";
import ReactQuiz from "../images/proj/ReactQuiz.png";
import WorldWise from "../images/proj/Worldwise.png";
import AtomicBlog from "../images/proj/AtomicBlog.png";
import G12Proj from "../images/proj/G12Proj.png";
import JadoAI from "../images/proj/JadoAI.png";
import VBOman from "../images/proj/VBoman.png";
import HestiaP from "../images/proj/HestiaP.png";
import WorkoutTimer from "../images/proj/WorkoutTimer.png";
import EatNSplit from "../images/proj/EatNSplit.png";
import TravelList from "../images/proj/TravelList.png";
import ClassyWeather from "../images/proj/ClassyWeather.png";
import RocketLanding from "../images/proj/RocketLand.png";
import PacmanPlayer from "../images/proj/PacmanPlayer.png";
import KungFuMaster from "../images/proj/KungFuMaster.png";
import DOCTORAI from "../images/proj/DoctorAI.png";
import ReduxBank from "../images/proj/ReduxBank.png";
import PizzaCompanyREACT from "../images/proj/PizzaCompanyREACT.png";


const colors = {
  css: '#ff69b4',  // Pink
  ai: '#800080',   // Purple
  webDev: '#333' // grey
};

const projectsData = [
  {
    title: 'G12',
    description: 'Startup App built using Vite React and Firebase',
    image: G12Proj,
    link: 'https://g12uni.com',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'JADO AI',
    description: 'AI Chatbot which can scan through Youtube, Reddit, Wolfram ALpha, Resume scanner, People finder etc. (Addition of G12)',
    image: JadoAI,
    link: 'https://g12uni.com',
    category: 'AI',
    backgroundColor: colors.ai
  },
  {
    title: 'CSGPTPRO Hackathon Project',
    description: 'App built using Python, Streamlit and Arctic',
    image: CSGPTPRO,
    link: 'https://github.com/jadechoghari/CSGPTPRO',
    category: 'AI',
    backgroundColor: colors.ai
  },
  {
    title: 'Doctor AI Project',
    description: 'Medically Fine-tuned LLM model built using Llama2(Meta) and trained on Hugging Face Data',
    image: DOCTORAI,
    link: 'https://colab.research.google.com/drive/1dJVq9tbPk0IwA3Tbpxvl0_9iZqKzXDaX',
    category: 'AI',
    backgroundColor: colors.ai
  },
  {
    title: 'Kung Fu Master AI Project',
    description: 'App built using Google Collab, Python and Gymnasium (A3C)',
    image: KungFuMaster,
    link: 'https://colab.research.google.com/drive/1anhsl9AGsTMMapq3tuhQBghW0d4fqHmS',
    category: 'AI',
    backgroundColor: colors.ai
  },
  {
    title: 'PAC MAN Player AI Project',
    description: 'App built using Google Collab, Python and Gymnasium (Deep Convolutional Q-learning)',
    image: PacmanPlayer,
    link: 'https://colab.research.google.com/drive/19ZZJCRdLLAJsJB3XVmCS6Kq315UKqAJa#scrollTo=cb9nVvU2Okhk',
    category: 'AI',
    backgroundColor: colors.ai
  },
  {
    title: 'Rocket Landing AI Project',
    description: 'App built using Google Collab, Python and Gymnasium (Deep Q learning)',
    image: RocketLanding,
    link: 'https://colab.research.google.com/drive/1SgdMlL2zM2HERCBJ5yhpVtbO7QtdDGMh',
    category: 'AI',
    backgroundColor: colors.ai
  },
  {
    title: 'VBOman Admin Panel (FreeLance)',
    description: 'REACT JS application with Firebase Backend for Restaurant Vasanta Bhavan based in Oman',
    image: VBOman,
    link: 'https://vboman.com',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Hestia | Your Next Home',
    description: 'Student Sublet finder built using HTML, CSS, and Django(Python) For backend. Hosted using AZURE Cloud',
    image: HestiaP,
    link: 'https://github.com/gsaujla/HestiaProject',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'DASH Project',
    description: 'NEXT JS application with JAVA Backend for Dropshippers',
    image: DASHImage,
    link: 'https://github.com/RhyChaw/dropshiphub',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'WATisZine Website',
    description: 'REACT JS app with Auth, MongoDB Backend for Zine club at UW',
    image: WATisZine,
    link: 'https://watiszine.clubs.wusa.ca/',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Nexter Project',
    description: 'A web application built with Advanced CSS Grid, NPM Scripting and SASS',
    image: NexterImage,
    link: 'https://github.com/RhyChaw/Nexter-project',
    category: 'CSS',
    backgroundColor: colors.css
  },
  {
    title: 'Trillo Project',
    description: 'A web hotel application built with Advanced CSS, and SASS',
    image: trilloImage,
    link: 'https://github.com/RhyChaw/Trillo-project',
    category: 'CSS',
    backgroundColor: colors.css
  },
  {
    title: 'Natours Project',
    description: 'A web tourist application built with Advanced CSS, and SASS',
    image: NatoursImage,
    link: 'https://github.com/RhyChaw/NaTours-Project',
    category: 'CSS',
    backgroundColor: colors.css
  },
  {
    title: 'Demo Pizza Company Website Project',
    description: 'REACT Project for Redux toolkit(RTK), API Fetching for menu, and multiple hooks, Along with Tailwind CSS styling.',
    image: PizzaCompanyREACT,
    link: 'https://github.com/RhyChaw/The-Complete-Pizza-shop-Project-',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Redux Bank Project',
    description: 'REACT Project for Classical Redux and Redux toolkit(RTK), Thunks, and reducer hooks',
    image: ReduxBank,
    link: 'https://github.com/RhyChaw/redux-practice',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'World wise project',
    description: 'REACT Project for context API, Routing with navigate, history and Auth',
    image: WorldWise,
    link: 'https://github.com/RhyChaw/worldwise-project',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Atomic blog project',
    description: 'REACT Project for learning context API and has Dark Mode :)',
    image: AtomicBlog,
    link: 'https://github.com/RhyChaw/atomic-blog-context-api-project',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Workout timer app',
    description: 'REACT Project for practicing useMemo, useCallback and memo',
    image: WorkoutTimer,
    link: 'https://github.com/RhyChaw/Workout-timer-project',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'REACT Quiz',
    description: 'REACT Project for useReducer REACT Hook',
    image: ReactQuiz,
    link: 'https://github.com/RhyChaw/React-Quiz-project',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Use Popcorn',
    description: 'A movie tracking REACT application using fetch APIs',
    image: UsePopcornImage,
    link: 'https://github.com/RhyChaw/07-UsePopcorn',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Weather detector',
    description: 'A Classical react app to fetch weather of different countries',
    image: ClassyWeather,
    link: 'https://github.com/RhyChaw/09---Weather-Detector',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Travel list',
    description: 'A travel list application made using state in REACT',
    image: TravelList,
    link: 'https://github.com/RhyChaw/05---Travel-list',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
  {
    title: 'Eat & Split',
    description: 'A REACT APP to split bill using state',
    image: EatNSplit,
    link: 'https://github.com/RhyChaw/06-Eat-Split',
    category: 'Web Dev',
    backgroundColor: colors.webDev
  },
];

export default projectsData;
