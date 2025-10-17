import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useScrollTo } from '../../hooks/useScrollTo';
import { useActiveSection } from '../../hooks/useActiveSection';
import MobileSidebar from '../ui/MobileSidebar';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const scrollTo = useScrollTo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ["About", "Skills", "Learning", "Projects", "Blog", "Experience", "Contact"];
  const activeSection = useActiveSection(navLinks.map(l => l.toLowerCase()));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => { 
    scrollTo(id.toLowerCase()); 
    setIsMobileMenuOpen(false); 
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('hero')} whileHover={{ scale: 1.05 }}>
              <span className="text-2xl font-bold text-slate-800 dark:text-white">Gagan Reddy A S</span>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => {
                  const isActive = activeSection === link.toLowerCase();
                  return (
                      <a key={link} onClick={() => handleNavClick(link)} className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 cursor-pointer ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400'}`}>
                          {link}
                          {isActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" layoutId="active-nav-link" />}
                      </a>
                  )
              })}
            </nav>
            <div className="flex items-center">
               <button onClick={toggleTheme} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
               </button>
               <div className="md:hidden ml-4">
                  <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-md text-slate-600 dark:text-slate-300"><Menu size={24} /></button>
               </div>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks}
        handleNavClick={handleNavClick}
      />
    </>
  );
};
export default Header;