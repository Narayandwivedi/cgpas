import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to CGPAS
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Chhattisgarh Prantiya Agrawal Sangathan
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering the Agrawal community through unity, growth, and development.
              Join us in our mission to create a stronger and more prosperous community.
            </p>
          </div>
        </div>
      </section>

      {/* About CGPAS Section */}
      <section className="py-16 bg-white border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-gray-900 rounded-xl p-8 md:p-12 bg-gradient-to-br from-orange-50 to-white shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About CGPAS
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chhattisgarh Prantiya Agrawal Sangathan (CGPAS) is the parent wing
                dedicated to the growth and prosperity of the Agrawal community in
                Chhattisgarh. We are committed to fostering unity, promoting business
                development, and creating opportunities for all Agrawals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As the umbrella organization, CGPAS oversees and supports various
                smaller sangathans and initiatives, working together to strengthen
                our community bonds and drive collective progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABCD Section */}
      <section className="py-16 bg-gray-50 border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-4 border-gray-900 rounded-xl p-8 md:p-12 bg-white shadow-xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ABCD - Agrawal Business and Community Development
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                ABCD (Agrawal Business and Community Development) is one of the key
                initiatives under CGPAS. It focuses on empowering Agrawal
                entrepreneurs and businesses through networking, resources, and
                collaborative opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="border-2 border-gray-300 p-6 rounded-lg hover:border-orange-500 transition-all duration-300 bg-orange-50">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Businesses
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 text-base">
                  Connect with vendors, expand your network, and grow your
                  business through our extensive community platform.
                </p>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 text-xl font-bold">✓</span>
                    <span>Access to verified vendors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 text-xl font-bold">✓</span>
                    <span>Business networking opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 text-xl font-bold">✓</span>
                    <span>Community support and resources</span>
                  </li>
                </ul>
                <a
                  href="https://vendor.abcdvyapar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-900 text-white text-center px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Join as Vendor
                </a>
              </div>

              <div className="border-2 border-gray-300 p-6 rounded-lg hover:border-orange-500 transition-all duration-300 bg-orange-50">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    For Members
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 text-base">
                  Join as a member to access exclusive benefits, events, and
                  opportunities within the Agrawal community.
                </p>
                <ul className="text-gray-700 space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 text-xl font-bold">✓</span>
                    <span>Exclusive member benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 text-xl font-bold">✓</span>
                    <span>Community events and programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-3 text-xl font-bold">✓</span>
                    <span>Professional networking</span>
                  </li>
                </ul>
                <a
                  href="https://abcdvyapar.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Join as Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Initiatives Section */}
      <section className="py-16 bg-white border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Initiatives
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Building
              </h3>
              <p className="text-gray-600">
                Strengthening bonds within the Agrawal community through events
                and initiatives
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Business Growth
              </h3>
              <p className="text-gray-600">
                Supporting entrepreneurship and business development within our
                community
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Education & Training
              </h3>
              <p className="text-gray-600">
                Providing resources and training programs for skill development
                and growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
