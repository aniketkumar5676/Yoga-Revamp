import React, { useState, useEffect, useMemo, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import programs from '../data/programs.ts';
import mentors from '../data/mentors.ts';
import blogPosts from '../data/blog.ts';
import { SearchIcon, XIcon } from './icons.tsx';

// Define result types
interface SearchResult {
  id: string;
  title: string;
  type: 'Program' | 'Mentor' | 'Blog Post';
  link: string;
  context?: string;
  searchableText: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchData = useMemo(() => {
    const allData: SearchResult[] = [
      ...programs.map(p => ({
        id: p.id,
        title: p.title,
        type: 'Program' as const,
        link: `/${p.id}`,
        context: p.shortDescription,
        searchableText: `${p.title} ${p.shortDescription} ${p.detailedDescription}`.toLowerCase()
      })),
      ...mentors.map(m => ({
        id: m.id,
        title: m.name,
        type: 'Mentor' as const,
        link: `/mentors/${m.id}`,
        context: m.title,
        searchableText: `${m.name} ${m.title} ${m.specialties.join(' ')} ${m.bio}`.toLowerCase()
      })),
      ...blogPosts.map(b => ({
        id: b.id,
        title: b.title,
        type: 'Blog Post' as const,
        link: `/blog/${b.id}`,
        context: `By ${b.author}`,
        searchableText: `${b.title} ${b.author} ${b.excerpt} ${b.content}`.toLowerCase()
      })),
    ];
    return allData;
  }, []);
  
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setQuery('');
        setResults([]);
      }, 300);
      return;
    }
    
    inputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = searchData.filter(item => 
        item.searchableText.includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, searchData]);

  const handleLinkClick = () => {
    onClose();
  };
  
  const groupedResults = results.reduce((acc, result) => {
    const key = result.type;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(result);
    return acc;
  }, {} as Record<SearchResult['type'], SearchResult[]>);

  const displayOrder: SearchResult['type'][] = ['Program', 'Mentor', 'Blog Post'];

  return (
    <div 
      className={`fixed inset-0 bg-black/60 z-50 flex justify-center items-start pt-20 sm:pt-24 px-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className={`bg-white rounded-lg shadow-2xl w-full max-w-2xl relative transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b p-4">
          <SearchIcon className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for anything..."
            className="w-full text-lg focus:outline-none bg-transparent"
            aria-label="Search input"
          />
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 ml-4 p-1 rounded-full hover:bg-gray-100" aria-label="Close search">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
          {query.trim().length > 1 && results.length === 0 && (
            <p className="p-6 text-center text-gray-500">No results found for "{query}".</p>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {displayOrder.map(type => {
                if (!groupedResults[type]) return null;
                return (
                  <div key={type} className="mb-2">
                    <h3 className="text-xs font-bold uppercase text-gray-400 px-4 pt-2 pb-1" id={`search-results-${type.replace(' ','-')}`}>{type}s</h3>
                    <ul aria-labelledby={`search-results-${type.replace(' ','-')}`}>
                      {groupedResults[type].map(item => (
                        <li key={`${type}-${item.id}`}>
                          <NavLink 
                            to={item.link} 
                            onClick={handleLinkClick}
                            className="block p-4 rounded-md hover:bg-brand-light transition-colors"
                          >
                            <p className="font-semibold text-brand-dark">{item.title}</p>
                            {item.context && <p className="text-sm text-gray-600 mt-1">{item.context}</p>}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;