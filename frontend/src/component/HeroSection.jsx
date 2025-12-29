import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-4 pb-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 md:mb-6 whitespace-nowrap">
              {t.home.hero.welcome}
            </h1>
            <p className="text-sm md:text-2xl text-gray-700 mb-1 md:mb-2 leading-snug md:leading-normal">
              {t.home.hero.subtitle}
            </p>
            <p className="text-xs md:text-base text-gray-600 mb-1.5 md:mb-4 italic leading-snug md:leading-normal">
              {t.home.hero.stateUnit}
            </p>
            <p className="text-xs md:text-lg text-gray-600 leading-snug md:leading-relaxed">
              {t.home.hero.description}
            </p>
          </div>

          {/* Maharaj Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="/maharaj2.webp"
                alt="Maharaja Agrasen"
                className="relative w-full max-w-[200px] md:max-w-[340px] rounded-lg shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg border-2 border-orange-500">
                <p className="text-[10px] md:text-sm font-bold text-gray-800 text-center whitespace-nowrap">
                  भगवान श्री अग्रसेन और माता माधवी
                </p>
                <p className="text-[10px] md:text-xs text-gray-600 text-center whitespace-nowrap">
                  Bhagwan Shri Agrsen and Mata Madhavi
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
