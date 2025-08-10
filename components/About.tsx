'use client'

import { motion } from '@/components/Motion'
import { BarChart3, Brain, Code, Database, Globe, GraduationCap, Smartphone, TrendingUp } from 'lucide-react'
import { expertise, personalInfo, PersonalInfoItem } from './../data'

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate developer and analyst combining technical expertise with creative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Dedicated Software Engineer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a B.Tech Information Technology student with expertise in Flutter and full-stack web development, 
              complemented by strong data analysis and machine learning capabilities. My experience spans cross-platform 
              mobile development, dynamic web solutions, and deriving actionable insights from complex datasets.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              With practical experience in building ML and deep learning models, I combine technical expertise with 
              an eye for user experience to create efficient, scalable solutions that drive informed decision-making. 
              My passion lies in developing innovative solutions and analyzing complex data to drive strategic decisions.
            </p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 border-t border-gray-200 dark:border-gray-700 pt-8">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-center py-2" >
                  <span className="text-gray-500 dark:text-gray-400 font-medium">{info.label}:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-semibold">{info.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-4">
                  <GraduationCap className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">B.Tech IT</p>
                </div>
                <div className="p-4">
                  <Globe className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Web Dev</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Full-Stack</p>
                </div>
                <div className="p-4">
                  <Database className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">Data Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Power BI, SQL</p>
                </div>
                <div className="p-4">
                  <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">ML</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">TensorFlow</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Areas of Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-full mb-6">
                  <item.icon className="w-8 h-8"/>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About