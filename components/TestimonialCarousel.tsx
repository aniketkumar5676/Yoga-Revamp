import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonials = [
  {
    name: 'Anjali P.',
    role: 'Corporate Professional',
    quote: "Yogkit's corporate yoga program has been a game-changer for our team. The sessions are refreshing and have significantly reduced stress levels at the workplace.",
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Rohan S.',
    role: 'Home Yoga Student',
    quote: "The personalized attention in the home yoga sessions is incredible. My instructor tailored the practice to my specific needs, and I've seen amazing progress.",
    image: 'https://i.pravatar.cc/150?img=3',
  },
  {
    name: 'Priya K.',
    role: 'Online Practitioner',
    quote: "I love the flexibility of the online classes. The instructors are engaging, and the sense of community is strong, even though we're all practicing from home.",
    image: 'https://i.pravatar.cc/150?img=5',
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex]);


  return (
    <div className="bg-brand-light py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">What Our Community Says</h2>
        <div className="relative mt-8 h-80">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex flex-col items-center justify-center h-full">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                <p className="text-lg italic text-gray-700 max-w-2xl">"{testimonial.quote}"</p>
                <p className="mt-4 font-bold text-brand-dark">{testimonial.name}</p>
                <p className="text-sm text-brand-secondary">{testimonial.role}</p>
              </div>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
            <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;