import React from 'react';
import usePageMetadata from '../hooks/usePageMetadata';
import { useBookingModal } from '../contexts/BookingModalContext';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import { PaletteIcon, WindIcon, HandThumbUpIcon, BrainCircuitIcon, CheckCircleIcon } from '../components/icons';

const signaturePrograms = [
    {
        title: 'Color Therapy',
        description: 'Balance body, mind & spirit using the vibrations of color.',
        icon: <PaletteIcon className="w-10 h-10 text-brand-secondary" />,
        bgColor: 'bg-brand-secondary/10'
    },
    {
        title: 'Shatkarma',
        description: 'Six yogic detox techniques to cleanse and energize.',
        icon: <WindIcon className="w-10 h-10 text-emerald-500" />,
        bgColor: 'bg-emerald-500/10'
    },
    {
        title: 'Acupressure',
        description: 'Gentle point-pressing to release stress and boost digestion.',
        icon: <HandThumbUpIcon className="w-10 h-10 text-rose-500" />,
        bgColor: 'bg-rose-500/10'
    },
    {
        title: 'Meditation',
        description: 'Deep-calm practices for clarity, balance and inner peace.',
        icon: <BrainCircuitIcon className="w-10 h-10 text-purple-500" />,
        bgColor: 'bg-purple-500/10'
    }
];

const schedule = [
    {
        day: 'Day 1',
        activities: [
            'Hawan & Introduction',
            'Mantra Chanting',
            'Yoga Session',
            'Drawing',
            'Tratak',
            'Meditation'
        ]
    },
    {
        day: 'Day 2',
        activities: [
            'Meditation at Brahma Muhurta',
            'Sunrise Yoga Session',
            'Natural Body Detox',
            'Basti (Shatkarma)',
            'Deep Relaxation with Yoga Nidra',
            'Ganga Aarti'
        ]
    },
    {
        day: 'Day 3',
        activities: [
            'Music Meditation',
            'Pranayama',
            'Color Therapy',
            'Yoga Dance',
            'Story telling',
            'Closing Ceremony'
        ]
    }
];


const RetreatPage: React.FC = () => {
    usePageMetadata('Yoga & Detox Retreat in Rishikesh', 'Recharge your soul amidst the Himalayas with our 3-day yoga and natural detox retreat.');
    const { openModal } = useBookingModal();

    const handleBooking = () => {
        openModal({
            programTitle: 'Yoga & Natural Detox Retreat',
            details: [{ label: 'Dates', value: '2nd May - 4th May 2025' }]
        });
    };

    return (
        <div className="bg-brand-light">
            <PageBanner
                title="Yoga & Natural Detox Retreat in Rishikesh"
                subtitle="Recharge Your Soul Amidst the Himalayas"
                imageUrl="https://images.unsplash.com/photo-1650341259809-9314b0de9268?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            />

            <div className="container mx-auto px-6 py-20 max-w-7xl">
                {/* Dates Info */}
                <AnimatedSection>
                    <div className="text-center mb-16 bg-brand-primary/20 border-l-4 border-brand-primary p-6 rounded-r-lg max-w-md mx-auto">
                        <h3 className="text-xl font-bold text-brand-dark">Retreat Dates</h3>
                        <p className="text-2xl font-semibold text-brand-dark mt-2">2nd May - 4th May 2025</p>
                    </div>
                </AnimatedSection>

                {/* Signature Programs */}
                <AnimatedSection>
                    <section className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Signature Programmes</h2>
                            <p className="mt-2 text-gray-600">Holistic practices for a complete mind-body reset.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {signaturePrograms.map(program => (
                                <div key={program.title} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center border-t-4 border-transparent hover:border-brand-primary transition-colors">
                                    <div className={`p-4 rounded-full ${program.bgColor} mb-4`}>
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark">{program.title}</h3>
                                    <p className="mt-2 text-gray-600 flex-grow">{program.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </AnimatedSection>
                
                {/* Retreat Schedule */}
                <AnimatedSection>
                    <section className="mb-20">
                         <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Retreat Schedule</h2>
                            <p className="mt-2 text-gray-600">A 3-day journey to rejuvenation and self-discovery.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {schedule.map((day, index) => (
                                <div key={day.day} className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-brand-secondary">
                                    <div className="bg-brand-dark p-4">
                                        <h3 className="text-2xl font-bold text-brand-primary">{day.day}</h3>
                                    </div>
                                    <ul className="p-6 space-y-3">
                                        {day.activities.map(activity => (
                                            <li key={activity} className="flex items-start text-gray-700">
                                                <CheckCircleIcon className="w-5 h-5 text-brand-secondary mr-3 mt-1 flex-shrink-0" />
                                                <span>{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </AnimatedSection>
                
                {/* Booking Call to Action */}
                <AnimatedSection>
                    <section className="text-center bg-brand-white p-12 rounded-lg shadow-xl">
                        <h2 className="text-3xl font-bold text-brand-dark">Ready to Transform?</h2>
                        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                           Spaces are limited to ensure a personalized experience. Book your spot today and embark on a journey of healing and self-discovery in the spiritual heart of India.
                        </p>
                        <button 
                            onClick={handleBooking}
                            className="mt-8 bg-brand-primary text-brand-dark font-bold py-4 px-10 rounded-full text-xl hover:bg-yellow-500 transition-colors transform hover:scale-105"
                        >
                            Book Your Spot Now
                        </button>
                    </section>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default RetreatPage;