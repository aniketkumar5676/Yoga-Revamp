import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  usePageMetadata('Contact Us - Yogkit', 'Get in touch with us for any inquiries about our yoga programs or for scheduling a session.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly!');
    // Here you would typically handle form submission, e.g., send data to an API
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Get In Touch"
        subtitle="We're here to help you on your wellness journey. Reach out with any questions or to book a consultation."
        imageUrl="https://images.unsplash.com/photo-1558017487-06bf9f82613a?auto=format&fit=crop&w=1200&q=80"
      />
      
      <AnimatedSection>
        <div className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-brand-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-500 transition-colors">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="bg-brand-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">Contact Information</h3>
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> hello@yogkit.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 12345 67890</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Yoga Lane, Wellness City</p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&w=1200&q=80" 
                  alt="Map location of Yogkit studio"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;