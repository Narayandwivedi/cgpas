import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { toast } from 'react-toastify';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  const API_URL = `${BACKEND_URL}/api`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '', // Changed from phone to mobile
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessageSent(false);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageSent(true);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          message: '',
        });
        toast.success('Your message has been sent successfully!');
      } else {
        setError(data.message || 'Failed to send message.');
        toast.error(data.message || 'Failed to send message.');
      }
    } catch (err) {
      setError('An error occurred while sending your message.');
      toast.error('An error occurred while sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Quick Links Section */}
      <section className="py-3 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center items-center">
            <a
              href="/suggestions"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-base"
            >
              <svg className="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Do you have any suggestion? Suggest here
            </a>
            <a
              href="/complaint"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg text-xs md:text-base"
            >
              <svg className="w-3 h-3 md:w-5 md:h-5 mr-1.5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Do you have any complaint? Complaint here
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-4 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-3 md:gap-12">
            {/* Contact Information */}
            <div className="order-2 md:order-1">
              <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-2 md:mb-6">
                {t.contact.info.title}
              </h2>
              <p className="text-xs md:text-lg text-gray-700 mb-3 md:mb-8 leading-snug md:leading-relaxed">
                {t.contact.info.description}
              </p>

              <div className="space-y-2 md:space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-1.5 md:p-3 mr-2 md:mr-4">
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-1">
                      Address
                    </h3>
                    <p className="text-[10px] md:text-base text-gray-700 leading-tight md:leading-normal">
                      Hanuman Market, Ramsagar Para,<br />
                      RAIPUR CG 492001
                    </p>
                  </div>
                </div>

                {/* Email and Phone - Same row on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-lg p-1.5 md:p-3 mr-2 md:mr-4">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-1">
                        {t.contact.info.email}
                      </h3>
                      <a
                        href="mailto:cgpascg@gmail.com"
                        className="text-orange-600 hover:text-orange-700 transition-colors duration-200 text-[10px] md:text-base"
                      >
                        cgpascg@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-lg p-1.5 md:p-3 mr-2 md:mr-4">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-1">
                        {t.contact.info.phone}
                      </h3>
                      <a
                        href="tel:07713562323"
                        className="text-orange-600 hover:text-orange-700 transition-colors duration-200 text-[10px] md:text-base block"
                      >
                        0771- 3562323
                      </a>
                      <a
                        href="tel:+919993961778"
                        className="text-orange-600 hover:text-orange-700 transition-colors duration-200 text-[10px] md:text-base block"
                      >
                        +91 9993961778
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-1.5 md:p-3 mr-2 md:mr-4">
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-0.5 md:mb-1">
                      {t.contact.info.officeHours}
                    </h3>
                    <p className="text-gray-700 text-[10px] md:text-base leading-tight md:leading-normal">{t.contact.info.days}</p>
                    <p className="text-gray-700 text-[10px] md:text-base leading-tight md:leading-normal">{t.contact.info.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Media or Additional Info */}
              <div className="mt-3 md:mt-8 p-2 md:p-6 bg-orange-50 rounded-lg">
                <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-1 md:mb-3">
                  {t.contact.info.joinCommunity.title}
                </h3>
                <p className="text-[10px] md:text-base text-gray-700 mb-2 md:mb-4 leading-tight md:leading-normal">
                  {t.contact.info.joinCommunity.description}
                </p>
                <a
                  href="https://abcdvyapar.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-600 text-white px-3 py-1.5 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-xs md:text-base"
                >
                  {t.contact.info.joinCommunity.cta}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-lg shadow-md p-3 md:p-8">
                <h2 className="text-base md:text-2xl font-bold text-gray-900 mb-2 md:mb-6">
                  {t.contact.form.title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      {t.contact.form.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.form.placeholders.name}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      {t.contact.form.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.form.placeholders.email}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      {t.contact.form.phoneNumber}
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.form.placeholders.phone}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      {t.contact.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder={t.contact.form.placeholders.subject}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder={t.contact.form.placeholders.message}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-2 px-4 md:py-3 md:px-6 text-xs md:text-base rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    {t.contact.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
