import React from 'react'
import './CSS/Contact.css'
// import call-img from './Images/phone-call.png'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='contact-grid'>
        {/* <a href=""><img height="100px" width="100px" src={call-img} alt="Call-img" />Call : +91 8015499736</a> */}
        <a href=""><img height="100px" width="100px" src="/Images/communication.png" alt="Email-img" />Email : karuppusamysivanandam@gmail.com</a>
        <a href=""><img height="100px" width="100px" src="/Images/whatsapp.png" alt="Whatsapp-img" />Whatsapp : +91 8754099736</a>
        <a href=""><img height="100px" width="100px" src="/Images/linkedin.png" alt="LinkedIn-img" />LinkedIn</a>
        <a href=""><img height="100px" width="100px" src="/Images/github.png" alt="GitHub-img" />GitHub</a>
        <a href=""><img height="100px" width="100px" src="/Images/facebook.png" alt="FaceBook-img" />FaceBook</a>
        <a href=""><img height="100px" width="100px" src="/Images/instagram.png" alt="Instagram-img" />Instagram</a>
      </div>
    </div>
  )
}

export default Contact
