import './App.css';
import Navbar from './pages/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Certifications from "./pages/certifications"
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Freelance from "./pages/freelance"
import Links from "./pages/links"
import Personal from "./pages/personal"



function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/freelance' element={<Freelance />} />
          <Route path='/links' element={<Links />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
