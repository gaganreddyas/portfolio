import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { mockData } from '../data/mockData.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = mockData.blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-blue-600">Home</Link>
          <span className="text-slate-400">/</span>
          <Link to="/blog" className="text-blue-600">Blog</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 dark:text-slate-400 truncate">{post.title}</span>
        </div>
        <p className="mt-4 text-sm text-blue-500 font-semibold">{post.category}</p>
        <h1 className="text-4xl font-extrabold mt-1">{post.title}</h1>
        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex gap-4">
          <span>{post.date}</span>
          <span>{post.readingTime} min read</span>
        </div>
        <div className="mt-6 w-full rounded overflow-hidden bg-slate-100 dark:bg-slate-800">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <article className="prose dark:prose-invert max-w-none mt-8">
          {Array.isArray(post.content)
            ? post.content.map((para, idx) => <p key={idx}>{para}</p>)
            : <ReactMarkdown 
                components={{
                  img: ({src, alt, ...props}) => (
                    <img 
                      src={src} 
                      alt={alt} 
                      className="w-full mx-auto my-4 rounded-md shadow-sm border border-slate-200 dark:border-slate-700 object-contain"
                      {...props}
                    />
                  ),
                  h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-100">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-100">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-800 dark:text-slate-100">{children}</h3>,
                  p: ({children}) => <p className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{children}</p>,
                  strong: ({children}) => <strong className="font-semibold text-slate-800 dark:text-slate-100">{children}</strong>,
                  ul: ({children}) => <ul className="mb-4 ml-6 list-disc text-slate-700 dark:text-slate-300">{children}</ul>,
                  li: ({children}) => <li className="mb-1">{children}</li>,
                }}
              >
                {post.content}
              </ReactMarkdown>
          }
        </article>
        {/* Button to redirect to all blogs */}
        <div className="mt-12 flex justify-center">
          <Link to="/blog">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold">
              Read more blogs from me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


