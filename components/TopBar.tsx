import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-brand-dark text-brand-white fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 h-8 flex items-center overflow-hidden">
                <div className="relative w-full h-full flex items-center">
                    <div className="absolute animate-marquee whitespace-nowrap">
                        <span className="mx-4">Phone: +91 12345 67890</span>
                        <span className="mx-4">|</span>
                        <span className="mx-4">Email: hello@yogkit.com</span>
                        <span className="mx-4">|</span>
                        <span className="mx-4">New Batches for Online Yoga Starting Soon!</span>
                         <span className="mx-4">|</span>
                        <span className="mx-4">Phone: +91 12345 67890</span>
                        <span className="mx-4">|</span>
                        <span className="mx-4">Email: hello@yogkit.com</span>
                        <span className="mx-4">|</span>
                        <span className="mx-4">New Batches for Online Yoga Starting Soon!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
