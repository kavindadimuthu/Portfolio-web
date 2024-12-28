import React from 'react';
import { projects } from '../../../data/projects';
import ProjectDetails from '../../../components/ProjectDetails';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: { id: string };
}

const ProjectPage: React.FC<PageProps> = ({ params }) => {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;

