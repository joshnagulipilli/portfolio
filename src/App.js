
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import SkillsState from './components/Context/Skills/SkillsState';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <SkillsState>
    <Navbar/>
      <Home/>
     <About/>
      <Skills/>
      <Projects/>
      <Profiles/>
      <Contact/>
      </SkillsState>
    </div>
  );
}

export default App;
