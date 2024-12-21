// import React from 'react';
// import Image from 'next/image';
// import { Project } from '../types/project';

// interface ProjectDetailsProps {
//   project: Project;
// }

// const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
//   return (
//     <div className="bg-gray-900 min-h-screen py-20">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <div>
//             <p className="text-lg mb-4">{project.description}</p>
//             <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
//             <ul className="list-disc list-inside mb-4">
//               {project.technologies.map((tech, index) => (
//                 <li key={index}>{tech}</li>
//               ))}
//             </ul>
//             <h2 className="text-2xl font-bold mb-2">Key Features</h2>
//             <ul className="list-disc list-inside mb-4">
//               {project.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             {project.liveUrl && (
//               <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn mr-4">
//                 View Live
//               </a>
//             )}
//             {project.githubUrl && (
//               <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
//                 View on GitHub
//               </a>
//             )}
//           </div>
//           <div>
//             <div className="grid grid-cols-2 gap-4">
//               {project.images.map((image, index) => (
//                 <div key={index} className="relative h-48">
//                   <Image src={image} alt={`${project.title} screenshot ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <h2 className="text-2xl font-bold mb-4">Project Details</h2>
//         <p className="text-lg mb-4">{project.longDescription}</p>
//         <h2 className="text-2xl font-bold mb-4">Challenges and Solutions</h2>
//         <p className="text-lg mb-4">{project.challenges}</p>
//         <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
//         <p className="text-lg">{project.futureImprovements}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

