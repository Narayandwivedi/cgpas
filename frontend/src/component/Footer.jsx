import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">CGPAS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chhattisgarh Prantiya Agrawal Sangathan is dedicated to the growth
              and development of the Agrawal community through various initiatives
              and programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://abcdvyapar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  ABCD Vyapar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0"
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
                <div className="text-gray-300 text-sm">
                  Hanuman Market, Ramsagar Para,<br />
                  RAIPUR CG 492001
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0"
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
                  href="mailto:cgpscg@gmail.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  cgpscg@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0"
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
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  0771- 3562323
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Chhattisgarh Prantiya Agrawal Sangathan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
