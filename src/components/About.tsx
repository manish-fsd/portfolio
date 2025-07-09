import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, Cpu, Zap, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { icon: <Code2 size={24} />, name: 'Frontend Development', description: 'React, TypeScript, Next.js' },
    { icon: <Database size={24} />, name: 'Backend Development', description: 'Node.js, Python, PostgreSQL' },
    { icon: <Globe size={24} />, name: 'Web Technologies', description: 'HTML5, CSS3, JavaScript ES6+' },
    { icon: <Cpu size={24} />, name: 'DevOps & Cloud', description: 'AWS, Docker, CI/CD' },
    { icon: <Zap size={24} />, name: 'Performance', description: 'Optimization, SEO, Core Web Vitals' },
    { icon: <Heart size={24} />, name: 'UI/UX Design', description: 'Figma, Responsive Design' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-purple-900/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate Full Stack Engineer who loves turning complex problems into simple, 
              beautiful solutions. With expertise in modern web technologies, I create digital experiences 
              that are both functional and delightful.
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Story */}
            <div className={`${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50">
                  <h3 className="text-2xl font-semibold text-[#30d5c8] mb-4">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Started my coding journey with a curiosity about how things work on the internet. 
                    Over the years, I've evolved from writing my first "Hello World" to building 
                    scalable web applications that serve thousands of users.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50">
                  <h3 className="text-2xl font-semibold text-[#ff6700] mb-4">My Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I believe in writing clean, maintainable code and creating user-centered designs. 
                    Every project is an opportunity to learn something new and push the boundaries 
                    of what's possible with modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className={`${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-[#30d5c8]/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-[#ff6700] group-hover:text-[#30d5c8] transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'} animation-delay-1000`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#30d5c8] mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;