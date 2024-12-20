import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-900 min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects" className="btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

