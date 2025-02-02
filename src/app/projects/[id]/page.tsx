import React from 'react';
import { projects } from '../../../data/projects';
import ProjectDetails from '../../../components/ProjectDetails';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProjectPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetails project={project} />;
};

export default ProjectPage;

