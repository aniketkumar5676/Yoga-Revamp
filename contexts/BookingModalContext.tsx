import React, { createContext, useContext, useState, ReactNode } from 'react';
import BookingModal from '../components/BookingModal';

export interface BookingDetails {
  programTitle: string;
  details?: { label: string; value: string }[];
}

interface BookingModalContextType {
  openModal: (details: BookingDetails) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export const useBookingModal = () => {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
};

interface BookingModalProviderProps {
  children: ReactNode;
}

export const BookingModalProvider: React.FC<BookingModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const openModal = (details: BookingDetails) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBookingDetails(null);
  };

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <BookingModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isModalOpen && bookingDetails && <BookingModal bookingDetails={bookingDetails} onClose={closeModal} />}
    </BookingModalContext.Provider>
  );
};