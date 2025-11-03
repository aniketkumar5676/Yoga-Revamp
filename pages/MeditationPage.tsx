import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { useBookingModal } from '../contexts/BookingModalContext';
import programs from '../data/programs.ts';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import ServicePackageCard from '../components/ServicePackageCard';

const meditationPackages = [
    { id: 'basic', imageUrl: 'https://images.unsplash.com/photo-1506126613408-4e61f36d50da?auto=format&fit=crop&w=800&q=80', title: 'Basic Meditation', description: "Fit yoga into your busy life with YOGKIT's flexible Basic Meditation. Attend 3 classes per week on alternate days (Mon, Wed & Fri or Tue, Thu & Sat) and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'beginner', imageUrl: 'https://images.unsplash.com/photo-1534251369789-506726284755?auto=format&fit=crop&w=800&q=80', title: 'Beginner Meditation', description: "Fit yoga into your busy life with YOGKIT's flexible Beginner Meditation. Attend 3 classes per week on alternate days (Mon, Wed & Fri or Tue, Thu & Sat) and experience the transformative power of gentle yoga, breathwork, and meditation.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '3 Days' }] },
    { id: 'deep', imageUrl: 'https://images.unsplash.com/photo-1593811167563-5c4a7008558f?auto=format&fit=crop&w=800&q=80', title: 'Deep Meditation', description: "Transform your weekdays with YOGKIT's Week 5 Days Deep Meditation. Immerse yourself in 20 classes (Monday-Friday) of rejuvenating flows, improved flexibility, and enhanced mindfulness.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '5 Days' }] },
    { id: 'inner', imageUrl: 'https://images.unsplash.com/photo-1474418397713-7e15e4371b67?auto=format&fit=crop&w=800&q=80', title: 'Inner Meditation', description: "Unleash your full potential with YOGKIT's 6-Day Inner Meditation. Dive deep into transformative practices, energize your body and mind, and find inner balance. Join us for a complete mind-body connection journey with 24 classes per month.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', value: '6 Days' }] },
    { id: 'weekend', imageUrl: 'https://images.unsplash.com/photo-1528920304533-29f5385dba36?auto=format&fit=crop&w=800&q=80', title: 'Weekend Meditation', description: "Unwind and recharge with YOGKIT's Weekend Meditation. Enjoy 8 blissful yoga sessions (Saturday & Sunday) to rejuvenate your mind, body, and spirit. Find inner peace and strength with a transformative journey.", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }, { label: 'Week Days', 'value': '2 Days' }] },
    { id: 'trial', imageUrl: 'https://images.unsplash.com/photo-1512438248247-f082a52763ea?auto=format&fit=crop&w=800&q=80', title: 'Trial Meditation', description: "Unleash the transformative power of yoga with YOGKIT's Trial Meditation. Join us for 60 minutes of mindful movement and deep relaxation. Reserve your spot now and embark on your yoga journey!", details: [{ label: 'Category', value: 'Offline/Online' }, { label: 'Duration', value: '60 Mins' }] },
];

const MeditationPage: React.FC = () => {
  usePageMetadata('Meditation Sessions', "Cultivate inner peace and mindfulness with our guided meditation classes.");
  const { openModal } = useBookingModal();
  const pageData = programs.find(p => p.id === 'meditation');

  if (!pageData) return <div>Program not found.</div>;

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Meditation"
        subtitle="Experience the ultimate in yoga convenience with YOGKIT's personalized Meditation, led by our experienced and professional trainers."
        imageUrl={pageData.image.replace('w=800', 'w=1200')}
      />

      <AnimatedSection>
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meditationPackages.map(pkg => (
                  <ServicePackageCard 
                      key={pkg.id}
                      imageUrl={pkg.imageUrl}
                      title={pkg.title}
                      description={pkg.description}
                      details={pkg.details}
                      onBook={() => openModal({ programTitle: `Meditation - ${pkg.title}`, details: pkg.details })}
                  />
              ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MeditationPage;