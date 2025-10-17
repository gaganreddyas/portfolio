import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);
export default Card;