import React from 'react';
import { Users, Target, Award, Heart, BookOpen, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const initiatives = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t.home.initiatives.list.agraAlankaran.title,
      description: t.home.initiatives.list.agraAlankaran.description
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t.home.initiatives.list.sanjhaChulha.title,
      description: t.home.initiatives.list.sanjhaChulha.description
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.home.initiatives.list.mangalParinay.title,
      description: t.home.initiatives.list.mangalParinay.description
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: t.home.initiatives.list.educationLoan.title,
      description: t.home.initiatives.list.educationLoan.description
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: t.home.initiatives.list.agraPanchayat.title,
      description: t.home.initiatives.list.agraPanchayat.description
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t.home.abcdSection.title,
      description: t.home.abcdSection.description
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative bg-white py-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {t.about.title}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              {t.about.subtitle}
            </p>
            <p className="text-xl text-gray-600 mt-2">
              {t.cgpasFull}
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">{t.about.mission.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-500">
            <div className="flex items-center mb-4">
              <Heart className="w-10 h-10 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">{t.about.vision.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t.about.vision.description}
            </p>
          </div>
        </div>

        {/* About Organization */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {t.about.aboutOrg.title}
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              {t.about.aboutOrg.para1}
            </p>
            <p className="text-lg leading-relaxed mb-4">
              {t.about.aboutOrg.para2}
            </p>
            <p className="text-lg leading-relaxed">
              {t.about.aboutOrg.para3}
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t.about.leadership.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.leadership.leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                  {leader.name}
                </h3>
                <p className="text-sm text-orange-600 text-center font-semibold mb-1">
                  {leader.position}
                </p>
                {leader.location && (
                  <p className="text-xs text-gray-500 text-center mb-2">{leader.location}</p>
                )}
                {leader.organization && (
                  <p className="text-xs text-gray-500 text-center mb-2">{leader.organization}</p>
                )}
                {leader.description && (
                  <p className="text-xs text-gray-600 text-center italic">{leader.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {t.about.keyInitiatives.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-gradient-to-r from-orange-500 to-red-500">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            {t.about.contact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t.about.contact.office.title}</h3>
              <p className="text-sm text-gray-600" style={{ whiteSpace: 'pre-line' }}>
                {t.about.contact.office.address}
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t.about.contact.email.title}</h3>
              <p className="text-sm text-gray-600">
                cgpascg@gmail.com<br />
                agraalankaran@gmail.com
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{t.about.contact.event.title}</h3>
              <p className="text-sm text-gray-600" style={{ whiteSpace: 'pre-line' }}>
                {t.about.contact.event.details}
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">780+</div>
            <div className="text-gray-600 text-sm">{t.about.stats.marriages}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">1700+</div>
            <div className="text-gray-600 text-sm">{t.about.stats.members}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600 text-sm">{t.about.stats.awards}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">35+</div>
            <div className="text-gray-600 text-sm">{t.about.stats.service}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
