import React from 'react';

const VoiceOfAbcd = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
              Voice of ABCD - Official Magazine of Agrawal Business and Community Development
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              (A unit of Chhattisgarh Prantiya Agrawal Sammelan (Sangathan))
            </p>
          </div>

          {/* Magazine Image with Coming Soon Badge */}
          <div className="max-w-4xl mx-auto">
            {/* Coming Soon Badge - Outside the banner on top edge */}
            <div className="flex justify-center mb-[-10px] relative z-10">
              <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg px-6 py-3 md:px-8 md:py-4 shadow-xl">
                <h2 className="text-lg md:text-2xl font-bold text-white text-center">
                  Coming Soon
                </h2>
              </div>
            </div>

            <div className="relative group">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Magazine Image */}
              <img
                src="/voice of abcd.webp"
                alt="Voice of ABCD Magazine"
                className="relative w-full rounded-lg shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceOfAbcd;
