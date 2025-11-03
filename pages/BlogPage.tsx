import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import blogPosts from '../data/blog.ts';
import BlogCard from '../components/BlogCard';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';

const BlogPage: React.FC = () => {
  usePageMetadata('Yogkit Blog', 'Explore articles on yoga, mindfulness, and wellness from our expert instructors.');

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Yogkit Blog"
        subtitle="Insights, stories, and tips to inspire your wellness journey."
        imageUrl="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&q=80"
      />
      <AnimatedSection>
        <div className="container mx-auto px-6 py-20 max-w-7xl">
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
              ))}
          </main>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPage;