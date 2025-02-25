import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CSS/Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className="Skills-container">
      <motion.div
        className="Skill-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1>Skills</h1>
        <ul>
          <li>Java</li>
          <li>SQL</li>
          <li>C</li>
          <li>MongoDB</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </motion.div>

      <motion.div
        className="Tools-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>Tools</h1>
        <ul>
          <li>UiPath</li>
          <li>SnowFlake</li>
          <li>Git</li>
          <li>Vercel</li>
          <li>Render</li>
          <li>VS Code</li>
          <li>Jupyter Notebook</li>
          <li>Eclipse</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Skills;
