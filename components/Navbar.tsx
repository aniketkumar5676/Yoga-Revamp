import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SearchIcon } from './icons';
import SearchModal from './SearchModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 pr-4 pl-3 ${
      isActive ? 'text-brand-secondary' : 'text-brand-dark'
    } hover:text-brand-secondary border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0`;
  
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  
  const programLinks = [
    { to: "/home-yoga", label: "Home Yoga" },
    { to: "/online-yoga", label: "Online Yoga" },
    { to: "/corporate-yoga", label: "Corporate Yoga" },
    { to: "/therapy-yoga", label: "Therapy Yoga" },
    { to: "/meditation", label: "Meditation" },
    { to: "/yoga-camp", label: "Yoga Camp" },
  ];

  return (
    <>
      <nav className={`bg-brand-white fixed w-full z-40 top-8 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-brand-dark">Yogkit</span>
          </Link>
          <div className="flex items-center md:order-2 space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              type="button"
              className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="Search"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li><NavLink to="/" className={navLinkClass} end>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
              <li className="relative" onMouseEnter={() => setIsProgramsOpen(true)} onMouseLeave={() => setIsProgramsOpen(false)}>
                <button className="flex items-center justify-between w-full py-2 pr-4 pl-3 text-brand-dark hover:text-brand-secondary md:p-0">
                  Programs
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                {isProgramsOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 w-48">
                    {programLinks.map(link => (
                      <NavLink key={link.to} to={link.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-secondary" onClick={() => setIsProgramsOpen(false)}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
              <li><NavLink to="/mentors" className={navLinkClass}>Mentors</NavLink></li>
              <li><NavLink to="/retreat" className={navLinkClass}>Retreat</NavLink></li>
              <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;