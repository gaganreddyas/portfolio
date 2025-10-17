import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MobileSidebar = ({ isOpen, onClose, navLinks, handleNavClick }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />
                    <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 p-6">
                        <div className="flex justify-between items-center mb-8"><span className="text-xl font-bold">Navigation</span><button onClick={onClose} className="p-1"><X size={24}/></button></div>
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map(link => (<a key={link} onClick={() => handleNavClick(link)} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2">{link}</a>))}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
export default MobileSidebar;