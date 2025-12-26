import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 text-orange-400">CGPAS</h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Chhattisgarh Prantiya Agrawal Sangathan is dedicated to the growth
              and development of the Agrawal community through various initiatives
              and programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-1 md:space-y-1.5">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/suggestions"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  Suggestions
                </Link>
              </li>
              <li>
                <Link
                  to="/complaint"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  Complaint
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  Branches
                </Link>
              </li>
              <li>
                <Link
                  to="/executive-body"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  Executive Members
                </Link>
              </li>
              <li>
                <a
                  href="https://abcdvyapar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  ABCDVYAPAR.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-base md:text-xl font-bold mb-3 md:mb-4 text-orange-400">Contact Us</h3>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-0.5 md:mt-1 mr-2 md:mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="text-gray-300 text-xs md:text-sm">
                  Hanuman Market, Ramsagar Para,<br />
                  RAIPUR CG 492001
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-0.5 md:mt-1 mr-2 md:mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:cgpascg@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  cgpascg@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-orange-400 mt-0.5 md:mt-1 mr-2 md:mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:07713562323"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-xs md:text-sm"
                >
                  0771- 3562323
                </a>
              </div>
            </div>

            {/* Executive HQ Members Form Button */}
            <div className="mt-3 md:mt-4 space-y-3 md:space-y-3">
              <a
                href="https://forms.gle/yt7kC2WR4jSR2kbz6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-orange-600 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-xs md:text-sm text-center"
              >
                Executive HQ Members Form
              </a>
              <a
                href="https://forms.gle/DqR2sDhjgHEhrP9z8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-orange-600 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-xs md:text-sm text-center"
              >
                Executive District Members Form
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Chhattisgarh Prantiya Agrawal Sangathan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
