import React from 'react';
import { projects } from '../../../data/projects';
import ProjectDetails from '../../../components/ProjectDetails';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage: React.FC<ProjectPageProps> = async ({ params }) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;