import React from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import blogPosts from '../data/blog.ts';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '../components/icons';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(p => p.id === postId);

  usePageMetadata(
    post ? post.title : 'Post Not Found',
    post ? post.excerpt : 'An article from the Yogkit blog.'
  );

  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  const otherPosts = blogPosts.filter(p => p.id !== postId).slice(0, 2);

  return (
    <div className="bg-brand-light">
      <div className="relative h-96">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">{post.title}</h1>
                <div className="flex items-center text-md text-gray-500 mt-4 mb-6 space-x-6 border-b pb-4">
                    <div className="flex items-center gap-2">
                        <UserIcon className="w-5 h-5" />
                        <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="w-5 h-5" />
                        <span>{post.date}</span>
                    </div>
                </div>
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {post.content}
                </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
                <div className="sticky top-32">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <h3 className="text-xl font-bold text-brand-dark border-b pb-3 mb-4">Other Posts</h3>
                        <ul className="space-y-4">
                            {otherPosts.map(otherPost => (
                                <li key={otherPost.id}>
                                    <NavLink to={`/blog/${otherPost.id}`} className="group flex items-start gap-4 hover:bg-gray-50 p-2 rounded-md">
                                        <img src={otherPost.image} alt={otherPost.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0"/>
                                        <div>
                                            <h4 className="font-semibold text-brand-dark group-hover:text-brand-secondary">{otherPost.title}</h4>
                                            <p className="text-sm text-gray-500">{otherPost.date}</p>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                         <NavLink to="/blog" className="mt-6 font-semibold text-brand-secondary hover:text-brand-dark flex items-center justify-center gap-2">
                            View All Posts <ArrowRightIcon className="w-5 h-5" />
                        </NavLink>
                    </div>
                </div>
            </aside>
        </div>
      </div>
      <div className="h-20 bg-brand-light"></div> {/* Spacer at the bottom */}
    </div>
  );
};

export default BlogPostPage;