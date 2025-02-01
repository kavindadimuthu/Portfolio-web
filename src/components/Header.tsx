'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black py-4 fixed w-full z-50 h-20"> {/* Added h-20 class */}
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        <div className='flex items-center space-x-4'>
          <img src="/android-chrome-192x192.png" alt="" width="50px"/>
          <Link href="/" className="text-2xl font-bold">Kavinda Dewmith</Link>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <nav className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent pb-4 lg:pb-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center lg:mr-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-full transition-colors duration-300 ${
                    activeSection === section ? 'bg-blue-900 text-white' : 'hover:text-blue-500'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 mt-4 lg:mt-0 justify-center lg:justify-start">
            <a href="https://github.com/kavindadimuthu" target="_blank" className='m-auto' rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/kavinda-dewmith-1747b8268" className='m-auto' target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

