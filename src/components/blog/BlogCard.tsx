import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/stories/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="text-sm text-slate-500 mb-3">
          {post.date}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
          {post.excerpt}
        </p>
      </div>
      </article>
    </Link>
  );
};

export default BlogCard;