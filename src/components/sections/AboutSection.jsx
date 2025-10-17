import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../../data/mockData.jsx';

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);
const SectionTitle = ({ children }) => (
    <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
        {children}
    </motion.h2>
);
const AboutSection = () => {
    return (
        <Section id="about" className="py-20 md:py-28">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <motion.div className="md:col-span-2 flex justify-center" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-lg">
                        <img src="https://placehold.co/512x512/E0E7FF/3B82F6?text=GR" alt="Gagan Reddy A S" className="w-full h-full rounded-full object-cover" />
                    </div>
                </motion.div>
                <motion.div className="md:col-span-3" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{mockData.personalInfo.bio}</p>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {mockData.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <p className="text-3xl font-bold text-blue-500 dark:text-blue-400">{stat.value}{index === 1 ? '' : '+'}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
export default AboutSection;