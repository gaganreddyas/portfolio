import React from 'react';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { mockData } from '../../data/mockData.jsx';

const Footer = () => {
    const scrollTo = useScrollTo();
    return (
        <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center relative">
                <button onClick={() => scrollTo('hero')} className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:-translate-y-1"><ChevronUp size={24} /></button>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href={mockData.personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-300"><Linkedin size={24} /></a>
                    <a href={mockData.personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-300"><Github size={24} /></a>
                    <a href={`mailto:${mockData.personalInfo.email}`} className="text-slate-500 hover:text-blue-500 transition-colors duration-300"><Mail size={24} /></a>
                </div>
                <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Gagan Reddy A S. All Rights Reserved.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Made with ❤️ in India</p>
            </div>
        </footer>
    );
};
export default Footer;