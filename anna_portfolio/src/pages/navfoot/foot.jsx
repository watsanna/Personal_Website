import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/10 text-white py-6 flex flex-col items-center justify-center">
      
      
      <div className="flex justify-center mb-8">
    <a href="mailto:watsannas@gmail.com?subject=Message from Website" className="btn">
    Message Me
    </a>
  </div>


     
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://www.linkedin.com/in/watsanna/" className="text-purple-500 text-6xl md:text-4xl lg:text-3xl hover:text-orange-600 transition duration-300" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/lijahara/" className="text-purple-500 text-6xl md:text-4xl lg:text-3xl hover:text-orange-600 transition duration-300" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/watsanna?tab=repositories" className="text-purple-500 text-6xl md:text-4xl lg:text-3xl hover:text-orange-600 transition duration-300" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

    
      <p className="text-xs font-light mt-4">&copy; 2024 Annaliese Watson. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
