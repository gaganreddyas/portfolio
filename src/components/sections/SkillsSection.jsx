import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Briefcase, Cloud } from 'lucide-react';
import { mockData } from '../../data/mockData.jsx';
import Card from '../ui/Card';

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);
const SectionTitle = ({ children }) => (
    <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>
);
const SkillsSection = () => {
    const { skills } = mockData;
    const skillCategories = [
        { title: "Frontend", icon: <Code size={24} />, skills: skills.frontend },
        { title: "Backend", icon: <Database size={24} />, skills: skills.backend },
        { title: "Database", icon: <Briefcase size={24} />, skills: skills.database },
        { title: "Tools & Cloud", icon: <Cloud size={24} />, skills: skills.toolsAndCloud },
    ];
    return (
        <Section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/70">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, i) => (
                    <motion.div key={category.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -5 }}>
                        <Card className="p-6 h-full">
                            <div className="flex items-center gap-4 mb-4"><div className="p-2 bg-blue-100 dark:bg-blue-900/50 text-blue-500 rounded-lg">{category.icon}</div><h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{category.title}</h3></div>
                            <ul className="space-y-3">
                                {category.skills.map(skill => (<li key={skill.name} className="flex justify-between items-center"><span className="text-slate-600 dark:text-slate-300">{skill.name}</span><span className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-2 py-1 rounded-full">{skill.level}</span></li>))}
                            </ul>
                        </Card>
                    </motion.div>
                ))}
            </div>
             <div className="mt-12">
                <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 mb-6">Soft Skills</h3>
                <motion.div className="flex flex-wrap justify-center gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                    {skills.softSkills.map((skill, i) => (<motion.div key={skill} className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>{skill}</motion.div>))}
                </motion.div>
            </div>
        </Section>
    );
};
export default SkillsSection;