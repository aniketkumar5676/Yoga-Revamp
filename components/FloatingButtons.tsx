import React from 'react';
import { PhoneIcon, WhatsAppIcon } from './icons';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-4">
      <a 
        href="tel:+911234567890" 
        className="bg-brand-secondary text-white p-4 rounded-full shadow-lg hover:bg-sky-600 transition-colors"
        aria-label="Call us"
      >
        <PhoneIcon className="w-6 h-6" />
      </a>
      <a 
        href="https://wa.me/911234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
