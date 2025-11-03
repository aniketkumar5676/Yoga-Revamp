import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <section 
      className="relative bg-cover bg-center text-white pt-48 pb-24" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg text-gray-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
