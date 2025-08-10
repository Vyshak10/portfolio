"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white px-6 md:px-20">
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-4 tracking-wide"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg mb-8 max-w-lg leading-relaxed"
        >
          I’m Vyshak Krishna, a passionate developer and data analyst dedicated to crafting elegant and efficient solutions through code and data.
        </motion.p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          View My Work
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
      >
        <img
          src="https://avatars.githubusercontent.com/Vyshak10" // Replace with your actual photo URL or local path
          alt="Vyshak Krishna"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-xl object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
