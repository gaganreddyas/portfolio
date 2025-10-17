import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../../data/mockData.jsx';

const Section = ({ id, children, className = '' }) => (<section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>);
const SectionTitle = ({ children }) => (<motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>);
const ExperienceSection = () => {
    return (
        <Section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/70">
            <SectionTitle>Experience & Journey</SectionTitle>
            <div className="relative">
                <div className="absolute left-4 top-0 w-0.5 h-full bg-slate-300 dark:bg-slate-700 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
                <div className="space-y-12">
                    {mockData.experience.map((exp, index) => (
                        <motion.div key={index} className="relative md:grid md:grid-cols-2 md:gap-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                            <div className="absolute left-4 top-1 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-full md:left-1/2 md:-translate-x-1/2 z-10"></div>
                            <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                                <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
                                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-8 h-8 rounded-full object-cover bg-white"/>
                                </div>
                                <p className="text-md font-semibold text-blue-500">{exp.company}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{exp.period}</p>
                                <p className="mt-2 text-slate-600 dark:text-slate-300">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
export default ExperienceSection;