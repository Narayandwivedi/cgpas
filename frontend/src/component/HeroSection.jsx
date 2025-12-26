import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-8 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 whitespace-nowrap">
              {t.home.hero.welcome}
            </h1>
            <p className="text-base md:text-2xl text-gray-700 mb-4">
              {t.home.hero.subtitle}
            </p>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              {t.home.hero.description}
            </p>
          </div>

          {/* Maharaj Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="/maharaj.webp"
                alt="Maharaja Agrasen"
                className="relative w-full max-w-[290px] rounded-lg shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-orange-500">
                <p className="text-sm md:text-base font-bold text-gray-800 whitespace-nowrap">
                  महाराजा अग्रसेन
                </p>
                <p className="text-xs text-gray-600 text-center whitespace-nowrap">
                  Maharaja Agrasen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
