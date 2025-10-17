import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';
import { useScrollTo } from '../../hooks/useScrollTo';
import { mockData } from '../../data/mockData.jsx';
import Button from '../ui/Button';

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);
const HeroSection = () => {
  const scrollTo = useScrollTo();
  const { name, title, valueProposition, socials, resumeUrl } = mockData.personalInfo;
  return (
    <Section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900/20 -z-10"></div>
      <div className="text-center">
        <motion.h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 dark:text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>{name}</motion.h1>
        <motion.h2 className="text-2xl md:text-3xl mt-4 text-blue-600 dark:text-blue-400 font-semibold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>{title}</motion.h2>
        <motion.p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>{valueProposition}</motion.p>
        <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Button onClick={() => scrollTo('projects')}>View My Work</Button>
          <Button onClick={() => window.open(resumeUrl, '_blank')} variant="secondary">Download Resume</Button>
        </motion.div>
        <motion.div className="mt-12 flex justify-center space-x-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-300"><Linkedin size={28} /></a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors duration-300"><Github size={28} /></a>
          <a href={`mailto:${mockData.personalInfo.email}`} className="text-slate-500 hover:text-blue-500 transition-colors duration-300"><Mail size={28} /></a>
        </motion.div>
      </div>
    </Section>
  );
};
export default HeroSection;