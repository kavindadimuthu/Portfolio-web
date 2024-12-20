import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Healthcare Management System',
      description: 'A comprehensive healthcare management system developed using PHP and MySQL, with features for patient records, appointment scheduling, and billing.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time chat application built with React and Socket.io, allowing users to create rooms and exchange messages instantly.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Express'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-600 text-sm rounded-full px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

