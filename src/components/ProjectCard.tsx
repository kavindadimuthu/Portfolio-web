import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image
          src={project.images[0]}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-900 text-xs rounded-full px-3 py-1">
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.id}`} className="btn block text-center">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

