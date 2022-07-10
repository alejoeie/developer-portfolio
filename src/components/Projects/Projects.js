import React from 'react'
import {projects} from '../../constants/Constants';
import './projects.css';
function Projects() {
  return (
    <div className='projects-section'>

    <div className='section-divider'/>
    <h2 className='section-project'>Projects</h2>
    <section className='grid-container'>{projects.map(({id, image, title, description, tags, source, visit}) => (
    <div className='blog-card' key={id}>
        <img className="content" src={image} alt="" /> 
        <div className='title-content'>
            <h3 className='header-three'>{title}</h3>
            <hr />
        </div>
        <p className='card-info'>{description}</p>
        <div>
        <div className='title-content'>Stack</div>
        <ul className='taglist'>{tags.map((tag, i) => (
                <li className='tag' key={i}>{tag}</li>
              ))}</ul>
        </div>

        <ul className='utility-list'>
            <a className='external' href={visit}>Code</a>
            <a className='external' href={source}>Source</a>
        </ul>
    </div>))}</section>
    
    </div>
  )
}

export default Projects