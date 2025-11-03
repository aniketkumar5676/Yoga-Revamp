import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Mentor } from '../types';
import { InstagramIcon, LinkedInIcon } from './icons';

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    // Don't navigate if a social link (which is an <a> tag) was clicked.
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    navigate(`/mentors/${mentor.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-brand-white rounded-lg shadow-lg text-center p-6 flex flex-col items-center border border-gray-200 cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleCardClick(e);
      }}
    >
      <img src={mentor.image} alt={mentor.name} className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-brand-secondary/20 group-hover:ring-brand-primary/50 transition-all" />
      <h3 className="text-xl font-bold text-brand-dark">{mentor.name}</h3>
      <p className="text-brand-secondary font-medium">{mentor.title}</p>
      <p className="text-sm text-gray-500 mt-2">{mentor.specialties.join(' | ')}</p>
      <p className="mt-4 text-gray-600 flex-grow">{mentor.bio.substring(0, 100)}...</p>
      <div className="flex space-x-4 mt-4">
        {mentor.socialLinks.instagram && <a href={mentor.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark"><InstagramIcon className="w-6 h-6" /></a>}
        {mentor.socialLinks.linkedin && <a href={mentor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark"><LinkedInIcon className="w-6 h-6" /></a>}
      </div>
    </div>
  );
};

export default MentorCard;