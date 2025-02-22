import React from "react";
import { motion } from "framer-motion";
import "./CSS/Projects.css";

const projects = [
  {
    title: "Certificate Generator",
    link: "#",
    description:
      "A tool to generate certificates automatically based on predefined templates.",
  },
  {
    title: "Student Feedback Sentiment Analysis",
    link: "#",
    description:
      "Uses NLP techniques to analyze student feedback and provide sentiment analysis.",
  },
  {
    title: "Automated Temperature Retrieval and Recording",
    link: "#",
    description:
      "Automates temperature data retrieval from IoT devices and logs it for analysis.",
  },
  {
    title: "Translator Using UiPath",
    link: "#",
    description:
      "An automated translation tool leveraging UiPath's capabilities for multilingual support.",
  },
  {
    title: "Students Details Filter",
    link: "#",
    description:
      "Filters and categorizes student data efficiently based on various parameters.",
  },
];

const Projects = () => {
  return (
    <div className="Projects-container">
      <h1>Projects</h1>
      <motion.div
        className="Projects-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="Project-Container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>
              {project.title} |{" "}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
