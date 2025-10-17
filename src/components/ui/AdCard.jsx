import React from 'react';

export default function AdCard({ label = 'Sponsored', children }) {
  return (
    <div className="h-full rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 flex flex-col justify-between">
      <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">{label}</div>
      <div className="text-slate-700 dark:text-slate-200 text-sm">
        {children || 'Promoted content placeholder'}
      </div>
    </div>
  );
}


