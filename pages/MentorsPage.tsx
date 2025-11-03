import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import mentors from '../data/mentors.ts';
import MentorCard from '../components/MentorCard';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';

const MentorsPage: React.FC = () => {
  usePageMetadata('Our Mentors - Yogkit', 'Meet our team of experienced and passionate yoga instructors dedicated to guiding you on your wellness journey.');

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Meet Our Mentors"
        subtitle="Our certified and passionate instructors are here to guide you through your yoga journey with expertise and compassion."
        imageUrl="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80"
      />
      <AnimatedSection>
        <div className="container mx-auto px-6 py-20 max-w-7xl">
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentors.map(mentor => (
                  <MentorCard key={mentor.id} mentor={mentor} />
              ))}
          </main>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MentorsPage;