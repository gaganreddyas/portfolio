import React from 'react';

const SkeletonCard = () => (
    <div className="bg-white dark:bg-slate-800/50 p-4 rounded-xl shadow-lg animate-pulse">
        <div className="h-48 bg-slate-300 dark:bg-slate-700 rounded-md"></div>
        <div className="mt-4 space-y-3">
            <div className="h-4 bg-slate-300 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-3 bg-slate-300 dark:bg-slate-700 rounded w-1/2"></div>
            <div className="flex gap-2 pt-2"><div className="h-6 w-16 bg-slate-300 dark:bg-slate-700 rounded-full"></div><div className="h-6 w-16 bg-slate-300 dark:bg-slate-700 rounded-full"></div></div>
        </div>
    </div>
);
export default SkeletonCard;