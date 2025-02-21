import React from 'react'
import './CSS/Home.css'
const Home = () => {
  return (
    <div className='Home-container'>
      <div className='About-container'>
        <h1>About</h1>
        <p>I am an enthusiastic Computer Science Engineering Student with a passion for coding and problem solving. I am Skilled in Automation in Uipath,Data Analysis and Software Development.</p>
      </div>
      <div className='About-container'>
        <h1>Education</h1>
        <h4>B.E (Computer Science and Engineering) | St.Joseph's Institute Of Technology,Chennai</h4>
        <h6>CGPA : 8.59</h6>
        <h4>SSLC | Government Higher Secondary School,Madurai</h4>
        <h6>Grade : 84.6 %</h6>
        <h4>HSC | Government Higher Secondary School,Madurai</h4>
        <h6>Grade : 84.5 %</h6>
      </div>
    </div>
  )
}

export default Home
