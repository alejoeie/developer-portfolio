import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className='login-box'>
      <h2>Contact Me</h2>
      <form>
        <div className="forms-section">
          <input type="text" name="" required=""/>
          <label>Name</label>
        </div>
        <div className="forms-section">
          <input type="text" name="" required=""/>
          <label>Email</label>
        </div>
        <div className="forms-section">
          <input type="text" name="" required=""/>
          <label>Phone</label>
        </div>
        <div className="forms-section">
          <input type="text" name="" required=""/>
          <label>Message</label>
        </div>
        <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  )
}

export default Contact