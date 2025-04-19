import React from 'react';
import FadeInSection from './FadeInSection';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "NeoTerm",
      description: "A customizable terminal emulator with advanced features for developers",
      image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "Electron"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "PixelMind",
      description: "AI-powered pixel art generator with customizable parameters",
      image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["TypeScript", "TensorFlow.js", "Canvas API"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "GridFusion",
      description: "Interactive grid-based layout builder for web developers",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["JavaScript", "CSS Grid", "LocalStorage API"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "RetroWave",
      description: "Synthesizer and music generator with 80s aesthetics",
      image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Web Audio API", "React", "Three.js"],
      links: {
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-10 relative">
      <FadeInSection>
        <h2 className="font-pixel text-white text-xl md:text-2xl mb-12 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-electric">
          PROJECTS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {projects.map((project, index) => (
            <FadeInSection 
              key={project.title}
              delay={150 * index}
              className="relative group"
            >
              <div className="border border-gray-800 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-pixel text-white text-lg mb-2">{project.title}</h3>
                  <p className="font-terminal text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="font-terminal text-xs px-2 py-1 border border-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-electric transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-electric transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;