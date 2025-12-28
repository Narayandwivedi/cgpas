import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import HeroSection from '../component/HeroSection';
import { User } from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About CGPAS Section */}
      <section className="pt-8 pb-4 md:py-16 bg-white border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-gray-900 rounded-xl p-3 md:p-8 lg:p-12 bg-gradient-to-br from-orange-50 to-white shadow-xl">
            <div className="text-center mb-2 md:mb-8">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-4">
                {t.home.aboutSection.title}
              </h2>
              <div className="w-12 md:w-24 h-1 bg-orange-500 mx-auto mb-2 md:mb-8"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xs md:text-lg text-gray-700 leading-snug md:leading-relaxed text-justify">
                {t.home.aboutSection.paragraph1}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABCD Section */}
      <section className="py-4 md:py-16 bg-gray-50 border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-gray-900 rounded-xl p-3 md:p-8 lg:p-12 bg-white shadow-xl">
            <div className="text-center mb-3 md:mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-4">
                {t.home.abcdSection.title}
              </h2>
              <div className="w-12 md:w-24 h-1 bg-orange-500 mx-auto mb-2 md:mb-6"></div>
              <p className="text-xs md:text-lg text-gray-700 leading-snug md:leading-relaxed max-w-3xl mx-auto text-justify">
                {t.home.abcdSection.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-10">
              <div className="border-2 border-gray-300 p-3 md:p-6 rounded-lg hover:border-orange-500 transition-all duration-300 bg-orange-50">
                <div className="flex items-center mb-2 md:mb-4">
                  <div className="bg-orange-500 p-1.5 md:p-3 rounded-lg mr-2 md:mr-4">
                    <svg
                      className="w-5 h-5 md:w-8 md:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-2xl font-bold text-gray-900">
                    {t.home.abcdSection.forBusinesses.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-base leading-snug md:leading-normal text-justify">
                  {t.home.abcdSection.forBusinesses.description}
                </p>
                <ul className="text-gray-700 space-y-1 md:space-y-3 mb-2 md:mb-6 text-xs md:text-base">
                  {t.home.abcdSection.forBusinesses.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-600 mr-1.5 md:mr-3 text-sm md:text-xl font-bold">✓</span>
                      <span className="leading-snug md:leading-normal">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://vendor.abcdvyapar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-900 text-white text-center px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-semibold text-xs md:text-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {t.home.abcdSection.forBusinesses.cta}
                </a>
              </div>

              <div className="border-2 border-gray-300 p-3 md:p-6 rounded-lg hover:border-orange-500 transition-all duration-300 bg-orange-50">
                <div className="flex items-center mb-2 md:mb-4">
                  <div className="bg-orange-500 p-1.5 md:p-3 rounded-lg mr-2 md:mr-4">
                    <svg
                      className="w-5 h-5 md:w-8 md:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base md:text-2xl font-bold text-gray-900">
                    {t.home.abcdSection.forMembers.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-base leading-snug md:leading-normal text-justify">
                  {t.home.abcdSection.forMembers.description}
                </p>
                <ul className="text-gray-700 space-y-1 md:space-y-3 mb-2 md:mb-6 text-xs md:text-base">
                  {t.home.abcdSection.forMembers.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-600 mr-1.5 md:mr-3 text-sm md:text-xl font-bold">✓</span>
                      <span className="leading-snug md:leading-normal">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://abcdvyapar.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-600 text-white text-center px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-semibold text-xs md:text-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {t.home.abcdSection.forMembers.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Initiatives Section */}
      <section className="py-4 md:py-16 bg-white border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-4">
              {t.home.initiatives.title}
            </h2>
            <div className="w-12 md:w-24 h-1 bg-orange-500 mx-auto mb-2 md:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {/* Annual Agra Alankaran */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.agraAlankaran.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.agraAlankaran.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.agraAlankaran.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.agraAlankaran.description}
              </p>
            </div>

            {/* Agra Panchayat */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.agraPanchayat.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.agraPanchayat.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.agraPanchayat.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.agraPanchayat.description}
              </p>
            </div>

            {/* Mangal Parinay */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.mangalParinay.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.mangalParinay.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.mangalParinay.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.mangalParinay.description}
              </p>
            </div>

            {/* Interest-Free Education Loan */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.educationLoan.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.educationLoan.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.educationLoan.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.educationLoan.description}
              </p>
            </div>

            {/* Ambulance Support */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.ambulance.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.ambulance.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.ambulance.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.ambulance.description}
              </p>
            </div>

            {/* Agra Kanya Vivah */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.kanyaVivah.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.kanyaVivah.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.kanyaVivah.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.kanyaVivah.description}
              </p>
            </div>

            {/* Free Mass Weddings */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.freeWeddings.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.freeWeddings.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.freeWeddings.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.freeWeddings.description}
              </p>
            </div>

            {/* Agra Sanjha Chulha */}
            <div className="bg-gradient-to-br- from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.sanjhaChulha.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.sanjhaChulha.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.sanjhaChulha.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.sanjhaChulha.description}
              </p>
            </div>

            {/* COVID Relief Fund */}
            <div className="bg-gradient-to-br- from-orange-50 to-white border-2 border-gray-200 rounded-lg p-2 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  <div className="bg-orange-500 w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900">
                    {t.home.initiatives.list.covidRelief.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-orange-500 mb-1 flex items-center justify-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                  </div>
                  <p className="text-[7px] md:text-[9px] text-gray-700 text-center font-semibold whitespace-nowrap">
                    {t.home.initiatives.list.covidRelief.coordinator}
                  </p>
                  <p className="text-[8px] md:text-[10px] text-gray-600 text-center whitespace-nowrap">
                    {t.home.initiatives.list.covidRelief.phone}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-xs md:text-sm leading-tight md:leading-relaxed text-justify">
                {t.home.initiatives.list.covidRelief.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-4 md:py-16 bg-gray-50 border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-4">
              {t.home.organizations.title}
            </h2>
            <div className="w-12 md:w-24 h-1 bg-orange-500 mx-auto mb-2 md:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-8">
            {/* Shri Agrasen Charitable Trust */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-4">
                {t.home.organizations.trust.name}
              </h3>
              <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-base leading-snug md:leading-normal">
                {t.home.organizations.trust.chairman}
              </p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-base">
                {t.home.organizations.trust.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-1.5 md:mr-2">•</span>
                    <span className="leading-snug md:leading-normal">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shri Agrasen Madhavi Charitable Trust */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-4">
                {t.home.organizations.madhavi.name}
              </h3>
              <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-base leading-snug md:leading-normal">
                {t.home.organizations.madhavi.chairman}
              </p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-base">
                {t.home.organizations.madhavi.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-1.5 md:mr-2">•</span>
                    <span className="leading-snug md:leading-normal">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chhattisgarh Provincial Mahila Agrawal Sangathan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-4">
                {t.home.organizations.mahila.name}
              </h3>
              <p className="text-gray-700 mb-1 md:mb-2 text-xs md:text-base leading-snug md:leading-normal">
                {t.home.organizations.mahila.president}
              </p>
              <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-base leading-snug md:leading-normal">
                {t.home.organizations.mahila.secretary}
              </p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-base">
                {t.home.organizations.mahila.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-1.5 md:mr-2">•</span>
                    <span className="leading-snug md:leading-normal">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chhattisgarh Provincial Youth Agrawal Organization */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-3 md:p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-4">
                {t.home.organizations.youth.name}
              </h3>
              <p className="text-gray-700 mb-2 md:mb-4 text-xs md:text-base leading-snug md:leading-normal">
                {t.home.organizations.youth.president}
              </p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-base">
                {t.home.organizations.youth.activities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-600 mr-1.5 md:mr-2">•</span>
                    <span className="leading-snug md:leading-normal">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-4 md:py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-6">
            {t.home.cta.title}
          </h2>
          <p className="text-xs md:text-xl mb-3 md:mb-8 max-w-2xl mx-auto leading-snug md:leading-normal text-justify">
            {t.home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-xs md:text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              {t.home.cta.contact}
            </a>
            <a
              href="https://abcdvyapar.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-xs md:text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              {t.home.cta.becomeMember}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
