import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import BackgroundAnimation from './BackGroundAnimation/BackGroundAnimation';
function App() {
  return (
    <div>

      <Header />
      <Body />
      {/* <BackgroundAnimation /> */}
      <Projects />
      <Skills />
      
    </div>
  );
}

export default App;
