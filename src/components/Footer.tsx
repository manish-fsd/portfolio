import React from 'react';
import { Heart, Instagram, MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 to-purple-900 py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#ff6700] mb-4">Manish Yogi</h3>
              <p className="text-gray-400 mb-4">
                Full Stack Engineer passionate about creating exceptional digital experiences.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://instagram.com/yogimanish367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl glow-on-hover"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://wa.me/919799660840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl glow-on-hover"
                >
                  <MessageCircle size={20} className="text-white" />
                </a>
                <a
                  href="mailto:manish.yogi@example.com"
                  className="p-3 bg-gradient-to-r from-[#ff6700] to-[#30d5c8] rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl glow-on-hover"
                >
                  <Mail size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#30d5c8] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-[#ff6700] transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-[#30d5c8] mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>manish.yogi@example.com</p>
                <p>+91 9799660840</p>
                <p>India</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 flex items-center gap-2">
                Made with <Heart size={16} className="text-[#ff6700] animate-pulse" /> by Manish Yogi
              </p>
              <p className="text-gray-400">
                © 2024 Manish Yogi. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-[#ff6700] to-[#30d5c8] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 glow-on-hover"
      >
        <ArrowUp size={24} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;