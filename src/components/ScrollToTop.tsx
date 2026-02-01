import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollAnimation, scrollToTop } from '../hooks/useScrollAnimation';
import { cn } from '../lib/cn';

const ScrollToTop: React.FC = () => {
  const isVisible = useScrollAnimation();

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50',
        'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
        'transition-all duration-300 ease-out',
        'hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-xl hover:scale-110 hover:-translate-y-1',
        'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        'active:scale-95',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
