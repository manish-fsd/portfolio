import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle, Heart } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-purple-900/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50">
                  <h3 className="text-2xl font-semibold text-[#30d5c8] mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#ff6700]/20 rounded-full">
                        <Mail size={24} className="text-[#ff6700]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Email</h4>
                        <p className="text-gray-400">manish.yogi@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#30d5c8]/20 rounded-full">
                        <Phone size={24} className="text-[#30d5c8]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Phone</h4>
                        <p className="text-gray-400">+91 9799660840</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#94B0E9]/20 rounded-full">
                        <MapPin size={24} className="text-[#94B0E9]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Location</h4>
                        <p className="text-gray-400">India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect With Me - Bling Style */}
                <div className="bg-gradient-to-r from-black to-gray-900 p-8 rounded-xl backdrop-blur-sm border-2 border-white/20 relative overflow-hidden">
                  {/* Bling Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                  
                  <div className="relative z-10">
                    {/* Header with Hearts */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Heart size={20} className="text-red-500 animate-pulse" />
                      <h3 className="text-2xl font-bold text-white tracking-wider">
                        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-gradient">
                          Connect With Me
                        </span>
                      </h3>
                      <Heart size={20} className="text-red-500 animate-pulse" />
                    </div>
                    
                    {/* Underline with bling effect */}
                    <div className="relative mb-8">
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto w-3/4"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-500"></div>
                      <div className="absolute top-0 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                    </div>
                    
                    {/* Social Links with Bling */}
                    <div className="flex gap-6 justify-center">
                      <a
                        href="https://instagram.com/yogimanish367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 bg-gradient-to-r from-gray-800 to-black rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-110 overflow-hidden"
                      >
                        {/* Bling effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                        <Instagram size={24} className="text-white relative z-10 group-hover:text-pink-300 transition-colors duration-300" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                      </a>
                      
                      <a
                        href="https://wa.me/919799660840"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 bg-gradient-to-r from-gray-800 to-black rounded-full border-2 border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-110 overflow-hidden"
                      >
                        {/* Bling effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                        <MessageCircle size={24} className="text-white relative z-10 group-hover:text-green-300 transition-colors duration-300" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                      </a>
                    </div>
                    
                    {/* MyOgi Style Text */}
                    <div className="text-center mt-6">
                      <p className="text-white/80 text-sm tracking-widest font-light">
                        <span className="inline-flex items-center gap-1">
                          <Heart size={12} className="text-red-400 animate-pulse" />
                          <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            myogi
                          </span>
                          <Heart size={12} className="text-red-400 animate-pulse" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-[#30d5c8] mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="floating-input-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="floating-input"
                      placeholder=" "
                    />
                    <label className="floating-label">Your Name</label>
                  </div>

                  <div className="floating-input-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="floating-input"
                      placeholder=" "
                    />
                    <label className="floating-label">Your Email</label>
                  </div>

                  <div className="floating-input-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="floating-input resize-none"
                      placeholder=" "
                    ></textarea>
                    <label className="floating-label">Your Message</label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#ff6700] to-[#30d5c8] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <Send size={20} />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'} animation-delay-1000`}>
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-400 mb-6">
                I'm always excited to work on new challenges and create something extraordinary together.
              </p>
              <div className="flex items-center justify-center gap-2 text-[#ff6700]">
                <Heart size={20} />
                <span>Let's make magic happen!</span>
                <Heart size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;