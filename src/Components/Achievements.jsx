import React from 'react'
import './CSS/Achievements.css'
const Achievements = () => {
  return (
    <div className='Achievements-container'>
      <h1>Achievements</h1>
      <div className='Achievement'>
          <h1>IEEE Yesist12 2024</h1>
          <ul>
            <li>Prize : 2nd</li>
            <li>Place : Study World College of Engineering, Coimbatore</li>
            <li>Description : Abstract Submission competition and Finalist for the Grand Finale Yesist12 2024</li>
          </ul>
      </div>
      <div className='Achievement'>
          <h1>Hack-A-Bot 2024</h1>
          <ul>
            <li>Prize : 3rd</li>
            <li>Place : St.Joseph's Institute Of Technology, Chennai</li>
            <li>Description :Hackathon so, we developed a Student Feedback sentiment Analysis using Uipath</li>
          </ul>
      </div>
    </div>
  )
}

export default Achievements 
