import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CSS/Achievements.css";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className="Achievements-container">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Achievements
      </motion.h1>

      <motion.div
        className="Achievement"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1>IEEE Yesist12 2024</h1>
        <ul>
          <li><strong>Prize:</strong> 2nd</li>
          <li><strong>Place:</strong> Study World College of Engineering, Coimbatore</li>
          <li>
            <strong>Description:</strong> Abstract Submission competition and Finalist for the Grand Finale Yesist12 2024
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="Achievement"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>Hack-A-Bot 2024</h1>
        <ul>
          <li><strong>Prize:</strong> 3rd</li>
          <li><strong>Place:</strong> St. Joseph's Institute Of Technology, Chennai</li>
          <li>
            <strong>Description:</strong> Hackathon where we developed a Student Feedback Sentiment Analysis using UiPath
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Achievements;
