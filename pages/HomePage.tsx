import React from 'react';
import { NavLink } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import programs from '../data/programs.ts';
import mentors from '../data/mentors.ts';
import blogPosts from '../data/blog.ts';
import ProgramCard from '../components/ProgramCard';
import MentorCard from '../components/MentorCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { ArrowRightIcon, SparklesIcon, HeartIcon, UserCircleIcon } from '../components/icons';
import HomeBanner from '../components/HomeBanner';
import AnimatedSection from '../components/AnimatedSection';
import BlogCard from '../components/BlogCard';

const HomePage: React.FC = () => {
  usePageMetadata('Yogkit - Your Path to Wellness', 'Discover personalized yoga sessions, expert mentors, and quality products to support your wellness journey.');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {/* Moving Home Banner */}
      <HomeBanner />

      {/* Programs Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Programs</h2>
              <p className="mt-2 text-gray-600">Tailored experiences to fit your life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.slice(0, 3).map(program => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Why Yoga Is Important Section */}
      <AnimatedSection>
        <section className="bg-brand-light py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Why Yoga is Important</h2>
              <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
                Yoga offers a wide range of benefits for both the mind and body. It can help manage chronic pain conditions like back pain and arthritis by improving flexibility and mobility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Physical Benefits Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-brand-primary/50">01</span>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Physical Benefits</h3>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                      <li>Improves flexibility and range of motion.</li>
                      <li>Increases muscle strength and tone.</li>
                      <li>Enhances posture and body alignment.</li>
                      <li>Boosts circulation and cardiovascular health.</li>
                      <li>Supports joint health and reduces pain.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Mental Benefits Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-brand-secondary/50">02</span>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Mental & Emotional Benefits</h3>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                      <li>Reduces stress and promotes relaxation.</li>
                      <li>Improves focus, concentration, and memory.</li>
                      <li>Cultivates mindfulness and self-awareness.</li>
                      <li>Enhances mood and emotional regulation.</li>
                      <li>Promotes better sleep quality.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Spiritual Benefits Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-emerald-500/50">03</span>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Spiritual & Holistic Growth</h3>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                      <li>Fosters a deeper connection with the self.</li>
                      <li>Promotes a sense of purpose and meaning.</li>
                      <li>Encourages living with greater intention.</li>
                      <li>Harmonizes mind, body, and spirit.</li>
                      <li>Cultivates compassion and gratitude.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Embracing Nature's Bounty Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Embracing Nature's Bounty<br />Through Divine Yoga</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Yogasan involves physical postures that enhance flexibility, strength, and balance, while also promoting mental calmness, reducing stress, and improving overall well-being through mindful practice and controlled breathing techniques.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="flex justify-center items-center mb-4 bg-brand-primary/20 p-5 rounded-full">
                  <SparklesIcon className="w-10 h-10 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Alternative Medicines</h3>
                <p className="mt-2 text-gray-600">Integrating natural remedies for holistic wellness.</p>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="flex justify-center items-center mb-4 bg-rose-100 p-5 rounded-full">
                  <HeartIcon className="w-10 h-10 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">For Good Health</h3>
                <p className="mt-2 text-gray-600">Building a foundation of physical vitality and resilience.</p>
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="flex justify-center items-center mb-4 bg-brand-secondary/20 p-5 rounded-full">
                  <UserCircleIcon className="w-10 h-10 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">Healthy Mind & Body</h3>
                <p className="mt-2 text-gray-600">Achieving harmony between mental clarity and physical ease.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <TestimonialCarousel />
      </AnimatedSection>
      
      {/* Retreat Promo Section */}
      <AnimatedSection>
        <section className="py-20 bg-brand-dark text-brand-light">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1650341259809-9314b0de9268?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
                  alt="Rishikesh landscape with yoga practitioner"
                  className="rounded-lg shadow-2xl w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-white">Yoga & Natural Detox Retreat</h2>
                <p className="mt-2 text-brand-primary font-semibold text-lg">Recharge Your Soul in Rishikesh</p>
                <p className="mt-4 text-gray-300">
                  Join us for a transformative 3-day retreat amidst the serene Himalayas. Cleanse your body, calm your mind, and reconnect with your inner self through ancient yogic practices.
                </p>
                <div className="mt-6 bg-brand-primary/20 text-brand-primary font-bold inline-block px-4 py-2 rounded-full">
                  Dates: 2nd May - 4th May 2025
                </div>
                <div className="mt-8">
                  <NavLink 
                    to="/retreat" 
                    className="inline-block bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors"
                  >
                    Learn More & Book
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mentors Section */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Meet Our Expert Mentors</h2>
              <p className="mt-2 text-gray-600">Guidance from passionate, certified professionals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentors.slice(0, 3).map(mentor => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
            <div className="text-center mt-12">
              <NavLink to="/mentors" className="font-semibold text-brand-secondary hover:text-brand-dark flex items-center justify-center gap-2">
                View All Mentors <ArrowRightIcon className="w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection>
        <section className="bg-brand-light py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">From Our Blog</h2>
              <p className="mt-2 text-gray-600">Insights and stories to inspire your practice.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <NavLink to="/blog" className="font-semibold text-brand-secondary hover:text-brand-dark flex items-center justify-center gap-2">
                View All Posts <ArrowRightIcon className="w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Contact Us Section */}
      <AnimatedSection>
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-brand-secondary font-semibold uppercase">CONTACT US</p>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Contact YOGKIT</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Give us a call or drop by anytime, we at YOGKIT endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                </p>
                <div className="mt-8 space-y-4 text-gray-700">
                  <p><strong>Email:</strong> hello@yogkit.com</p>
                  <p><strong>Phone:</strong> +91 12345 67890</p>
                </div>
              </div>
              <div className="bg-brand-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Send a Quick Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="home-name" className="sr-only">Full Name</label>
                    <input type="text" id="home-name" placeholder="Full Name" required className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                  </div>
                  <div>
                    <label htmlFor="home-email" className="sr-only">Email Address</label>
                    <input type="email" id="home-email" placeholder="Email Address" required className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                  </div>
                  <div>
                    <label htmlFor="home-message" className="sr-only">Message</label>
                    <textarea id="home-message" rows={4} placeholder="Your Message" required className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-500 transition-colors">
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default HomePage;