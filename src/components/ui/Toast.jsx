import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Toast = ({ message, type, onClose }) => {
    useEffect(() => { const timer = setTimeout(onClose, 5000); return () => clearTimeout(timer); }, [onClose]);
    const isSuccess = type === 'success';
    const bgColor = isSuccess ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50';
    const textColor = isSuccess ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200';
    const borderColor = isSuccess ? 'border-green-500' : 'border-red-500';
    const Icon = isSuccess ? CheckCircle : XCircle;
    return (
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.3 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.5 }} className={`fixed bottom-5 right-5 flex items-center gap-4 p-4 rounded-lg shadow-2xl border-l-4 ${borderColor} ${bgColor} ${textColor} z-[100]`}>
            <Icon size={24} /><p className="font-semibold">{message}</p><button onClick={onClose} className="ml-4 text-slate-500 hover:text-slate-800 dark:hover:text-white"><X size={20} /></button>
        </motion.div>
    );
};
export default Toast;