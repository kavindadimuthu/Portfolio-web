import React from 'react';
import { FaReact, FaNodeJs, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiOpengl, SiThreedotjs } from 'react-icons/si';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'PHP', icon: <FaPhp className="text-purple-400" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'OpenGL', icon: <SiOpengl className="text-red-500" /> },
    { name: 'Three.js', icon: <SiThreedotjs className="text-white" /> },
    { name: 'C', icon: <FaDatabase className="text-gray-400" /> },
  ];

  return (
    <section id="skills" className="bg-black min-h-screen flex items-center py-20 section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-900 rounded-[10px] p-6 transition-transform duration-300 hover:scale-105">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

