import React from 'react';
import { cn } from '../../lib/cn';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        className
      )}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span
        className={cn(
          'w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center',
          isOpen && 'rotate-45 translate-y-2'
        )}
      />
      <span
        className={cn(
          'w-6 h-0.5 bg-gray-700 transition-all duration-300',
          isOpen && 'opacity-0'
        )}
      />
      <span
        className={cn(
          'w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center',
          isOpen && '-rotate-45 -translate-y-2'
        )}
      />
    </button>
  );
};
