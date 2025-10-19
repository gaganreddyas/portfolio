import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../../data/mockData.jsx';
import Card from '../ui/Card';
import { Link } from 'react-router-dom';
import AdCard from '../ui/AdCard.jsx';

const Section = ({ id, children, className = '' }) => (<section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>);
const SectionTitle = ({ children }) => (<motion.h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>{children}</motion.h2>);
const BlogSection = () => {
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(4);
    const increment = 2;
    const categories = mockData.blogCategories || ['All'];
    const filteredPosts = useMemo(() => mockData.blogPosts.filter(p => filter === 'All' || p.category === filter), [filter]);
    useEffect(() => { setVisibleCount(4); }, [filter]);
    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const canShowMore = visibleCount < filteredPosts.length;
    return (
        <Section id="blog" className="py-20 md:py-28">
            <SectionTitle>Blog & Articles</SectionTitle>
            <div className="flex flex-wrap justify-center gap-2 mb-8">{categories.map(cat => <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 border ${filter === cat ? 'bg-blue-500 text-white border-blue-500' : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>{cat}</button>)}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {visiblePosts.map((post, i) => (
                    <motion.div key={post.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                        <Link to={`/blog/${post.slug}`} className="block h-full">
                            <Card className="h-full overflow-hidden group">
                                <div className="w-full aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-blue-500 font-semibold">{post.category}</p>
                                    <h4 className="mt-1 text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors line-clamp-2">{post.title}</h4>
                                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{post.excerpt}</p>
                                    <div className="mt-4 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                                        <span>{post.date}</span>
                                        <span>{post.readingTime} min read</span>
                                    </div>
                                    <span className="mt-4 inline-block text-blue-600">Read more →</span>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
                {canShowMore && (
                  <AdCard>
                    Looking for more? Click "Show more" to load additional posts.
                  </AdCard>
                )}
            </div>
            {canShowMore && (
              <div className="mt-8 text-center">
                <button onClick={() => setVisibleCount(Math.min(visibleCount + increment, filteredPosts.length))} className="px-6 py-2 text-sm font-semibold rounded-full border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition">
                  Show more
                </button>
              </div>
            )}
        </Section>
    );
};
export default BlogSection;