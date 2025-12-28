import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import LanguagePrompt from './component/LanguagePrompt';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AllNews from './pages/news/AllNews';
import CGNews from './pages/news/CGNews';
import NationalNews from './pages/news/NationalNews';
import InternationalNews from './pages/news/InternationalNews';
import Gallery from './pages/Gallery';
import ExecutiveBody from './pages/ExecutiveBody';
import Branch from './pages/Branch';
import VoiceOfAbcd from './pages/VoiceOfAbcd';
import Suggestion from './pages/Suggestion';
import Complaint from './pages/Complaint';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Testing Banner */}
          <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black py-2 md:py-3 overflow-hidden z-50 flex items-center justify-center">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-xs md:text-sm font-semibold mx-4">
                ⚠️ This website is under testing and will be live sooner ⚠️
              </span>
              <span className="text-xs md:text-sm font-semibold mx-4">
                ⚠️ This website is under testing and will be live sooner ⚠️
              </span>
              <span className="text-xs md:text-sm font-semibold mx-4">
                ⚠️ This website is under testing and will be live sooner ⚠️
              </span>
              <span className="text-xs md:text-sm font-semibold mx-4">
                ⚠️ This website is under testing and will be live sooner ⚠️
              </span>
            </div>
          </div>
          {/* Spacer for fixed banner */}
          <div className="h-10 md:h-12"></div>
          <Navbar />
          <LanguagePrompt />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/news" element={<AllNews />} />
              <Route path="/news/cg" element={<CGNews />} />
              <Route path="/news/national" element={<NationalNews />} />
              <Route path="/news/international" element={<InternationalNews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/executive-body" element={<ExecutiveBody />} />
              <Route path="/branches" element={<Branch />} />
              <Route path="/voice-of-abcd" element={<VoiceOfAbcd />} />
              <Route path="/suggestions" element={<Suggestion />} />
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/admin/login" element={<div>Admin Login</div>} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
