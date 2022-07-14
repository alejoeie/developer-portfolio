import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Body from '../Body/Body';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
function Navigator() {
    return (
      <div>
        <Routes>
            <Route path="/contact" element={<Contact />} exact />
            <Route path="/" element={<Body />} exact />
        </Routes>
      </div>
  )
}

export default Navigator
