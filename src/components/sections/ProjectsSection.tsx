import React, { useState, useMemo } from 'react';
import { Container } from '../layout/Container';
import { Section, SectionHeader } from '../ui/Section';
import { ProjectCard } from '../ui/ProjectCard';
import { ScrollReveal } from '../ui/ScrollReveal';
import { cn } from '../../lib/cn';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Hooks must be called before any conditional returns
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  // Get unique categories from projects
  const categories = useMemo(() => {
    if (!projects || projects.length === 0) return ['All'];
    const cats = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(cats).sort()];
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  // Get featured projects count
  const featuredCount = useMemo(() => {
    if (!projects) return 0;
    return projects.filter((p) => p.featured).length;
  }, [projects]);

  // Don't render section if no projects
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <Section id="projects" background="gray">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader
            title="Featured Projects"
            subtitle={`${featuredCount} featured projects and ${projects.length - featuredCount} open source contributions showcasing my expertise in backend engineering, AI integration, and system architecture`}
          />
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              const count = category === 'All' 
                ? projects.length 
                : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  onMouseEnter={() => setHoveredFilter(category)}
                  onMouseLeave={() => setHoveredFilter(null)}
                  className={cn(
                    'relative px-4 py-2 rounded-full text-sm font-medium',
                    'transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
                    isActive
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <span>{category}</span>
                  <span
                    className={cn(
                      'ml-2 text-xs px-1.5 py-0.5 rounded-full',
                      'transition-colors duration-200',
                      isActive
                        ? 'bg-white/20 dark:bg-gray-900/20'
                        : 'bg-gray-100 dark:bg-gray-700',
                      hoveredFilter === category && !isActive && 'bg-gray-200 dark:bg-gray-600'
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index % 3} // Reset delay per row for better effect
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* View All Link */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/sayyid-haidar"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-lg',
                'border border-gray-300 dark:border-gray-600',
                'text-gray-700 dark:text-gray-300',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                'hover:border-gray-400 dark:hover:border-gray-500',
                'transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
              )}
            >
              <span>View all projects on GitHub</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
