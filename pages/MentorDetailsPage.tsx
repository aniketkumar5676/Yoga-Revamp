import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';
import mentors from '../data/mentors';
import { InstagramIcon, LinkedInIcon, CheckCircleIcon } from '../components/icons';
import { useBookingModal } from '../contexts/BookingModalContext';

const MentorDetailsPage: React.FC = () => {
  const { mentorId } = useParams<{ mentorId: string }>();
  const mentor = mentors.find(m => m.id === mentorId);
  const { openModal } = useBookingModal();
  
  const [activeTab, setActiveTab] = useState('about');

  usePageMetadata(
    mentor ? `${mentor.name} - Yogkit Mentor` : 'Mentor Not Found',
    mentor ? mentor.bio : 'Details about our expert yoga mentor.'
  );

  if (!mentor) {
    return <Navigate to="/mentors" replace />;
  }

  const handleBookSession = () => {
    openModal({ programTitle: `Session with ${mentor.name}` });
  };
  
  const tabClass = (tabName: string) => 
    `px-6 py-3 font-semibold rounded-t-lg transition-colors cursor-pointer focus:outline-none ${
      activeTab === tabName 
        ? 'bg-brand-white text-brand-secondary border-b-2 border-brand-secondary'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Mentor Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={mentor.image} alt={mentor.name} className="w-48 h-48 rounded-full object-cover ring-4 ring-brand-primary/50 shadow-lg"/>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-brand-dark">{mentor.name}</h1>
              <p className="text-xl text-brand-secondary mt-1">{mentor.title}</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {mentor.socialLinks.instagram && <a href={mentor.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-dark"><InstagramIcon className="w-6 h-6" /></a>}
                {mentor.socialLinks.linkedin && <a href={mentor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-dark"><LinkedInIcon className="w-6 h-6" /></a>}
              </div>
            </div>
             <div className="mt-6 md:mt-0 md:ml-auto">
                 <button onClick={handleBookSession} className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors">
                    Book a Session
                 </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <div className="bg-white sticky top-[104px] z-20">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="border-b border-gray-300">
             <nav className="flex" aria-label="Tabs">
               <button onClick={() => setActiveTab('about')} className={tabClass('about')}>
                 About
               </button>
               <button onClick={() => setActiveTab('expertise')} className={tabClass('expertise')}>
                 Expertise
               </button>
               <button onClick={() => setActiveTab('experience')} className={tabClass('experience')}>
                 Experience
               </button>
             </nav>
           </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <section className="bg-brand-light">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div key={activeTab} className="animate-fade-in">
            {activeTab === 'about' && (
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">About {mentor.name}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{mentor.bio}</p>
              </div>
            )}
            {activeTab === 'expertise' && (
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Expertise & Specialization</h2>
                <ul className="space-y-3">
                  {mentor.specialties.map(specialty => (
                    <li key={specialty} className="flex items-center text-gray-700 text-lg">
                      <CheckCircleIcon className="w-6 h-6 text-brand-secondary mr-3 flex-shrink-0"/>
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'experience' && (
              <div className="bg-white p-8 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Professional Experience</h2>
                <div className="bg-brand-light p-6 rounded-lg text-center md:text-left">
                    <p className="text-6xl font-bold text-brand-primary">{mentor.experienceYears}</p>
                    <p className="text-xl text-brand-dark font-semibold">Years of Experience</p>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                        With {mentor.experienceYears} years of dedicated practice and teaching, {mentor.name} brings a wealth of knowledge and a deep, intuitive understanding of yoga to every class.
                    </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorDetailsPage;