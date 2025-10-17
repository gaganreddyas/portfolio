import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Github } from 'lucide-react';
import { mockData } from '../../data/mockData.jsx';
import Card from '../ui/Card';
import SkeletonCard from '../ui/SkeletonCard';
import AdCard from '../ui/AdCard.jsx';

const Section = ({ id, children, className = '' }) => (<section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>);
const SectionTitle = ({ children }) => (<motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>);
const AllProjectsSection = () => {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const categories = ['All', 'Frontend', 'Cloud', 'Fullstack'];
    useEffect(() => { const timer = setTimeout(() => setIsLoading(false), 1000); return () => clearTimeout(timer); }, []);
    const filteredProjects = useMemo(() => mockData.allProjects.filter(p => {
        const matchesCategory = filter === 'All' || p.category === filter;
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    }), [filter, searchTerm]);
    const [visibleCount, setVisibleCount] = useState(4);
    const increment = 2;
    useEffect(() => { setVisibleCount(4); }, [filter, searchTerm]);
    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const canShowMore = visibleCount < filteredProjects.length;
    return (
        <Section id="all-projects" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/70">
            <SectionTitle>More Projects</SectionTitle>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <div className="flex flex-wrap justify-center gap-2 bg-slate-200 dark:bg-slate-800 p-2 rounded-lg">{categories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${filter === cat ? 'bg-white dark:bg-slate-700 text-blue-500 shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}>{cat}</button>)}</div>
                <div className="relative w-full md:w-auto"><input type="text" placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"/><Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /></div>
            </div>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {isLoading ? (Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)) : (
                        visibleProjects.map((project, i) => (
                            <motion.div key={project.title + i} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} whileHover={{ y: -5 }}>
                                <Card className="h-full flex flex-col overflow-hidden group">
                                    <div className="overflow-hidden"><img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" /></div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h4>
                                        <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{project.desc}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">{project.tech.slice(0, 3).map(t => <span key={t} className="text-xs font-medium bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">{t}</span>)}</div>
                                        <div className="mt-6 flex flex-wrap gap-3">
                                            <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-500 dark:text-blue-400 border-2 border-blue-500 dark:border-blue-400 px-4 py-1.5 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><span>Live Demo</span><ArrowRight className="w-4 h-4" /></motion.a>
                                            <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 border-2 border-slate-400 dark:border-slate-500 px-4 py-1.5 rounded-full hover:bg-slate-600 hover:text-white dark:hover:bg-slate-500 dark:hover:text-white transition-colors duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><span>GitHub</span><Github className="w-4 h-4" /></motion.a>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
                {canShowMore && (
                  <AdCard>
                    More projects available. Click "Show more" to load additional items.
                  </AdCard>
                )}
            </motion.div>
            {canShowMore && (
              <div className="mt-8 text-center">
                <button onClick={() => setVisibleCount(Math.min(visibleCount + increment, filteredProjects.length))} className="px-6 py-2 text-sm font-semibold rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition">
                  Show more
                </button>
              </div>
            )}
        </Section>
    );
};
export default AllProjectsSection;