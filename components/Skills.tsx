'use client'

import { motion } from '@/components/Motion';
import { Smartphone, Code, Database, BarChart3, Brain, GitMerge } from 'lucide-react';

const Skills = () => {
  const skillCategories = {
    "Programming Languages": { 
      icon: <Code className="w-8 h-8" />, 
      skills: ["Dart (Flutter)", "Python", "JavaScript", "Java", "PHP", "HTML", "CSS"]
    },
    "Frontend Development": { 
      icon: <Smartphone className="w-8 h-8" />, 
      skills: ["React.js", "Flutter", "Material-UI", "React Router", "HTML5", "CSS3", "Responsive Design"]
    },
    "Backend & Database": { 
      icon: <Database className="w-8 h-8" />, 
      skills: ["Supabase", "PostgreSQL", "MySQL", "PHP (Laravel)", "Node.js", "Firebase", "REST APIs"]
    },
    "Data Analysis & BI": { 
      icon: <BarChart3 className="w-8 h-8" />, 
      skills: ["Python (Pandas, NumPy)", "SQL", "Power BI", "MS Excel", "Data Visualization", "Statistical Analysis", "DAX"]
    },
    "Machine Learning & AI": { 
      icon: <Brain className="w-8 h-8" />, 
      skills: ["TensorFlow", "Keras", "Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Neural Networks", "Model Evaluation"]
    },
    "Tools & Technologies": { 
      icon: <GitMerge className="w-8 h-8" />, 
      skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "cPanel", "Vercel", "Power Query"]
    }
  }

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across development and data analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, {icon, skills}], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-full mr-6">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills