import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedInIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Yogkit</h3>
            <p className="text-sm">
              Making the transformative power of yoga accessible to everyone, everywhere.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-secondary">About Us</Link></li>
              <li><Link to="/mentors" className="hover:text-brand-secondary">Mentors</Link></li>
              <li><Link to="/blog" className="hover:text-brand-secondary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home-yoga" className="hover:text-brand-secondary">Home Yoga</Link></li>
              <li><Link to="/online-yoga" className="hover:text-brand-secondary">Online Yoga</Link></li>
              <li><Link to="/corporate-yoga" className="hover:text-brand-secondary">Corporate Yoga</Link></li>
              <li><Link to="/therapy-yoga" className="hover:text-brand-secondary">Therapy Yoga</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">Email: hello@yogkit.com</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-secondary"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" className="hover:text-brand-secondary"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Yogkit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;