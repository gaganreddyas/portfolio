import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../../data/mockData.jsx';
import Button from '../ui/Button';
import Card from '../ui/Card';
import CaseStudyModal from '../ui/CaseStudyModal';

const Section = ({ id, children, className = '' }) => (<section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>);
const SectionTitle = ({ children }) => (<motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>);
const FeaturedProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [visibleCount, setVisibleCount] = useState(2);
    return (
        <>
            <Section id="projects" className="py-20 md:py-28">
                <SectionTitle>Featured Projects</SectionTitle>
                <div className="space-y-20">
                    {mockData.featuredProjects.slice(0, visibleCount).map((project, index) => (
                        <motion.div key={project.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
                            <div className={`md:order-${index % 2 === 0 ? '1' : '2'}`}>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h3>
                                <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {project.features.map(feature => <li key={feature} className="flex items-center gap-2 text-slate-600 dark:text-slate-300"><ArrowRight size={16} className="text-blue-500"/><span>{feature}</span></li>)}
                                </ul>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.techStack.map(tech => <span key={tech} className="bg-slate-200 dark:bg-slate-700 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>)}
                                </div>
                                <div className="mt-8 flex flex-wrap gap-4">
                                    <Button onClick={() => window.open(project.liveUrl, '_blank')}>View Live</Button>
                                    <Button onClick={() => setSelectedProject(project)} variant="secondary">View Case Study</Button>
                                </div>
                            </div>
                            <div className={`md:order-${index % 2 === 0 ? '2' : '1'}`}>
                                <Card className="overflow-hidden group"><img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"/></Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {visibleCount < mockData.featuredProjects.length && (
                  <div className="mt-12 text-center">
                    <button onClick={() => setVisibleCount(mockData.featuredProjects.length)} className="px-6 py-2 text-sm font-semibold rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition">
                      Show more
                    </button>
                  </div>
                )}
            </Section>
            <AnimatePresence>
                {selectedProject && <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </>
    );
};
export default FeaturedProjectsSection;