import React from 'react';

const VoiceOfAbcd = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              Voice of ABCD
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Official Magazine of Akhil Bhartiya Chhattisgarh Vyapar
            </p>
          </div>

          {/* Magazine Image with Coming Soon Overlay */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Magazine Image */}
              <img
                src="/voice of abcd.webp"
                alt="Voice of ABCD Magazine"
                className="relative w-full rounded-lg shadow-2xl border-4 border-white"
              />

              {/* Coming Soon Overlay - Animated */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg px-8 py-6 md:px-12 md:py-8 transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4 animate-pulse">
                    Coming Soon
                  </h2>
                  <p className="text-white text-sm md:text-base text-center">
                    Stay tuned for updates!
                  </p>
                </div>
              </div>

              {/* Animated Corner Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg animate-bounce">
                  <p className="text-xs md:text-sm font-bold">New Release</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceOfAbcd;
