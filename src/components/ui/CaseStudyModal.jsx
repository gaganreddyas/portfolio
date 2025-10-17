import React from 'react';
import { motion } from 'framer-motion';
import { X, Target, BrainCircuit, BookOpen } from 'lucide-react';

const CaseStudyModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[99] p-4" onClick={onClose}>
            <motion.div initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }} className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"><X size={24}/></button>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h2>
                    <div className="mt-6 space-y-6 text-slate-600 dark:text-slate-300">
                        <div><h3 className="font-bold text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2"><Target size={20} className="text-blue-500"/> The Challenge</h3><p className="mt-2">{project.caseStudy.challenge}</p></div>
                        <div><h3 className="font-bold text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2"><BrainCircuit size={20} className="text-purple-500"/> My Solution</h3><p className="mt-2">{project.caseStudy.solution}</p></div>
                        <div><h3 className="font-bold text-lg text-slate-700 dark:text-slate-200 flex items-center gap-2"><BookOpen size={20} className="text-green-500"/> Key Learning</h3><p className="mt-2">{project.caseStudy.learning}</p></div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
export default CaseStudyModal;