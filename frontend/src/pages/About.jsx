import React from 'react';
import { Users, Target, Award, Heart, BookOpen, Building2 } from 'lucide-react';

export default function About() {
  const leaders = [
    {
      name: "Dr. Ashok Agarwal",
      position: "President (2024-2027)",
      location: "Raipur",
      description: "Leading the organization with 35+ years of social service experience"
    },
    {
      name: "Shri Pradeep Mittal",
      position: "National Chairman",
      organization: "Akhil Bhartiya Agarwal Sangathan",
      description: "Providing guidance and support to provincial organizations"
    },
    {
      name: "Shri Siyaram Agarwal",
      position: "National Working President",
      organization: "Akhil Bhartiya Agarwal Sangathan",
      description: "Active leadership in national-level initiatives"
    },
    {
      name: "Smt. Ganga Agarwal",
      position: "Provincial Women's President",
      organization: "CG Provincial Mahila Agarwal Sangathan",
      description: "Leading women empowerment and social welfare programs"
    },
    {
      name: "Shri Sanjay Agarwal",
      position: "Provincial Mahamantri",
      location: "Raipur",
      description: "General Secretary coordinating organizational activities"
    },
    {
      name: "Shri Ashok Modi",
      position: "Provincial Working President",
      location: "Korba",
      description: "Supporting provincial operations and initiatives"
    },
    {
      name: "Shri Rajendra Agarwal",
      position: "Provincial Working President",
      location: "Bilaspur",
      description: "Overseeing regional activities and member engagement"
    },
    {
      name: "Smt. Nidhi Agarwal",
      position: "Provincial Mahila Mahamantri",
      organization: "Women's Wing",
      description: "Coordinating women-focused programs and initiatives"
    }
  ];
      

  const initiatives = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Agra Alankaran Samaroh",
      description: "Annual event honoring excellence in education, business, social service, and various fields with 18 different award categories"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Agrasen Sanjha Chulha",
      description: "Service initiative providing subsidized meals and daily necessities to needy families at 50% cost"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mangal Pariṇay Yojana",
      description: "Marriage facilitation program that has successfully arranged 780+ alliances through online platforms"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interest-Free Education Loans",
      description: "Through Shri Agrasen Charitable Trust, providing up to ₹2 lakhs interest-free loans for higher education"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Agra Panchayat",
      description: "Dispute resolution committees established across the state to resolve family and community matters"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "ABCD - Business Development",
      description: "Agarwal Business & Community Development connecting 1700+ members for mutual business growth"
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
              About CGPAS
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Chhattisgarh Prantiya Agrawal Sangathan
            </p>
            <p className="text-xl text-gray-600 mt-2">
              छत्तीसगढ़ प्रांतीय अग्रवाल संगठन
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
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To unite and strengthen the Agarwal community across Chhattisgarh through social service, 
              education, healthcare, and cultural preservation. We are committed to serving society with 
              the spirit of "Service is not a resolution, but a commitment" - following the footsteps of 
              Maharaja Agrasen's 18 principles.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-red-500">
            <div className="flex items-center mb-4">
              <Heart className="w-10 h-10 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create a self-reliant, organized, and progressive Agarwal community that contributes 
              to social welfare while preserving cultural heritage. We envision a society where no one's 
              plate remains empty - embodying the principle of "सेवा ही संगठन है" (Service is Organization).
            </p>
          </div>
        </div>

        {/* About Organization */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About Our Organization
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              The Chhattisgarh Prantiya Agrawal Sangathan (CGPAS) is a premier social organization
              dedicated to uniting and empowering the Agrawal community across Chhattisgarh. Established
              with the vision of preserving our rich cultural heritage while promoting modern development,
              we serve as a bridge between tradition and progress.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Under the able leadership of Dr. Ashok Agarwal (President 2024-2027) and guided by the 
              principles of Maharaja Agrasen, our organization has been serving society for over 35 years. 
              We operate through a network of district-level committees across all major cities of Chhattisgarh 
              including Raipur, Bilaspur, Durg, Korba, Rajnandgaon, and many others.
            </p>
            <p className="text-lg leading-relaxed">
              Our motto "सेवा ही संगठन है" (Service is Organization) reflects our commitment to social welfare. 
              We believe in the philosophy of "किसी की थाली खाली न रहे" (No one's plate should remain empty) 
              and work tirelessly to ensure that every member of our community has access to education, 
              healthcare, and opportunities for growth.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
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
            Our Key Initiatives
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
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Provincial Office</h3>
              <p className="text-sm text-gray-600">
                Shri Hanuman Market, Ramsagar Para<br />
                Raipur, Chhattisgarh<br />
                Phone: 0771 4032100
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">
                cgpascg@gmail.com<br />
                agraalankaran@gmail.com
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Event Date</h3>
              <p className="text-sm text-gray-600">
                9th Agra Alankaran Ceremony<br />
                August 28, 2025 (Thursday)<br />
                S.N. Palace, Raipur
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">780+</div>
            <div className="text-gray-600 text-sm">Marriages Arranged</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">1700+</div>
            <div className="text-gray-600 text-sm">ABCD Members</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-gray-600 text-sm">Award Categories</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">35+</div>
            <div className="text-gray-600 text-sm">Years of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}