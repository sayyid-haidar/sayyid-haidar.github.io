import React from 'react';
import { X, Sun, Moon } from 'lucide-react';
import type { NavigationItem } from '../../types';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { cn } from '../../lib/cn';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  resumePath: string;
  resolvedTheme: 'light' | 'dark';
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navigation,
  resumePath,
  resolvedTheme,
}) => {
  useLockBodyScroll(isOpen);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Slide-out Menu */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[85vw] shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden',
          'bg-white dark:bg-gray-900',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme Indicator */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-gray-600 dark:text-gray-400">Theme</span>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                {resolvedTheme === 'dark' ? (
                  <>
                    <Moon className="w-4 h-4" />
                    <span className="text-sm">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" />
                    <span className="text-sm">Light</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
            <a
              href={resumePath}
              download
              onClick={onClose}
              className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
