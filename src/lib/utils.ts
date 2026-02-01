import type { EmploymentConfig, EmploymentType, BorderStyle } from '../types';

/**
 * Get employment type configuration
 */
export const getEmploymentType = (
  type: string,
  config: EmploymentConfig
): { label: string; color: string } => {
  const typeConfig = config.employmentTypes[type as EmploymentType];
  return typeConfig || { label: type, color: 'text-gray-600' };
};

/**
 * Get border color based on style
 */
export const getBorderColor = (
  borderStyle: BorderStyle | string,
  config: EmploymentConfig
): string => {
  return config.borderColors[borderStyle as BorderStyle] || 'border-gray-300';
};

/**
 * Get LinkedIn URL from social links
 */
export const getLinkedInUrl = (socialLinks: { name: string; url: string }[]): string | undefined => {
  return socialLinks.find(link => link.name === 'LinkedIn')?.url;
};
