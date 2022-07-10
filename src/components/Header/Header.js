import React from 'react'
// import {Link} from 'react-router-dom'
import './header.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CgFormatColor } from "react-icons/cg";

function Header() {
  return (
    <div className='header-comp'>
        <div className='logo-section'>
            <a href='/' style={{ display: "flex", alignItems:"center", color: "white", marginBottom: "50px", marginLeft: "30px"}}>
                <span className='alejandro'><CgFormatColor size="3rem" /></span>
            </a>
        </div>
        <div className='items'>
            <li>
                <a className='items-a' href='/'>About.</a>
            </li>
            <li>
                <a className='items-a' href='/'>Projects.</a>
            </li>
            <li>
                <a className='items-a' href='/'>Contact Me.</a>
            </li>
        </div>

        <div className='social-media'>
            <a className='social-icon' href='/'>
                <AiFillGithub size="3rem" />
            </a>
            <a className='social-icon' href='/'>
                <AiFillInstagram size="3rem" />
            </a>
            <a className='social-icon' href='/'>
                <AiFillLinkedin size="3rem" />
            </a>
        </div>
        
        
    </div>
  )
}

export default Header