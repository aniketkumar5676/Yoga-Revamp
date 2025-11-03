import React, { useState } from 'react';
import { XIcon } from './icons';
import type { BookingDetails } from '../contexts/BookingModalContext';

interface BookingModalProps {
  bookingDetails: BookingDetails;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ bookingDetails, onClose }) => {
  const [sessionMode, setSessionMode] = useState('Offline');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const modeInfo = isHybrid ? ` (${sessionMode})` : '';
    alert(`Thank you for your inquiry for ${bookingDetails.programTitle}${modeInfo}! We will contact you shortly.`);
    onClose();
    (e.target as HTMLFormElement).reset();
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const isHomeVisit = bookingDetails.details?.some(
    d => d.label === 'Category' && d.value.toLowerCase() === 'home visit'
  );

  const isHybrid = bookingDetails.details?.some(
    d => d.label === 'Category' && d.value.toLowerCase() === 'offline/online'
  );
  
  const showAddressField = isHomeVisit || (isHybrid && sessionMode === 'Offline');


  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-brand-white rounded-lg shadow-2xl p-8 w-full max-w-lg relative"
        onClick={stopPropagation}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          <XIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-brand-dark mb-2">Book a Session</h2>
        <p className="text-gray-600 mb-4">You've selected: <span className="font-semibold text-brand-secondary">{bookingDetails.programTitle}</span></p>

        {bookingDetails.details && bookingDetails.details.length > 0 && (
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm p-4 bg-brand-light/50 rounded-lg border">
                {bookingDetails.details.map(detail => {
                    // Don't show the hybrid category in the details list
                    if (detail.label === 'Category' && detail.value === 'Offline/Online') {
                        return null;
                    }
                    return (
                        <div key={detail.label} className="flex justify-between items-center border-b border-gray-200 py-1">
                            <span className="font-semibold text-gray-600">{detail.label}</span>
                            <span className="font-bold text-brand-dark text-right">{detail.value}</span>
                        </div>
                    );
                })}
            </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" />
          </div>

          {isHybrid && (
            <div>
              <label htmlFor="session-mode" className="block text-sm font-medium text-gray-700">Session Mode</label>
              <select 
                id="session-mode" 
                value={sessionMode} 
                onChange={(e) => setSessionMode(e.target.value)} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary"
              >
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
              </select>
            </div>
          )}
          
          {showAddressField && (
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input 
                type="text" 
                id="address" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" 
                placeholder="Required for offline/home visits" 
              />
            </div>
          )}
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-secondary focus:border-brand-secondary" placeholder="Any specific questions or requirements?"></textarea>
          </div>
          <button type="submit" className="w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-full text-lg hover:bg-yellow-500 transition-colors">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;