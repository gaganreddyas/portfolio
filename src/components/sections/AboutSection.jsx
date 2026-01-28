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
                    
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        {mockData.about.headline}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">
                        {mockData.about.subHeadline}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                        {mockData.about.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                        {mockData.about.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-slate-600 dark:text-slate-300">
                                <span className="mr-3 text-blue-500 mt-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-700 pt-8">
                        {mockData.about.stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
export default AboutSection;