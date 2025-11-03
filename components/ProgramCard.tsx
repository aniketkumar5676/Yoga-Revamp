import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Program } from '../types';
import { ArrowRightIcon } from './icons';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-lg overflow-hidden flex flex-col group border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img src={program.image} alt={program.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-dark">{program.title}</h3>
        <p className="mt-2 text-gray-600 flex-grow">{program.shortDescription}</p>
        <NavLink 
          to={`/${program.id}`} 
          className="mt-4 font-semibold text-brand-secondary hover:text-brand-dark flex items-center gap-2 self-start group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default ProgramCard;