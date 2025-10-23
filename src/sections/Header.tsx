'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-3 flex justify-center items-center mt-10 z-50"
    >
      <motion.nav
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-md"
      >
        <a
          className={`nav-item ${activeSection === 'home' ? 'bg-white text-gray-900' : ''}`}
          href="#home"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Home
        </a>
        <a
          className={`nav-item ${activeSection === 'projects' ? 'bg-white text-gray-900' : ''}`}
          href="#projects"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
        >
          Projects
        </a>
        <a
          className={`nav-item ${activeSection === 'about' ? 'bg-white text-gray-900' : ''}`}
          href="#about"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a
          className={`nav-item ${activeSection === 'contact' ? 'bg-white text-gray-900' : ''}`}
          href="#contact"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
      </motion.nav>
    </motion.div>
  );
};