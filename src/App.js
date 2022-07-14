import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navigator from './components/Navigator/Navigator';
import BackgroundAnimation from './BackGroundAnimation/BackGroundAnimation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigator />
        {/* <Skills /> */}
        
      </div>
    </Router>
    
  );
}

export default App;
