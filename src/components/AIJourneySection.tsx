import React from 'react';
import { Brain, BookOpen, Code, TrendingUp } from 'lucide-react';

interface LearningItem {
  title: string;
  description: string;
  progress: number;
  category: 'studying' | 'practicing' | 'building';
  technologies: string[];
}

const learningItems: LearningItem[] = [
  {
    title: 'Python Fundamentals',
    description: 'Learning Python basics and getting comfortable with the syntax and common libraries.',
    progress: 40,
    category: 'studying',
    technologies: ['Python', 'Basic Syntax', 'Variables', 'Functions']
  },
  {
    title: 'Data Analysis Basics',
    description: 'Starting to understand how to work with data using Python libraries like Pandas.',
    progress: 25,
    category: 'studying',
    technologies: ['Pandas', 'NumPy', 'Basic Data Manipulation']
  },
  {
    title: 'ML Concepts (Very Basic)',
    description: 'Trying to understand what machine learning is about through online resources and tutorials.',
    progress: 15,
    category: 'studying',
    technologies: ['ML Concepts', 'Online Tutorials', 'Reading']
  },
  {
    title: 'Simple Python Projects',
    description: 'Building very basic Python scripts to practice programming and understand data structures.',
    progress: 30,
    category: 'practicing',
    technologies: ['Python Scripts', 'Basic Programming', 'Problem Solving']
  }
];

const AIJourneySection: React.FC = () => {
  const getCategoryIcon = (category: LearningItem['category']) => {
    switch (category) {
      case 'studying':
        return <BookOpen className="w-5 h-5" />;
      case 'practicing':
        return <Code className="w-5 h-5" />;
      case 'building':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: LearningItem['category']) => {
    switch (category) {
      case 'studying':
        return 'bg-blue-100 text-blue-800';
      case 'practicing':
        return 'bg-green-100 text-green-800';
      case 'building':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryText = (category: LearningItem['category']) => {
    switch (category) {
      case 'studying':
        return 'Learning';
      case 'practicing':
        return 'Practicing';
      case 'building':
        return 'Building';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI Curiosity
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm just getting curious about AI and machine learning. Very much a beginner, 
              but I find it interesting and want to understand the basics when I have time.
            </p>
          </div>
          
          <div className="space-y-6">
            {learningItems.map((item, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 mr-3">
                        {item.title}
                      </h3>
                      <span 
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}
                      >
                        {getCategoryIcon(item.category)}
                        <span className="ml-1">{getCategoryText(item.category)}</span>
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
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
            <div className="inline-flex items-center px-6 py-3 bg-purple-50 border border-purple-200 rounded-lg">
              <Brain className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">
                🤔 Just getting curious about AI - still very much learning the basics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJourneySection;
