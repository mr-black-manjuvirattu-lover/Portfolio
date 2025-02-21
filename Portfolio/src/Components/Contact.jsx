import React from 'react'
import './CSS/Contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='contact-grid'>
        <a href=""><img height="100px" width="100px" src="/Images/phone-call.png" alt="Call-icon" />Call : +91 8015499736</a>
        <a href=""><img height="100px" width="100px" src="/Images/communication.png" alt="Email-icon" />Email : karuppusamysivanandam@gmail.com</a>
        <a href=""><img height="100px" width="100px" src="/Images/whatsapp.png" alt="Whatsapp-icon" />Whatsapp : +91 8754099736</a>
        <a href=""><img height="100px" width="100px" src="/Images/linkedin.png" alt="LinkedIn-icon" />LinkedIn</a>
        <a href=""><img height="100px" width="100px" src="/Images/github.png" alt="GitHub-icon" />GitHub</a>
        <a href=""><img height="100px" width="100px" src="/Images/facebook.png" alt="FaceBook-icon" />FaceBook</a>
        <a href=""><img height="100px" width="100px" src="/Images/instagram.png" alt="Instagram-icon" />Instagram</a>
      </div>
    </div>
  )
}

export default Contact
