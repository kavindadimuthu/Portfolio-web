'use client'

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-black min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-12 rounded-xl shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-700 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-700 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            ></textarea>
          </div>
          <button type="submit" className="btn w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

