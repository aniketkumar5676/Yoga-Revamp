import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
    title: "Begin Your Journey to Inner Peace.",
    subtitle: "Personalized yoga for your lifestyle. At home, online, or at your workplace.",
    cta: "Book a Free Consultation",
    link: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80",
    title: "Guidance from Expert Mentors.",
    subtitle: "Learn from passionate, certified professionals dedicated to your growth.",
    cta: "Meet Our Mentors",
    link: "/mentors"
  },
  {
    image: "https://images.unsplash.com/photo-1758599880805-3f000f47fa46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200",
    title: "Practice Anywhere, Anytime.",
    subtitle: "Join our vibrant online community with live, interactive classes.",
    cta: "Explore Online Yoga",
    link: "/online-yoga"
  },
  {
    image: "https://images.unsplash.com/photo-1626026397008-3316047db4fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    title: "Yoga in the Comfort of Your Home.",
    subtitle: "Experience personalized yoga sessions with certified instructors in your own living space.",
    cta: "Discover Home Yoga",
    link: "/home-yoga"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    title: "Elevate Your Workplace Wellness.",
    subtitle: "Boost productivity and reduce stress with our tailored corporate yoga programs.",
    cta: "Learn About Corporate Yoga",
    link: "/corporate-yoga"
  }
];

const HomeBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="h-screen min-h-[600px] max-h-[800px] relative group">
      <div className="w-full h-full relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-6">
          <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight" key={currentIndex}>
                  {slides[currentIndex].title}
              </h1>
              <p className="mt-4 text-lg text-gray-200" key={currentIndex + 'sub'}>
                  {slides[currentIndex].subtitle}
              </p>
              <NavLink
                  to={slides[currentIndex].link}
                  className="mt-8 inline-block bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors"
              >
                  {slides[currentIndex].cta}
              </NavLink>
          </div>
      </div>
      
      {/* Left Arrow */}
      <button onClick={prevSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20" aria-label="Previous slide">
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20" aria-label="Next slide">
        <ChevronRightIcon className="w-8 h-8" />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand-primary' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HomeBanner;