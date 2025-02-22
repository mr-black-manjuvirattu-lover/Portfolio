import React from "react";
import { motion } from "framer-motion";
import "./CSS/Home.css";
import profilePic from "../assets/Images/Profile.png"; 
import resumePDF from "../assets/Resume.pdf";
import resumeImg from "../assets/Images/resume.png"
const Home = () => {
  return (
    <div className="Home-container">
      {}
      <motion.div
        className="Profile-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profilePic} alt="Profile" className="Profile-img" />
        <h1>Karuppusamy Sivanandam</h1>
        <p>Computer Science Engineering Student | Automation & Development Enthusiast</p>
      </motion.div>

      {}
      <motion.div
        className="About-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>About</h1>
        <p>
          I am an enthusiastic Computer Science Engineering Student with a passion for coding
          and problem-solving. Skilled in UiPath Automation, Data Analysis, and Software Development.
        </p>
      </motion.div>

      {}
      <motion.div
        className="About-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1>Education</h1>
        <h4>B.E (Computer Science and Engineering) | St.Joseph's Institute Of Technology, Chennai</h4>
        <h6>CGPA: 8.59</h6>
        <h4>SSLC | Government Higher Secondary School, Madurai</h4>
        <h6>Grade: 84.6%</h6>
        <h4>HSC | Government Higher Secondary School, Madurai</h4>
        <h6>Grade: 84.5%</h6>
      </motion.div>

      {}
      <motion.a
        href={resumePDF}
        download="Karuppusamy_Resume.pdf"
        className="resume-button"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img src={resumeImg} alt="Download Resume" className="resume-icon" />
        Download Resume
      </motion.a>
    </div>
  );
};

export default Home;
