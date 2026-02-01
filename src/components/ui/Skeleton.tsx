import React from 'react';
import { cn } from '../../lib/cn';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-gray-200 dark:bg-gray-700 rounded',
        className
      )}
    />
  );
};

// Card skeleton
export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Image skeleton */}
      <Skeleton className="aspect-video w-full" />
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        
        {/* Tags skeleton */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    </div>
  );
};

// Section header skeleton
export const SectionHeaderSkeleton: React.FC = () => {
  return (
    <div className="text-center mb-12 space-y-4">
      <Skeleton className="h-10 w-64 mx-auto" />
      <Skeleton className="h-6 w-96 mx-auto" />
    </div>
  );
};

// Experience card skeleton
export const ExperienceCardSkeleton: React.FC = () => {
  return (
    <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-8 py-4 space-y-3">
      <div className="flex justify-between">
        <Skeleton className="h-7 w-1/3" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-5 w-1/2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
};

// Stats skeleton
export const StatsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  );
};

// Skill card skeleton
export const SkillCardSkeleton: React.FC = () => {
  return (
    <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm space-y-4">
      <Skeleton className="w-16 h-16 mx-auto rounded-xl" />
      <Skeleton className="h-6 w-32 mx-auto" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3 mx-auto" />
    </div>
  );
};
