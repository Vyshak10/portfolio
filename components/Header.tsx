'use client'

import { useState, useEffect } from 'react';
import { motion } from '@/components/Motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">Vyshak</a>
                    <nav className="hidden md:flex space-x-6">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white dark:bg-gray-900">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;