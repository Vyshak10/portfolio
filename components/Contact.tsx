'use client'

import { motion } from '@/components/Motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:vyshak9333@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: <Mail />, title: "Email", value: "vyshak9333@gmail.com", link: "mailto:vyshak9333@gmail.com" },
    { icon: <Phone />, title: "Phone", value: "+91 9995515763", link: "tel:+919995515763" },
    { icon: <MapPin />, title: "Location", value: "Kozhikode, India", link: null },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg h-full"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                    <a href="https://github.com/Vyshak10" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <Github size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/vyshak-krishna-708a64302/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                        <Linkedin size={28} />
                    </a>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600 transition resize-none" placeholder="Your Message"></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;