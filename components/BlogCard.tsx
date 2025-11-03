import React from 'react';
import { NavLink } from 'react-router-dom';
import type { BlogPost } from '../types';
import { CalendarIcon, UserIcon, ArrowRightIcon } from './icons';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-lg overflow-hidden flex flex-col group border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <NavLink to={`/blog/${post.id}`} className="block">
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
      </NavLink>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-secondary transition-colors">
          <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
        </h3>
        <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
          <div className="flex items-center gap-1.5">
            <UserIcon className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
        </div>
        <p className="mt-3 text-gray-600 flex-grow">{post.excerpt}</p>
        <NavLink 
          to={`/blog/${post.id}`} 
          className="mt-4 font-semibold text-brand-secondary hover:text-brand-dark flex items-center gap-2 self-start group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;