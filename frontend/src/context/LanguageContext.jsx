import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Default language is Hindi
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('cgpas-language');
    return savedLanguage || 'hi';
  });

  useEffect(() => {
    localStorage.setItem('cgpas-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'hi' ? 'en' : 'hi');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
