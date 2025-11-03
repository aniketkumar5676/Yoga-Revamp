import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { useBookingModal } from '../contexts/BookingModalContext';
import programs from '../data/programs.ts';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import ServicePackageCard from '../components/ServicePackageCard';

const onlinePackages = [
    { id: 'silver', imageUrl: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632', title: 'Silver Yoga Class', description: "Fit yoga into your busy life with YOGKIT's flexible Silver Yoga Program. Attend 3 classes per week on alternate days (Mon, Wed & Fri or Tue, Thu & Sat) and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'gold', imageUrl: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632', title: 'Gold Yoga Class', description: "Fit yoga into your busy life with YOGKIT's flexible Gold Yoga Program. Attend 3 classes per week on alternate days (Mon, Wed & Fri or Tue, Thu & Sat) and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'platinum', imageUrl: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632', title: 'Platinum Yoga Class', description: "Transform your weekdays with YOGKIT's Week 5 Days Yoga Package. Immerse yourself in 20 classes (Monday-Friday) of rejuvenating flows, improved flexibility, and enhanced mindfulness.", details: [{ label: 'Category', value: 'Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '5 Days' }] },
    { id: 'diamond', imageUrl: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632', title: 'Diamond Yoga Class', description: "Unleash your full potential with YOGKIT's 6-Day Yoga Class. Dive deep into transformative practices, energize your body and mind, and find inner balance. Join us for a complete mind-body connection journey with 24 classes per month.", details: [{ label: 'Category', value: 'Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '6 Days' }] },
    { id: 'weekend', imageUrl: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632', title: 'Weekend Yoga Class', description: "Unwind and recharge with YOGKIT's Weekend Yoga Package. Enjoy 8 blissful yoga sessions (Saturday & Sunday) to rejuvenate your mind, body, and spirit. Find inner peace and strength with a transformative journey.", details: [{ label: 'Category', value: 'Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '2 Days' }] },
    { id: 'trial', imageUrl: 'https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632', title: 'Trial Yoga Class', description: "Unleash the transformative power of yoga with YOGKIT's trial class. Join us for 60 minutes of mindful movement and deep relaxation. Reserve your spot now and embark on your yoga journey!", details: [{ label: 'Category', value: 'Online' }, { label: 'Duration', value: '60 Mins' }] },
];

const OnlineYogaPage: React.FC = () => {
  usePageMetadata('Online Yoga Sessions', "Experience the ultimate in yoga convenience with YOGKIT's personalized Online Yoga sessions.");
  const { openModal } = useBookingModal();
  const pageData = programs.find(p => p.id === 'online-yoga');

  if (!pageData) return <div>Program not found.</div>;

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Online Yoga Session"
        subtitle="Experience the ultimate in yoga convenience with YOGKIT's personalized Online Yoga sessions, led by our experienced and professional trainers."
        imageUrl={pageData.image.replace('w=800', 'w=1200')}
      />
      <AnimatedSection>
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onlinePackages.map(pkg => (
                  <ServicePackageCard 
                      key={pkg.id}
                      imageUrl={pkg.imageUrl}
                      title={pkg.title}
                      description={pkg.description}
                      details={pkg.details}
                      onBook={() => openModal({ programTitle: `Online Yoga - ${pkg.title}`, details: pkg.details })}
                  />
              ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default OnlineYogaPage;