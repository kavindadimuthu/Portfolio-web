import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="max-w-6xl mt-4 mx-auto bg-gray-800 rounded-xl shadow-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-lg mb-4">
                I'm a passionate and versatile developer and designer, eager to craft impactful solutions and engaging user experiences. My journey in technology spans diverse fields, including web development, graphics programming, and software design.
              </p>
              <p className="text-lg mb-4">
                Whether it's creating sleek, responsive websites using React and Tailwind CSS, building backend systems with Node.js, or designing OpenGL visualizations, I thrive on bringing ideas to life.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>Develop full-stack web applications</li>
                <li>Create responsive and intuitive user interfaces</li>
                <li>Design and implement RESTful APIs</li>
                <li>Optimize database performance</li>
                <li>Craft 3D visualizations and graphics</li>
                <li>Collaborate with cross-functional teams</li>
              </ul>
            </div>
          </div>
          {/* <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-lg">
              I believe in creating systems that bridge people and technology. My approach combines creativity with functionality, always striving for clean, efficient, and maintainable code. I'm constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;

