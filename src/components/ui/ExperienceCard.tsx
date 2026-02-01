import React from 'react';
import { cn } from '../../lib/cn';
import { ScrollReveal } from './ScrollReveal';
import type { Experience, EmploymentConfig, Position } from '../../types';
import { getEmploymentType, getBorderColor } from '../../lib/utils';

interface ExperienceCardProps {
  experience: Experience;
  employmentConfig: EmploymentConfig;
  index: number;
}

const ConsolidatedExperience: React.FC<{
  experience: Experience;
  employmentConfig: EmploymentConfig;
}> = ({ experience, employmentConfig }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors">
        {experience.title} ({experience.period})
      </h4>
      <div className="space-y-2 text-gray-600 dark:text-gray-300">
        {experience.positions?.map((position: Position, index: number) => (
          <div key={index}>
            <strong className="text-gray-900 dark:text-white">{position.title}</strong> at {position.company}{' '}
            <span
              className={`text-sm ${
                getEmploymentType(position.type, employmentConfig).color
              }`}
            >
              ({getEmploymentType(position.type, employmentConfig).label})
            </span>{' '}
            • {position.period}
          </div>
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors">{experience.description}</p>
    </div>
  );
};

const RegularExperience: React.FC<{
  experience: Experience;
  employmentConfig: EmploymentConfig;
}> = ({ experience, employmentConfig }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors">
          {experience.title}
          {experience.type && (
            <span
              className={`text-sm font-normal ml-2 ${
                getEmploymentType(experience.type, employmentConfig).color
              }`}
            >
              ({getEmploymentType(experience.type, employmentConfig).label})
            </span>
          )}
        </h3>
        <span className="text-gray-600 dark:text-gray-400 transition-colors">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 mb-4 transition-colors">
        {experience.company} • {experience.location}
      </div>
      <p className="text-gray-700 dark:text-gray-300 transition-colors">
        {experience.description}
      </p>
    </>
  );
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  employmentConfig,
  index,
}) => {
  const borderColor = getBorderColor(
    experience.borderStyle || 'recent',
    employmentConfig
  );

  return (
    <ScrollReveal delay={index * 150} direction="left">
      <div
        className={cn(
          `border-l-4 ${borderColor} pl-8 py-2`,
          'group transition-all duration-300',
          'hover:pl-10'
        )}
      >
        {experience.isConsolidated ? (
          <ConsolidatedExperience
            experience={experience}
            employmentConfig={employmentConfig}
          />
        ) : (
          <RegularExperience
            experience={experience}
            employmentConfig={employmentConfig}
          />
        )}
      </div>
    </ScrollReveal>
  );
};
