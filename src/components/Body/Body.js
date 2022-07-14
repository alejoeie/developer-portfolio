import React from 'react'
import Projects from '../Projects/Projects';
import './body.css';
function Body() {
  return (
    <section className='description'>
        <div className='left-section'>
            <h2 className='section-title'>Hi. I am Alejandro. I am a Web Developer.<br /></h2>
                
            <p className='section-text'>I am passionate about being able to improve lives of those around me. Contact me if you are ready to bring your company to the next-level in quality and technological advances.</p>
            <button className='contact-btn'><span className='click-btn'>Let's do IT!</span></button>
        </div>
        
    </section>
  )
}

export default Body