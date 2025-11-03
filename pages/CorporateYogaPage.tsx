import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { useBookingModal } from '../contexts/BookingModalContext';
import programs from '../data/programs.ts';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import ServicePackageCard from '../components/ServicePackageCard';

const corporatePackages = [
    { id: 'silver', imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', title: 'Silver Corporate Yoga', description: "Unlock a healthier, happier workplace with YOGKIT's Corporate Yoga. Our 4-session monthly package features expert-led yoga classes tailored to your team's needs, boosting productivity and fostering a sense of harmony.", details: [{ label: 'Category', value: 'Silver Corporate Yoga' }, { label: 'Duration', value: '60 Mins' }] },
    { id: 'gold', imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', title: 'Gold Corporate Yoga', description: "Transform your workplace with YOGKIT's 2-sessions-per-week Corporate Yoga Package. Eight expert-led sessions each month empower your team to boost productivity, manage stress, and build stronger connections. Experience the difference. Book your sessions today!", details: [{ label: 'Category', value: 'Gold Corporate Yoga' }, { label: 'Duration', value: '60 Mins' }] },
    { id: 'platinum', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', title: 'Platinum Corporate Yoga', description: "Cultivate a thriving workplace with YOGKIT's 3-session-per-week Corporate Yoga Package. 12 expert-led sessions each month empower your team to boost productivity, sharpen focus, and build a happier, healthier team. Invest in well-being and experience the difference.", details: [{ label: 'Category', value: 'Platinum Corporate Yoga' }, { label: 'Duration', value: '60 Mins' }] },
    { id: 'premium', imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', title: 'Premium Corporate Yoga', description: "Thrive with daily wellness: YOGKIT's 24-session Corporate Yoga Package. Experience the transformative power of six expert-led sessions each week, boosting productivity, reducing stress, and fostering a connected, thriving team. Invest in your team's well-being and see the difference.", details: [{ label: 'Category', value: 'Premium Corporate Yoga Plus' }, { label: 'Duration', value: '60 Mins' }] },
];

const CorporateYogaPage: React.FC = () => {
  usePageMetadata('Corporate Yoga Programs', "Boost employee well-being and productivity with our tailored corporate yoga sessions.");
  const { openModal } = useBookingModal();
  const pageData = programs.find(p => p.id === 'corporate-yoga');

  if (!pageData) return <div>Program not found.</div>;

  return (
    <div className="bg-brand-light">
      <PageBanner
        title="Corporate Yoga"
        subtitle="Experience the ultimate in yoga convenience with YOGKIT's personalized Corporate Yoga sessions, led by our experienced and professional trainers."
        imageUrl={pageData.image.replace('w=800', 'w=1200')}
      />

      <AnimatedSection>
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corporatePackages.map(pkg => (
                  <ServicePackageCard 
                      key={pkg.id}
                      imageUrl={pkg.imageUrl}
                      title={pkg.title}
                      description={pkg.description}
                      details={pkg.details}
                      onBook={() => openModal({ programTitle: `Corporate Yoga - ${pkg.title}`, details: pkg.details })}
                  />
              ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default CorporateYogaPage;