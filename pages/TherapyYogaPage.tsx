import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { useBookingModal } from '../contexts/BookingModalContext';
import programs from '../data/programs.ts';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import ServicePackageCard from '../components/ServicePackageCard';

const therapyPackages = [
    { id: 'silver', imageUrl: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469', title: 'Silver Yoga Therapy', description: "Fit yoga into your busy life with YOGKIT's flexible Silver Yoga Therapy. Attend 3 classes per week on alternate days and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'gold', imageUrl: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469', title: 'Gold Yoga Therapy', description: "Fit yoga into your busy life with YOGKIT's flexible Gold Yoga Therapy. Attend 3 classes per week on alternate days and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'platinum', imageUrl: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469', title: 'Platinum Yoga Therapy', description: "Transform your weekdays with YOGKIT's Week 5 Days Yoga Therapy. Immerse yourself in 20 classes (Monday-Friday) of rejuvenating flows, improved flexibility, and enhanced mindfulness.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '5 Days' }] },
    { id: 'diamond', imageUrl: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469', title: 'Diamond Yoga Therapy', description: "Unleash your full potential with YOGKIT's 6-Day Yoga Therapy. Dive deep into transformative practices, energize your body and mind, and find inner balance. Join us for a complete mind-body connection journey.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '6 Days' }] },
    { id: 'weekend', imageUrl: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469', title: 'Weekend Yoga Therapy', description: "Unwind and recharge with YOGKIT's Weekend Yoga Therapy. Enjoy 8 blissful yoga sessions (Saturday & Sunday) to rejuvenate your mind, body, and spirit.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '2 Days' }] },
    { id: 'trial', imageUrl: 'https://images.unsplash.com/photo-1542651061-6c70005d9f62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469', title: 'Trial Yoga Therapy', description: "Unleash the transformative power of yoga with YOGKIT's trial Therapy. Join us for 60 minutes of mindful movement and deep relaxation. Reserve your spot now!", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }] },
];

const TherapyYogaPage: React.FC = () => {
  usePageMetadata('Yoga Therapy Sessions', "Experience healing and convenience with YOGKIT's personalized Yoga Therapy sessions.");
  const { openModal } = useBookingModal();
  const pageData = programs.find(p => p.id === 'therapy-yoga');

  if (!pageData) return <div>Program not found.</div>;

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Yoga Therapy"
        subtitle="Experience the ultimate in yoga convenience with YOGKIT's personalized Yoga Therapy, led by our experienced and professional trainers."
        imageUrl={pageData.image.replace('w=800', 'w=1200')}
      />

      <AnimatedSection>
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapyPackages.map(pkg => (
                  <ServicePackageCard 
                      key={pkg.id}
                      imageUrl={pkg.imageUrl}
                      title={pkg.title}
                      description={pkg.description}
                      details={pkg.details}
                      onBook={() => openModal({ programTitle: `Yoga Therapy - ${pkg.title}`, details: pkg.details })}
                  />
              ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default TherapyYogaPage;