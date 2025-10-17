import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../../data/mockData.jsx';
import Card from '../ui/Card';

const Section = ({ id, children, className = '' }) => (<section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>);
const SectionTitle = ({ children }) => (<motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>);
const LearningSection = () => {
    return (
        <Section id="learning" className="py-20 md:py-28">
            <SectionTitle>Continuous Learning</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mockData.learning.map((item, i) => (
                    <motion.div key={item.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                        <Card className="p-6 h-full text-center">
                            <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-full mb-4">{item.icon}</div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{item.title}</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.reason}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
export default LearningSection;