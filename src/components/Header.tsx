'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-black py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Kavinda Dewmith</Link>
        <nav>
          <ul className="flex space-x-4">
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
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/kavindadimuthu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/kavinda-dewmith-1747b8268" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

