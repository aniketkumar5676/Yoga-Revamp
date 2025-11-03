import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { useBookingModal } from '../contexts/BookingModalContext';
import programs from '../data/programs.ts';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import ServicePackageCard from '../components/ServicePackageCard';

const homePackages = [
    { id: 'silver', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', title: 'Silver Yoga', description: "Fit yoga into your busy life with YOGKIT's flexible Silver Yoga Session. Attend 3 classes per week on alternate days (Mon, Wed & Fri or Tue, Thu & Sat) and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Home visit' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'gold', imageUrl: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80', title: 'Gold Yoga', description: "Fit yoga into your busy life with YOGKIT's flexible Gold Yoga Session. Attend 3 classes per week on alternate days (Mon, Wed & Fri or Tue, Thu & Sat) and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Home visit' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'platinum', imageUrl: 'https://images.unsplash.com/photo-1622048769696-4d042b1028de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3387', title: 'Platinum Yoga', description: "Transform your weekdays with YOGKIT's Week 5 Days Yoga Session. Immerse yourself in 20 classes (Monday-Friday) of rejuvenating flows, improved flexibility, and enhanced mindfulness.", details: [{ label: 'Category', value: 'Home visit' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '5 Days' }] },
    { id: 'diamond', imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80', title: 'Diamond Yoga', description: "Unleash your full potential with YOGKIT's 6-Day Yoga Session. Dive deep into transformative practices, energize your body and mind, and find inner balance. Join us for a complete mind-body connection journey with 24 classes per month.", details: [{ label: 'Category', value: 'Home visit' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '6 Days' }] },
    { id: 'weekend', imageUrl: 'https://images.unsplash.com/photo-1758599879463-58aad7d947f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3264', title: 'Weekend Yoga Session', description: "Unwind and recharge with YOGKIT's Weekend Yoga Session. Enjoy 8 blissful yoga sessions (Saturday & Sunday) to rejuvenate your mind, body, and spirit. Find inner peace and strength with a transformative journey.", details: [{ label: 'Category', value: 'Home visit' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '2 Days' }] },
    { id: 'trial', imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80', title: 'Trial Yoga', description: "Unleash the transformative power of yoga with YOGKIT's trial Session. Join us for 60 minutes of mindful movement and deep relaxation. Reserve your spot now and embark on your yoga journey!", details: [{ label: 'Category', value: 'Home visit' }, { label: 'Duration', value: '60 Mins' }] },
];

const HomeYogaPage: React.FC = () => {
  usePageMetadata('Home Yoga Sessions', "Experience convenient, personalized home visit yoga sessions with our expert trainers.");
  const { openModal } = useBookingModal();
  const pageData = programs.find(p => p.id === 'home-yoga');

  if (!pageData) return <div>Program not found.</div>;

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Home Yoga"
        subtitle="Experience the ultimate in yoga convenience with YOGKIT's personalized home visit sessions, led by our experienced and professional trainers."
        imageUrl={pageData.image.replace('w=800', 'w=1200')}
      />

      <AnimatedSection>
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homePackages.map(pkg => (
                  <ServicePackageCard 
                      key={pkg.id}
                      imageUrl={pkg.imageUrl}
                      title={pkg.title}
                      description={pkg.description}
                      details={pkg.details}
                      onBook={() => openModal({ programTitle: `Home Yoga - ${pkg.title}`, details: pkg.details })}
                  />
              ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomeYogaPage;