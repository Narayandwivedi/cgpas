import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguagePrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // Check if user has already seen the prompt
    const hasSeenPrompt = localStorage.getItem('cgpas-language-prompt-seen');

    if (!hasSeenPrompt) {
      // Show the prompt after a brief delay
      setTimeout(() => {
        setIsVisible(true);
      }, 500);

      // Auto-hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('cgpas-language-prompt-seen', 'true');
      }, 5500);
    }
  }, []);

  const handleSwitchToEnglish = () => {
    setLanguage('en');
    setIsVisible(false);
    localStorage.setItem('cgpas-language-prompt-seen', 'true');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('cgpas-language-prompt-seen', 'true');
  };

  if (!isVisible || language === 'en') {
    return null;
  }

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-md px-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl border-2 border-orange-500 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="bg-orange-100 p-2 rounded-full">
              <svg
                className="w-5 h-5 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 mb-1">
                English में देखने के लिए यहां क्लिक करें
              </p>
              <p className="text-xs text-gray-600">
                Click here to view in English
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 ml-2"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleSwitchToEnglish}
            className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors duration-200"
          >
            Switch to English
          </button>
          <button
            onClick={handleDismiss}
            className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors duration-200"
          >
            हिंदी में रहें
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguagePrompt;
