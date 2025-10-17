import React, { useMemo, useState, useEffect } from 'react';
import { mockData } from '../data/mockData.jsx';
import { Link } from 'react-router-dom';
import AdCard from '../components/ui/AdCard.jsx';

export default function BlogList() {
  const [visibleCount, setVisibleCount] = useState(6);
  const increment = 4;
  const posts = useMemo(() => mockData.blogPosts, []);
  useEffect(() => { setVisibleCount(6); }, []);
  const visiblePosts = posts.slice(0, visibleCount);
  const canShowMore = visibleCount < posts.length;
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-blue-600">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500 dark:text-slate-400">Blog</span>
          </div>
          <Link to="/" className="text-blue-600">Go to Home</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visiblePosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block h-full">
              <div className="h-full rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors overflow-hidden">
                <div className="w-full aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-blue-500 font-semibold">{post.category}</p>
                  <h2 className="text-2xl font-bold mt-1 line-clamp-2">{post.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 flex justify-between">
                    <span>{post.date}</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <span className="mt-4 inline-block text-blue-600">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
          {canShowMore && (
            <AdCard>
              Keep exploring—click "Show more" to load additional posts.
            </AdCard>
          )}
        </div>
        {canShowMore && (
          <div className="mt-8 text-center">
            <button onClick={() => setVisibleCount(Math.min(visibleCount + increment, posts.length))} className="px-6 py-2 text-sm font-semibold rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition">
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


