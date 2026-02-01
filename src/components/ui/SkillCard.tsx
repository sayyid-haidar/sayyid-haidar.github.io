import React from 'react';
import { cn } from '../../lib/cn';
import { ScrollReveal } from './ScrollReveal';
import type { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div
        className={cn(
          'text-center p-8 rounded-xl shadow-sm',
          'bg-white dark:bg-gray-800',
          'transition-all duration-300 ease-out',
          'hover:shadow-lg hover:-translate-y-1',
          'group cursor-default'
        )}
      >
        {/* Icon with hover animation */}
        <div
          className={cn(
            'w-16 h-16 rounded-xl',
            'flex items-center justify-center mx-auto mb-6',
            'text-2xl font-bold',
            'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
            'transition-all duration-300 ease-out',
            'group-hover:scale-110 group-hover:rotate-3'
          )}
        >
          {skill.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
          {skill.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
          {skill.description}
        </p>

        {/* Technologies with hover effect */}
        <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
          {skill.technologies.join(' • ')}
        </div>
      </div>
    </ScrollReveal>
  );
};
