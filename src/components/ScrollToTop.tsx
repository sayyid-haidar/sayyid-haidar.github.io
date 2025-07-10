import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollAnimation, scrollToTop } from './ScrollUtils';

const ScrollToTop: React.FC = () => {
  const isVisible = useScrollAnimation();

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
