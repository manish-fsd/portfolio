import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#30d5c8] to-[#94B0E9]'
    },
    {
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration features. Built with React, TypeScript, and Firebase.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#ff6700] to-[#30d5c8]'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with beautiful data visualizations and responsive design.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'Chart.js', 'MongoDB', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#94B0E9] to-[#ff6700]'
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps. Progressive Web App with offline capabilities.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'PWA', 'OpenWeather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#30d5c8] to-[#ff6700]'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing modern web development techniques with smooth animations and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#ff6700] to-[#94B0E9]'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and emoji support. Built with Socket.io and modern React.',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Socket.io', 'Node.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-[#94B0E9] to-[#30d5c8]'
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-purple-900/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating 
              exceptional digital experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-[#30d5c8]/50 transition-all duration-500 group-hover:scale-105">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    
                    {/* Project Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Github size={20} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#30d5c8] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-[#30d5c8]/20 to-[#ff6700]/20 text-[#30d5c8] rounded-full border border-[#30d5c8]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'} animation-delay-1000`}>
            <button className="px-8 py-4 bg-gradient-to-r from-[#30d5c8] to-[#ff6700] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                <Zap size={20} />
                View More Projects
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;