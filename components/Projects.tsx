'use client'

import { motion } from '@/components/Motion';
import { useState } from 'react';
import { ExternalLink, Github, Smartphone, BarChart3, Database, Brain, Globe, TrendingUp, Code } from 'lucide-react'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('development');

const developmentProjects = [
  {
    name: 'NEXT - Startup & Investor Ecosystem',
    icon: <Smartphone />,
    description: 'A powerful cross-platform Flutter app and Laravel backend connecting startups to investors.',
    status: 'Featured',
    features: [
      'Real-time startup-investor matching',
      'User-friendly onboarding & dashboard',
      'Admin management with secure API',
    ],
    technologies: ['Flutter', 'Laravel', 'MySQL', 'Firebase'],
    github: 'https://github.com/Vyshak10/next-flutter',
    demo: 'https://next-app-lake-nu.vercel.app/',
  },
  {
    name: 'SAIT Placement Portal',
    icon: <BarChart3 />,
    description: 'A recruitment platform for campus using React.js/Supabase.',
    status: 'Featured',
    features: [
      'Automated job matching & alerts',
      'Mock tests & resume management',
      'Admin analytics dashboard',
    ],
    technologies: ['React.js', 'Supabase', 'Tailwind'],
    github: 'https://github.com/Vyshak10/sait-placement-portal',
    demo: 'https://sait-placement-portal.vercel.app/',
  },
  // ... more dev projects
];

const dataProjects = [
  {
    name: 'Blinkit Sales Dashboard',
    icon: <BarChart3 />,
    description: "Power BI dashboard analyzing $1.2M retail data for Blinkit, India's top quick-commerce platform.",
    status: 'Power BI',
    features: [
      'Interactive sales drilldowns',
      'Segment performance breakdowns',
      'Key metrics: revenue, volume, rating',
    ],
    technologies: ['Power BI', 'DAX', 'Analytics'],
    github: 'https://github.com/Vyshak10/Blinkit-Sales-Dashboard---Power-BI',
    demo: '', // No public demo? Leave empty or use a screenshot URL
  },
  {
    name: 'Road Accident Analysis',
    icon: <Database />,
    description: 'Power BI visual analysis for UK road safety trends – high-risk areas, vehicle types, time comparisons.',
    status: 'Power BI',
    features: [
      'Geo-mapping with Bing Maps',
      'Trend analysis & time filters',
      'Urban vs rural segmentation',
    ],
    technologies: ['Power BI', 'DAX', 'Mapping'],
    github: 'https://github.com/Vyshak10/Road-Accident-Analysis',
    demo: '',
  },
  // ... more data/ML projects
];


  const projects = {
    development: developmentProjects,
    data: dataProjects,
  };

  const ProjectCard = ({ project, index }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-xl mr-4">
              {project.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{project.name}</h4>
              {project.status && (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  project.status === 'Featured' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                  project.status === 'Power BI' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                  project.status === 'Machine Learning' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}>
                  {project.status}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-grow">{project.description}</p>

        {project.features && (
          <div className="mb-5">
            <h6 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h6>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature: string, i: number) => (
                <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 mt-auto">
        <div className="mb-4">
          <h6 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Technologies:</h6>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium">{tech}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Github size={16} />
              Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my work in development, data analysis, and machine learning.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-xl">
            <button 
              onClick={() => setActiveTab('development')} 
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === 'development' ? 'bg-white dark:bg-gray-700 text-blue-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}>
              Development
            </button>
            <button 
              onClick={() => setActiveTab('data')} 
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === 'data' ? 'bg-white dark:bg-gray-700 text-blue-500' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}>
              Data & ML
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activeTab].map((project, index) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Vyshak10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            <Github size={20} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects