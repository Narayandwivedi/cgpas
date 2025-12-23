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

      {/* Our Key Initiatives Section */}
      <section className="py-16 bg-white border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Initiatives & Programs
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Annual Agra Alankaran */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Annual Agra Alankaran
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Annual awards ceremony honoring distinguished members in 18 categories including education, business, social service, arts, sports, and more. Recognizing excellence across the community.
              </p>
            </div>

            {/* Agra Panchayat */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Agra Panchayat Committee
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dispute resolution system handling marriage, divorce, property, and family matters. Thousands of cases resolved peacefully with guidance from retired High Court judges and senior community members.
              </p>
            </div>

            {/* Mangal Parinay */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Mangal Parinay Yojana
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Matrimonial alliance program with 15+ WhatsApp groups. Over 780 successful matches facilitated. Annual online meet with 800+ participants including 75 from abroad.
              </p>
            </div>

            {/* Interest-Free Education Loan */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interest-Free Education Loan
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Through Shri Agrasen Charitable Trust, providing interest-free loans up to ₹2 lakhs for higher education to deserving students of all castes and religions. Repayable in easy monthly installments after securing employment.
              </p>
            </div>

            {/* Ambulance Support */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ambulance Support Scheme
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                50% subsidy on ambulance purchase for public use through Shri Agrasen Charitable Trust. Local Agrawal sabhas maintain and operate the ambulances jointly with the trust.
              </p>
            </div>

            {/* Agra Kanya Vivah */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Shri Agrasen Kanya Vivah
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mass wedding ceremonies for community members. Grand arrangements at affordable rates of ₹2 lakh per wedding at Hotel Entry Point, including all facilities and a magnificent celebration for daughters' marriages.
              </p>
            </div>

            {/* Free Mass Weddings */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Free Mass Wedding Program
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Completely free wedding ceremonies for economically weaker sections and orphan girls. 51 couples married in 2025 at Hotel Entry Point, and 21 couples in Saraipali area with all arrangements provided free of cost.
              </p>
            </div>

            {/* Agra Sanjha Chulha */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Agra Sanjha Chulha
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Service not Charity" - Supporting needy families with 50% subsidy on groceries and daily essentials from designated stores. Currently serving 10+ families with dignity and respect, maintaining confidential records.
              </p>
            </div>

            {/* COVID Relief Fund */}
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                COVID Relief Support
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                ₹10 lakh fund created in Chhattisgarh to support COVID-affected families with financial assistance during their time of need. Many families have benefited from this humanitarian initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-16 bg-gray-50 border-t-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Organizations
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shri Agrasen Charitable Trust */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Shri Agrasen Charitable Trust
              </h3>
              <p className="text-gray-700 mb-4">
                Chairman: Shri Sunil Ramdas Agrawal
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Interest-free education loans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Ambulance subsidy program</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Healthcare support initiatives</span>
                </li>
              </ul>
            </div>

            {/* Raipur District Mahila Agrawal Sangathan */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Raipur District Mahila Agrawal Sangathan
              </h3>
              <p className="text-gray-700 mb-4">
                President: Smt. Priyanka Agrawal
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Women empowerment programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Cultural and religious events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>Social welfare activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a thriving community dedicated to growth, unity, and prosperity.
            Together, we can achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="https://abcdvyapar.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;