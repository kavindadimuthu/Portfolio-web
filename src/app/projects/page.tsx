import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

