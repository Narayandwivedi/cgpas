import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [membersDropdown, setMembersDropdown] = useState(false);
  const [membersTypeDropdown, setMembersTypeDropdown] = useState(false);
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

            {/* News Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setNewsDropdown(true)}
                onMouseLeave={() => setNewsDropdown(false)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium flex items-center"
              >
                News
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {newsDropdown && (
                <div
                  onMouseEnter={() => setNewsDropdown(true)}
                  onMouseLeave={() => setNewsDropdown(false)}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  <Link
                    to="/news/international"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    International
                  </Link>
                  <Link
                    to="/news/national"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    National
                  </Link>
                  <Link
                    to="/news/cg"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    CG News
                  </Link>
                </div>
              )}
            </div>

            {/* Members Zone Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setMembersDropdown(true)}
                onMouseLeave={() => setMembersDropdown(false)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium flex items-center"
              >
                Members Zone
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {membersDropdown && (
                <div
                  onMouseEnter={() => setMembersDropdown(true)}
                  onMouseLeave={() => setMembersDropdown(false)}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                >
                  {/* Members Type Sub-dropdown */}
                  <div className="relative">
                    <button
                      onMouseEnter={() => setMembersTypeDropdown(true)}
                      onMouseLeave={() => setMembersTypeDropdown(false)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between"
                    >
                      Members Type
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {membersTypeDropdown && (
                      <div
                        onMouseEnter={() => setMembersTypeDropdown(true)}
                        onMouseLeave={() => setMembersTypeDropdown(false)}
                        className="absolute left-full top-0 ml-1 w-56 bg-white rounded-md shadow-lg py-1 z-50"
                      >
                        <Link
                          to="/members/join-cgpas"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          Join as CGPAS Member
                        </Link>
                        <Link
                          to="/members/join-abcd"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          Join as ABCD Member
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/members/how-to-join"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    How to Join
                  </Link>
                </div>
              )}
            </div>

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

            {/* News Dropdown Mobile */}
            <div>
              <button
                onClick={() => setNewsDropdown(!newsDropdown)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium flex items-center justify-between"
              >
                News
                <svg className={`w-4 h-4 transition-transform ${newsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {newsDropdown && (
                <div className="pl-6 space-y-1">
                  <Link
                    to="/news/international"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    International
                  </Link>
                  <Link
                    to="/news/national"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    National
                  </Link>
                  <Link
                    to="/news/cg"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    CG News
                  </Link>
                </div>
              )}
            </div>

            {/* Members Zone Dropdown Mobile */}
            <div>
              <button
                onClick={() => setMembersDropdown(!membersDropdown)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium flex items-center justify-between"
              >
                Members Zone
                <svg className={`w-4 h-4 transition-transform ${membersDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {membersDropdown && (
                <div className="pl-6 space-y-1">
                  {/* Members Type Sub-dropdown Mobile */}
                  <div>
                    <button
                      onClick={() => setMembersTypeDropdown(!membersTypeDropdown)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md flex items-center justify-between"
                    >
                      Members Type
                      <svg className={`w-4 h-4 transition-transform ${membersTypeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {membersTypeDropdown && (
                      <div className="pl-6 space-y-1">
                        <Link
                          to="/members/join-cgpas"
                          className="block px-3 py-2 text-xs text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Join as CGPAS Member
                        </Link>
                        <Link
                          to="/members/join-abcd"
                          className="block px-3 py-2 text-xs text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Join as ABCD Member
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/members/how-to-join"
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    How to Join
                  </Link>
                </div>
              )}
            </div>

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
