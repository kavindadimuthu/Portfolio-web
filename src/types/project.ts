export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges: string;
  futureImprovements: string;
}

