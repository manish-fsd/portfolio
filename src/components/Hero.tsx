import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFireworks, setShowFireworks] = useState(false);

  const fullText = "Full Stack Engineer";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFireworks(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#30d5c8] to-[#94B0E9] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-[#ff6700] to-[#30d5c8] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-[#94B0E9] to-[#ff6700] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Fireworks */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="firework firework-1"></div>
          <div className="firework firework-2"></div>
          <div className="firework firework-3"></div>
        </div>
      )}

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fadeInUp">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-[#30d5c8] to-[#ff6700] p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-800">
                  <img 
                    src="/WhatsApp Image manish.jpg" 
                    alt="Manish Yogi" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#30d5c8] rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#ff6700] rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="animate-fadeInUp animation-delay-500">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#30d5c8] via-[#ff6700] to-[#94B0E9] bg-clip-text text-transparent animate-gradient">
              Manish Yogi
            </h1>
            <div className="text-2xl md:text-3xl font-medium mb-8 text-gray-300 h-12 flex items-center justify-center">
              <span className="typing-cursor">
                {displayText}
                <span className="cursor-blink">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="animate-fadeInUp animation-delay-1000">
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about building scalable web applications that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fadeInUp animation-delay-1500 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-[#ff6700] to-[#30d5c8] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={20} />
                Explore My Work
              </span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-[#30d5c8] text-[#30d5c8] font-semibold rounded-full hover:bg-[#30d5c8] hover:text-white transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Zap size={20} />
                Get In Touch
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#30d5c8] animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;