import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-black min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-100"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Kavinda Dewmith</h1>
          <h2 className="text-3xl mb-8">Full Stack Developer & Designer</h2>
          <p className="text-xl mb-8">Crafting impactful solutions and engaging user experiences</p>
          <Link href="#contact" className="btn">
            Let&apos;s Connect
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/dp.jpg"
              alt="Kavinda Dewmith"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

