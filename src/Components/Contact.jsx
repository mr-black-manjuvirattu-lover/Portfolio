import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./CSS/Contact.css";
import emailIcon from "../assets/Images/communication.png";
import whatsappIcon from "../assets/Images/whatsapp.png";
import linkedinIcon from "../assets/Images/linkedin.png";
import githubIcon from "../assets/Images/github.png";
import facebookIcon from "../assets/Images/facebook.png";
import instagramIcon from "../assets/Images/instagram.png";

const contacts = [
  { img: emailIcon, text: "karuppusamysivanandam@gmail.com" },
  { img: whatsappIcon, text: "+91 8754099736" },
  { img: linkedinIcon, text: "LinkedIn", link: "https://www.linkedin.com/in/karuppusamy-s-33077825a/" },
  { img: githubIcon, text: "GitHub", link: "https://github.com/mr-black-manjuvirattu-lover/" },
  { img: facebookIcon, text: "FaceBook", link: "https://www.facebook.com/share/167R6Mbaom/" },
  { img: instagramIcon, text: "Instagram", link: "https://www.instagram.com/mr_black_manjuvirattu_lover" }
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className="contact-container">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h1>

      <motion.div className="contact-grid">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={contact.img} alt={contact.text} />
            {contact.text}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
