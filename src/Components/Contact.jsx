import React from "react";
import { motion } from "framer-motion";
import "./CSS/Contact.css";
import emailIcon from "../assets/Images/communication.png";
import whatsappIcon from "../assets/Images/whatsapp.png";
import linkedinIcon from "../assets/Images/linkedin.png";
import githubIcon from "../assets/Images/github.png";
import facebookIcon from "../assets/Images/facebook.png";
import instagramIcon from "../assets/Images/instagram.png";

const contacts = [
  { img: emailIcon, text: "Email : karuppusamysivanandam@gmail.com" },
  { img: whatsappIcon, text: "Whatsapp : +91 8754099736" },
  { img: linkedinIcon, text: "LinkedIn", link: "https://www.linkedin.com/" },
  { img: githubIcon, text: "GitHub", link: "https://github.com/" },
  { img: facebookIcon, text: "FaceBook", link: "https://facebook.com/" },
  { img: instagramIcon, text: "Instagram", link: "https://instagram.com/" }
];

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
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
