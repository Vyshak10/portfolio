'use client'

import { motion } from '@/components/Motion';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer Intern",
      company: "Xbox.ai",
      period: "May 2024 – July 2024",
      location: "Onsite",
      description: "Developed a comprehensive cross-platform application using Flutter to connect startups with investors through detailed, interactive profiles. Integrated PHP (Laravel) backend with MySQL database and deployed via cPanel for scalable access.",
    }
  ];

  const education = {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Cochin University of Science and Technology",
    period: "2022 - Present",
    location: "Kerala, India",
  };

  const TimelineItem = ({ item, isEducation = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-12 pb-12 border-l-2 border-blue-200 dark:border-gray-700"
    >
      <div className="absolute -left-4 top-1.5 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white">
          {isEducation ? <GraduationCap size={16} /> : <Building size={16} />}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <div className="flex flex-wrap justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title || item.degree}</h3>
            <h4 className="text-lg font-semibold text-blue-500 mb-2">{item.company || item.institution}</h4>
          </div>
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center mb-1">
              <Calendar size={14} className="mr-2" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-2" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>
        {item.description && <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my professional experience and academic background.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pl-4">Work Experience</h3>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} item={exp} />
          ))}

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-16 mb-8 pl-4">Education</h3>
          <TimelineItem item={education} isEducation />
        </div>
      </div>
    </section>
  );
};

export default Experience;