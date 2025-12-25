import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4 py-2 group">
              <img
                src="/cgpas logo final.webp"
                alt="CGPAS Logo"
                className="h-16 md:h-20 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-orange-600 text-2xl md:text-3xl font-bold tracking-tight leading-tight">
                  {t.cgpas}
                </span>
                <span className="text-gray-600 text-[10px] md:text-xs font-medium tracking-wide">
                  {t.cgpasFullEnglish}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/executive-body"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Executive Body
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/executive-body"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Executive Body
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
