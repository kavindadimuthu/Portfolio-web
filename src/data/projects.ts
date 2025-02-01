import { Project } from '../types/project';

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Omilga Tyreshop Frontend",
    "description": "Frontend for the Omilga Tyreshop e-commerce platform, built with React and Vite.",
    "longDescription": "This project is the frontend component of the Omilga Tyreshop e-commerce platform. It is built using React and Vite to provide a fast and responsive user interface for customers looking to purchase tyres online. The frontend interacts with the backend to display products and handle user authentication.",
    "technologies": [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "JWT for authentication"
    ],
    "features": [
      "Display available tyres with detailed information",
      "Showcase services provided by the tyreshop",
      "User authentication (login and signup)",
      "User profile management",
      "Admin dashboard for managing products",
      "Responsive design for a seamless experience on all devices"
    ],
    "images": [
      "/projects/omilga-screenshots/homepage-hero.png",
      "/projects/omilga-screenshots/products-catalogue.png",
      "/projects/omilga-screenshots/services.png",
      "/projects/omilga-screenshots/admin-dashboard.png",
      "/projects/omilga-screenshots/profile.png"
    ],
    "liveUrl": "https://omilga-tyreshop.vercel.app",
    "githubUrl": "https://github.com/kavindadimuthu/Omilga-Tyreshop-Frontend",
    "challenges": "One of the main challenges was ensuring a smooth and fast user experience with real-time updates from the backend. This was solved by optimizing the React components and using Vite for fast development and build processes.",
    "futureImprovements": "Future plans include adding ordering and checkout functionalities, implementing a shopping cart, adding more advanced filtering options, improving the user interface, and integrating more payment gateways."
  },
  {
    id: 2,
    title: '3D Solar System Project',
    description: 'A 3D project demonstrating the movement of the sun and all planets within our solar system using the ThreeJs library.',
    longDescription: 'This project showcases a 3D simulation of our solar system, illustrating the movement of the sun and planets using the ThreeJs library. The visual representation helps in understanding the dynamics of celestial bodies in a simplified and interactive manner. It emphasizes the use of WebGL through ThreeJs to create realistic and engaging 3D graphics.',
    technologies: ['JavaScript', 'Three.js', 'HTML'],
    features: [
      'Realistic 3D rendering of the solar system',
      'Interactive controls to explore the solar system',
      'Accurate representation of planetary orbits',
      'Lighting effects to simulate the sun\'s illumination',
      'Scalable design to adapt to different screen sizes',
      'Smooth animations to depict planetary movements'
    ],
    images: [
      '/projects/solar-system.png',
    ],
    liveUrl: 'https://kavindadimuthu.github.io/3D-Solar-system/',
    githubUrl: 'https://github.com/kavindadimuthu/3D-Solar-system',
    challenges: 'One of the main challenges was achieving smooth animations and interactions within the 3D environment, which was resolved by optimizing the ThreeJs configurations and using efficient rendering techniques.',
    futureImprovements: 'Future plans include adding more celestial bodies such as moons and asteroids, improving the realism of textures and lighting, and developing an educational mode with detailed information about each planet.'
  },
  {
    "id": 3,
    "title": "3D Audio Visualizer",
    "description": "A 3D audio visualizer created using the Three.js library and dat.gui.",
    "longDescription": "This project is a 3D audio visualizer that leverages the Three.js library for rendering 3D graphics and dat.gui for user interface controls. It provides an immersive visual representation of audio input, creating dynamic and engaging visual effects in response to sound.",
    "technologies": ["HTML", "JavaScript", "Three.js", "dat.gui"],
    "features": [
      "Real-time audio visualization",
      "Interactive 3D graphics",
      "Customizable visual effects",
      "User interface for adjusting visualization parameters",
      "Responsive design for various screen sizes"
    ],
    "images": [
      "/projects/audio-visualizer.png",
    ],
    "liveUrl": "https://kavindadimuthu.github.io/3D-Audio-visualizer/",
    "githubUrl": "https://github.com/kavindadimuthu/3D-Audio-visualizer",
    "challenges": "One of the main challenges was optimizing the performance of the 3D rendering to ensure smooth visualizations without lag, even with high audio frequencies. This was addressed by optimizing the Three.js rendering pipeline and using efficient algorithms for audio processing.",
    "futureImprovements": "Future plans include adding support for more audio formats, implementing more complex visual effects, and integrating with popular music streaming services to visualize live audio streams."
  },
  {
    "id": 4,
    "title": "2D Village Scene OpenGL Project",
    "description": "A 2D village scene created using the OpenGL library and C language.",
    "longDescription": "This project showcases a 2D village scene developed using OpenGL and C. The scene includes various elements such as houses, trees, and a river, demonstrating the capabilities of OpenGL for rendering 2D graphics. The project aims to provide an immersive visual experience and a foundational understanding of computer graphics programming.",
    "technologies": ["OpenGL", "C", "C++"],
    "features": [
      "2D rendering of village elements",
      "Use of OpenGL for graphics rendering",
      "Scene composition with houses, trees, and river",
      "Interactive elements and animations",
      "Optimized performance for smooth rendering"
    ],
    "images": [
      "/projects/2d-village-scene.png",
    ],
    "liveUrl": "https://example.com/village_scene_demo",
    "githubUrl": "https://github.com/kavindadimuthu/2D-VillageScene-OpenGLProject",
    "challenges": "One of the main challenges was optimizing the performance of the scene to ensure smooth rendering. This was achieved by implementing efficient algorithms and minimizing the use of computational resources.",
    "futureImprovements": "Future plans include adding more interactive elements, enhancing the visual details, and implementing a day-night cycle to make the scene more dynamic."
  },
];

