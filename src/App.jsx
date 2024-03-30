import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos/dist/aos.js';

//Components
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Service from './components/services/Service';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Divider from './components/divider/Divider';
import Contact from './components/contact/Contact';


function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out' });
  }, []);

  return (
    <Router>
      <Navbar />
      <Home />
      <div id='about'>
        <About />
      </div>
      <Divider />
      <div id='services'>
        <Service />
      </div>
      <Experience />
      <div id='portfolio'>
        <Projects />
      </div>
      <Contact />
    </Router>
  );
}

export default App
