import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r- from-orange-600 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-1">
              About Us
            </h1>
            <p className="text-xl text-white">
              Learn more about Chhattisgarh Prantiya Agrawal Sangathan
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Chhattisgarh Prantiya Agrawal Sangathan (CGPAS) is the premier
                organization dedicated to the welfare, growth, and prosperity of
                the Agrawal community in Chhattisgarh. As a parent wing, we serve
                as the umbrella organization that oversees and supports various
                smaller sangathans and community initiatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to unite the Agrawal community, foster
                collaboration, and create opportunities for collective growth and
                development across all spheres of life.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a unified, prosperous, and empowered Agrawal community
                in Chhattisgarh, where every member has access to opportunities
                for personal and professional growth, and where our rich cultural
                heritage is preserved and celebrated.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-4 mt-1 shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Community Unity:</strong> Strengthen bonds among
                    Agrawal families across Chhattisgarh through regular events,
                    gatherings, and cultural programs.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-4 mt-1 shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Business Development:</strong> Support and promote
                    entrepreneurship and business growth within the community
                    through networking and resource sharing.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-4 mt-1 shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Education & Skill Development:</strong> Provide
                    resources, training programs, and educational support to help
                    community members achieve their full potential.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-1 mr-4 mt-1 shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cultural Preservation:</strong> Preserve and promote
                    our rich Agrawal heritage, traditions, and values for future
                    generations.
                  </p>
                </li>
              </ul>
            </div>

            {/* Our Initiatives */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Initiatives
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ABCD - Agrawal Business and Community Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our flagship initiative focused on empowering Agrawal
                    entrepreneurs and businesses. ABCD provides a platform for
                    networking, vendor connections, and business growth
                    opportunities. Through ABCD, we connect businesses with
                    trusted vendors and help community members find reliable
                    business partners.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Community Events & Programs
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We regularly organize cultural events, festivals, seminars,
                    and networking meets to bring our community together and
                    strengthen our bonds.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Youth Development Programs
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Special programs and initiatives aimed at nurturing the next
                    generation of leaders and entrepreneurs within the Agrawal
                    community.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
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
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Unity
                    </h3>
                    <p className="text-gray-600">
                      Bringing our community together as one family
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Integrity
                    </h3>
                    <p className="text-gray-600">
                      Upholding trust and transparency in all we do
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Progress
                    </h3>
                    <p className="text-gray-600">
                      Continuously striving for growth and development
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Service
                    </h3>
                    <p className="text-gray-600">
                      Dedicated to serving our community with passion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
