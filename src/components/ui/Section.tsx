import React from 'react';
import { cn } from '../../lib/cn';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  background = 'white',
  padding = 'lg',
}) => {
  const backgrounds = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800/50',
    dark: 'bg-gray-900 dark:bg-black text-white',
  };

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
  };

  return (
    <section
      id={id}
      className={cn(
        backgrounds[background],
        paddings[padding],
        'transition-colors duration-200',
        className
      )}
    >
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      <h2
        className={cn(
          'text-4xl md:text-5xl font-bold mb-6',
          light 
            ? 'text-white' 
            : 'text-gray-900 dark:text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-xl max-w-2xl',
            centered && 'mx-auto',
            light 
              ? 'text-gray-300' 
              : 'text-gray-600 dark:text-gray-300'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
