'use client'

import { motion } from '@/components/Motion';
import { Award, Calendar, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Python Certification",
      issuer: "NIELIT Calicut", 
      year: "2024",
      description: "Comprehensive Python programming certification covering advanced concepts, data structures, and object-oriented programming.",
    },
    {
      name: "Data Science Certification",
      issuer: "ELEWAYTE",
      year: "2024", 
      description: "Complete data science program covering machine learning, statistical analysis, and data visualization.",
    },
    {
      name: "Full Stack Web Development",
      issuer: "SKOLAR",
      year: "2024",
      description: "Comprehensive full-stack development certification covering modern web technologies, frontend and backend frameworks.",
    }
  ];

  const achievements = [
    {
      title: "Excellence in Data Analytics",
      description: "Demonstrated proficiency in Power BI dashboard creation and data analysis.",
    },
    {
      title: "Flutter Development Expertise", 
      description: "Successfully completed cross-platform mobile application projects.",
    },
    {
      title: "Machine Learning Innovation",
      description: "Developed healthcare prediction models with high accuracy.",
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my professional credentials and accomplishments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="w-8 h-8 mr-4 text-blue-500" />
              Professional Certifications
            </h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                      <h5 className="text-md font-semibold text-blue-500">{cert.issuer}</h5>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-2" />
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Star className="w-8 h-8 mr-4 text-blue-500" />
              Key Achievements
            </h3>
            <div className="space-y-8">
              {achievements.map((ach, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ach.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{ach.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;