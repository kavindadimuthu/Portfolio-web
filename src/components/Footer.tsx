import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Kavinda Dewmith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

