import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'project' | 'education';
}

const experiences: Experience[] = [
  {
    title: 'Student Government President',
    company: 'Cakrawala University',
    location: 'Central Jakarta, Indonesia',
    period: 'November 2024 - Present',
    description: [
      'Leading student government initiatives and representing student body',
      'Coordinating cross-functional teams and managing organizational projects',
      'Developing leadership skills while balancing academic and professional responsibilities',
      'Building systems and processes to improve student experience'
    ],
    technologies: ['Leadership', 'Project Management', 'Communication', 'Team Building'],
    type: 'education'
  },
  {
    title: 'Data Analyst Intern',
    company: 'Kilap Global Group',
    location: 'Jakarta, Indonesia',
    period: 'January 2025 - March 2025',
    description: [
      'Analyzing business data to provide insights for decision making',
      'Working with data processing and visualization tools',
      'Collaborating with cross-functional teams on data-driven projects',
      'Applying data science concepts learned in university'
    ],
    technologies: ['Data Analysis', 'Python', 'SQL', 'Data Visualization'],
    type: 'work'
  },
  {
    title: 'Software Engineer',
    company: 'PT E-Tirta Medical Centre',
    location: 'Jakarta, Indonesia',
    period: 'April 2024 - July 2024',
    description: [
      'Developed and maintained software systems for medical center operations',
      'Built backend services and APIs for healthcare applications',
      'Ensured system reliability and performance in production environment',
      'Collaborated with medical staff to understand requirements and deliver solutions'
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    type: 'work'
  },
  {
    title: 'Senior Backend Developer',
    company: 'NF Juara',
    location: 'Indonesia',
    period: 'March 2023 - March 2024',
    description: [
      'Led backend development initiatives and mentored junior developers',
      'Designed and implemented scalable system architectures',
      'Optimized database performance and API response times',
      'Collaborated with international teams on production systems'
    ],
    technologies: ['Node.js', 'Java Spring', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    type: 'work'
  },
  {
    title: 'Backend Developer',
    company: 'NF Juara',
    location: 'Indonesia',
    period: 'July 2021 - February 2023',
    description: [
      'Developed RESTful APIs and GraphQL services for web applications',
      'Implemented database schemas and optimized query performance',
      'Built reliable backend systems handling production traffic',
      'Participated in code reviews and maintained high code quality standards'
    ],
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'GraphQL', 'CI/CD'],
    type: 'work'
  },
  {
    title: 'Backend Mentor & Instructor',
    company: 'QarirLabs',
    location: 'West Java, Indonesia',
    period: 'January 2022 - June 2022',
    description: [
      'Mentored students in backend development concepts and best practices',
      'Created curriculum and teaching materials for backend development courses',
      'Provided guidance on software engineering principles and system design',
      'Helped students build their first production-ready applications'
    ],
    technologies: ['Teaching', 'Mentoring', 'Node.js', 'Java', 'System Design'],
    type: 'education'
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Experience & Background
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            My journey in software development, from learning to building production applications.
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="font-medium">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="mx-2">•</span>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                      <span 
                        className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'work' 
                            ? 'bg-green-100 text-green-800' 
                            : exp.type === 'project'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {exp.type === 'work' ? 'Work' : exp.type === 'project' ? 'Project' : 'Education'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to know more about my experience and projects?
            </p>
            <a
              href="/assets/cv.pdf"
              download
              className="btn-primary inline-flex items-center"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Download Complete Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
