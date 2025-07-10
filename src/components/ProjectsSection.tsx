import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS. Features modern design, smooth animations, and optimized performance. Showcases my projects and journey in software development.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    githubUrl: 'https://github.com/sayyidhaidar/portfolio',
    liveUrl: 'https://sayyid.dev',
    status: 'completed'
  },
  {
    title: 'Task Management Web App',
    description: 'Full-stack task management application with user authentication, real-time updates, and responsive design. Built with React frontend and Node.js backend with PostgreSQL database.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Socket.io'],
    githubUrl: 'https://github.com/sayyidhaidar/task-manager',
    status: 'completed'
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather application that provides current weather conditions and 5-day forecasts. Features location-based weather data, responsive design, and clean user interface.',
    technologies: ['React', 'JavaScript', 'Weather API', 'CSS3', 'Geolocation API'],
    githubUrl: 'https://github.com/sayyidhaidar/weather-app',
    liveUrl: 'https://weather-app-sayyid.vercel.app',
    status: 'completed'
  },
  {
    title: 'AI Image Classifier',
    description: 'Machine learning project using TensorFlow to classify images. Built as part of my AI learning journey, featuring a web interface for uploading and classifying images with trained models.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'OpenCV', 'NumPy', 'HTML/CSS'],
    githubUrl: 'https://github.com/sayyidhaidar/image-classifier',
    status: 'in-progress'
  }
];

const ProjectsSection: React.FC = () => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to the developer community.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                  >
                    {getStatusText(project.status)}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5 mr-1" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                  
                  {project.status === 'completed' && (
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/sayyidhaidar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit My GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
