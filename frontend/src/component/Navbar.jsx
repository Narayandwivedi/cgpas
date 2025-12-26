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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-4 md:gap-8 lg:gap-12">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 md:gap-4 py-2 group">
              <img
                src="/cgpas logo final.webp"
                alt="CGPAS Logo"
                className="h-14 md:h-16 lg:h-18 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
                  {t.cgpas}
                </span>
                <span className="text-gray-600 text-[9px] md:text-[10px] lg:text-xs font-medium tracking-wide leading-tight">
                  {t.navbarLine1}
                </span>
                <span className="text-gray-600 text-[9px] md:text-[10px] lg:text-xs font-medium tracking-wide leading-tight">
                  {t.navbarLine2}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-0.5 lg:space-x-1 xl:space-x-2 flex-shrink-0">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              Blog
            </Link>

            {/* News Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setNewsDropdown(true)}
                onMouseLeave={() => setNewsDropdown(false)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 flex items-center gap-1 whitespace-nowrap"
              >
                News
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {newsDropdown && (
                <div
                  onMouseEnter={() => setNewsDropdown(true)}
                  onMouseLeave={() => setNewsDropdown(false)}
                  className="absolute left-0 mt-0 pt-2 w-52 z-50"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    <Link
                      to="/news"
                      onClick={() => setNewsDropdown(false)}
                      className="block px-4 py-2.5 text-[14px] font-semibold text-orange-600 hover:bg-orange-50 transition-colors border-b border-gray-200"
                    >
                      All News
                    </Link>
                    <Link
                      to="/news/cg"
                      onClick={() => setNewsDropdown(false)}
                      className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      CG News
                    </Link>
                    <Link
                      to="/news/national"
                      onClick={() => setNewsDropdown(false)}
                      className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      National
                    </Link>
                    <Link
                      to="/news/international"
                      onClick={() => setNewsDropdown(false)}
                      className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      International
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Members Zone Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setMembersDropdown(true)}
                onMouseLeave={() => setMembersDropdown(false)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 flex items-center gap-1 whitespace-nowrap"
              >
                Members Zone
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {membersDropdown && (
                <div
                  onMouseEnter={() => setMembersDropdown(true)}
                  onMouseLeave={() => setMembersDropdown(false)}
                  className="absolute left-0 mt-0 pt-2 w-60 z-50"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {/* Members Type Sub-dropdown */}
                    <div className="relative group/submenu">
                      <button
                        onMouseEnter={() => setMembersTypeDropdown(true)}
                        onMouseLeave={() => setMembersTypeDropdown(false)}
                        className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 flex items-center justify-between transition-colors"
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
                          className="absolute left-full top-0 -ml-px w-60 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        >
                          <a
                            href="https://abcdvyapar.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setMembersTypeDropdown(false)
                              setMembersDropdown(false)
                            }}
                            className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            Join as CGPAS Member
                          </a>
                          <a
                            href="https://abcdvyapar.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setMembersTypeDropdown(false)
                              setMembersDropdown(false)
                            }}
                            className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            Join as ABCD Member
                          </a>
                        </div>
                      )}
                    </div>
                    <Link
                      to="/members/how-to-join"
                      onClick={() => setMembersDropdown(false)}
                      className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      How to Join
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              Gallery
            </Link>
            <Link
              to="/executive-body"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              Executive Body
            </Link>
            <Link
              to="/branches"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              Branches
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-semibold text-[13px] lg:text-[14px] xl:text-[15px] px-2 lg:px-2.5 xl:px-3 py-2 rounded-md hover:bg-orange-50 whitespace-nowrap"
            >
              Contact
            </Link>

            <div className="ml-1 lg:ml-2">
              <LanguageToggle />
            </div>

            {/* Desktop Contact Icons - Stacked Vertically */}
            <div className="flex flex-col gap-2 ml-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919993961778"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-all shadow-md hover:shadow-lg"
                aria-label="Contact on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>

              {/* Phone Button */}
              <a
                href="tel:+917713562323"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-all shadow-md hover:shadow-lg"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Contact Icons and Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Contact Icons - Stacked Vertically */}
            <div className="flex flex-col gap-2">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919993961778"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-1.5 transition-all shadow-md"
                aria-label="Contact on WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>

              {/* Phone Button */}
              <a
                href="tel:+917713562323"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1.5 transition-all shadow-md"
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
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
          <div className="px-2 pt-1 pb-2 space-y-0.5">
            <Link
              to="/"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            {/* News Dropdown Mobile */}
            <div>
              <button
                onClick={() => setNewsDropdown(!newsDropdown)}
                className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm flex items-center justify-between"
              >
                News
                <svg className={`w-4 h-4 transition-transform ${newsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {newsDropdown && (
                <div className="pl-4 space-y-0.5">
                  <Link
                    to="/news"
                    className="block px-3 py-1 text-xs font-semibold text-orange-600 hover:bg-orange-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    All News
                  </Link>
                  <Link
                    to="/news/cg"
                    className="block px-3 py-1 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    CG News
                  </Link>
                  <Link
                    to="/news/national"
                    className="block px-3 py-1 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    National
                  </Link>
                  <Link
                    to="/news/international"
                    className="block px-3 py-1 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    International
                  </Link>
                </div>
              )}
            </div>

            {/* Members Zone Dropdown Mobile */}
            <div>
              <button
                onClick={() => setMembersDropdown(!membersDropdown)}
                className="w-full text-left px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm flex items-center justify-between"
              >
                Members Zone
                <svg className={`w-4 h-4 transition-transform ${membersDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {membersDropdown && (
                <div className="pl-4 space-y-0.5">
                  {/* Members Type Sub-dropdown Mobile */}
                  <div>
                    <button
                      onClick={() => setMembersTypeDropdown(!membersTypeDropdown)}
                      className="w-full text-left px-3 py-1 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md flex items-center justify-between"
                    >
                      Members Type
                      <svg className={`w-4 h-4 transition-transform ${membersTypeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {membersTypeDropdown && (
                      <div className="pl-4 space-y-0.5">
                        <a
                          href="https://abcdvyapar.com/signup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-1 text-[10px] text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Join as CGPAS Member
                        </a>
                        <a
                          href="https://abcdvyapar.com/signup"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-1 text-[10px] text-gray-500 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          Join as ABCD Member
                        </a>
                      </div>
                    )}
                  </div>
                  <Link
                    to="/members/how-to-join"
                    className="block px-3 py-1 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    How to Join
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/executive-body"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Executive Body
            </Link>
            <Link
              to="/branches"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Branches
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-1.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md font-medium text-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-1.5">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
