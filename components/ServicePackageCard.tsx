import React from 'react';

interface ServicePackageCardProps {
    title: string;
    description: string;
    imageUrl: string;
    details: { label: string; value: string }[];
    onBook: () => void;
}

const ServicePackageCard: React.FC<ServicePackageCardProps> = ({ title, description, imageUrl, details, onBook }) => {
  return (
    <div className="bg-brand-white rounded-lg shadow-lg overflow-hidden flex flex-col group border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{description}</p>
        
        <div className="mt-4 space-y-3">
          {details.map(detail => {
            const isWeekDays = detail.label === 'Week Days';
            return (
              <div key={detail.label} className={`flex justify-between items-center text-sm p-3 rounded-lg ${isWeekDays ? 'bg-brand-primary/30' : 'bg-gray-100'}`}>
                <span className="font-semibold text-gray-600">{detail.label}</span>
                <span className="font-bold text-brand-dark">{detail.value}</span>
              </div>
            );
          })}
        </div>
        
        <button onClick={onBook} className="mt-6 w-full bg-brand-primary text-brand-dark font-bold py-3 rounded-full text-lg hover:bg-yellow-500 transition-colors">
            Book Now
        </button>
      </div>
    </div>
  );
};

export default ServicePackageCard;
