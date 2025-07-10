import React from 'react';
import { Code, Database, Globe, Server, Settings, Brain } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: <Server className="w-6 h-6" />,
    skills: ['Java Spring', 'Node.js', 'Laravel', 'Express.js', 'RESTful APIs', 'GraphQL', 'Microservices']
  },
  {
    title: 'Database & Storage',
    icon: <Database className="w-6 h-6" />,
    skills: ['PostgreSQL', 'Redis', 'Database Design', 'Query Optimization', 'Data Modeling', 'SQL']
  },
  {
    title: 'DevOps & Infrastructure',
    icon: <Settings className="w-6 h-6" />,
    skills: ['Docker', 'AWS', 'CI/CD', 'System Architecture', 'Performance Optimization', 'Monitoring']
  },
  {
    title: 'Data Science & Analytics',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Python', 'Data Analysis', 'Statistical Analysis', 'Data Visualization', 'Research Methods']
  },
  {
    title: 'System Design & Architecture',
    icon: <Globe className="w-6 h-6" />,
    skills: ['System Architecture', 'Scalable Systems', 'API Design', 'Performance Tuning', 'Load Balancing']
  },
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL']
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build modern applications.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="card p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
