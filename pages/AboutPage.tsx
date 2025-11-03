import React from 'react';
import { NavLink } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import mentors from '../data/mentors.ts';
import MentorCard from '../components/MentorCard';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  usePageMetadata('About Yogkit', 'Learn about our mission to make yoga accessible to everyone and meet the team behind Yogkit.');

  return (
    <div className="bg-brand-light">
       <PageBanner 
        title="About Us"
        subtitle="Learn about our mission to make yoga accessible to everyone and meet the team behind YOGKIT."
        imageUrl="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80"
      />

      <div className="container mx-auto px-6 py-20 max-w-7xl">
        {/* Story Section */}
        <AnimatedSection>
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">From a Passion Project to a Community</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our journey began with a small group of friends practicing in a local park. We realized the profound impact yoga had on our lives—reducing stress, increasing physical strength, and fostering a sense of community. We wanted to share this gift with others.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, YOGKIT has grown into a vibrant community of practitioners and expert instructors, offering a diverse range of programs to fit modern lifestyles. Whether at home, online, or in the workplace, our mission remains the same: to guide you on a path to a healthier, more balanced life.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200&q=80" 
                alt="Group of people doing yoga outdoors"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </section>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection className="mt-20">
          <section className="text-center bg-brand-white p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-brand-dark">Our Mission</h2>
              <p className="mt-4 text-xl italic text-gray-700 max-w-3xl mx-auto">
                "To empower individuals to achieve physical and mental well-being through accessible, authentic, and personalized yoga experiences."
              </p>
          </section>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection className="mt-20">
          <section>
              <div className="text-center">
                  <h2 className="text-3xl font-bold text-brand-dark">Meet a Few of Our Mentors</h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Our team is the heart of YOGKIT. Get to know the dedicated instructors who will guide you on your journey.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mentors.slice(0, 3).map(mentor => (
                      <MentorCard key={mentor.id} mentor={mentor} />
                  ))}
              </div>
              <div className="text-center mt-12">
                  <NavLink to="/mentors" className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors">
                      Meet The Full Team
                  </NavLink>
              </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;