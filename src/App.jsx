import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext.jsx';

// Import Layout Components
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// Import Section Components
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import LearningSection from './components/sections/LearningSection.jsx';
import FeaturedProjectsSection from './components/sections/FeaturedProjectsSection.jsx';
import AllProjectsSection from './components/sections/AllProjectsSection.jsx';
import BlogSection from './components/sections/BlogSection.jsx';
import ExperienceSection from './components/sections/ExperienceSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-sans antialiased">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />
        <Header />
        <main className="pt-20">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <LearningSection />
          <FeaturedProjectsSection />
          <AllProjectsSection />
          <BlogSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}