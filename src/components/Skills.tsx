import React from 'react';
import FadeInSection from './FadeInSection';
import { Code, Palette, Globe, Database, Layout, Figma, Github, Terminal } from 'lucide-react';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skillsList: SkillItem[] = [
    { name: 'JavaScript', icon: <Code size={20} /> },
    { name: 'React', icon: <Globe size={20} /> },
    { name: 'TypeScript', icon: <Code size={20} /> },
    { name: 'CSS/SCSS', icon: <Palette size={20} /> },
    { name: 'Node.js', icon: <Terminal size={20} /> },
    { name: 'UI/UX', icon: <Layout size={20} /> },
    { name: 'MongoDB', icon: <Database size={20} /> },
    { name: 'Figma', icon: <Figma size={20} /> },
    { name: 'Git', icon: <Github size={20} /> },
    { name: 'Next.js', icon: <Globe size={20} /> },
    { name: 'Tailwind', icon: <Palette size={20} /> },
    { name: 'GraphQL', icon: <Database size={20} /> },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-10 relative">
      <FadeInSection>
        <h2 className="font-pixel text-white text-xl md:text-2xl mb-12 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-electric">
          SKILLS // TOOLS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl">
          {skillsList.map((skill, index) => (
            <FadeInSection 
              key={skill.name} 
              delay={100 * index}
              className="border border-gray-800 p-4 hover:border-electric transition-colors duration-300 group"
            >
              <div className="flex items-center">
                <div className="mr-3 text-gray-400 group-hover:text-electric transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="font-terminal text-white text-lg">
                  {skill.name}
                </span>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Skills;