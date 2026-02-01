import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { Theme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  setTheme,
  resolvedTheme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.theme-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-100 animate-pulse" />
    );
  }

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { value: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> },
  ];

  const currentOption = options.find(o => o.value === theme) || options[0];

  return (
    <div className="theme-toggle relative">
      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200',
          'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
          'text-gray-700 dark:text-gray-300',
          'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
          'border border-transparent hover:border-gray-300 dark:hover:border-gray-600'
        )}
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
        <span className="hidden sm:inline text-sm font-medium">
          {currentOption.label}
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 mt-2 w-40 rounded-lg shadow-lg',
            'bg-white dark:bg-gray-800',
            'border border-gray-200 dark:border-gray-700',
            'py-1 z-50',
            'animate-fade-in'
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setIsOpen(false);
              }}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2.5 text-left',
                'transition-colors duration-150',
                'hover:bg-gray-100 dark:hover:bg-gray-700',
                theme === option.value && 'bg-gray-50 dark:bg-gray-700/50'
              )}
            >
              <span
                className={cn(
                  theme === option.value
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                )}
              >
                {option.icon}
              </span>
              <span
                className={cn(
                  'text-sm',
                  theme === option.value
                    ? 'font-medium text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300'
                )}
              >
                {option.label}
              </span>
              {theme === option.value && (
                <span className="ml-auto text-xs text-gray-400">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Simple toggle button for mobile
export const SimpleThemeToggle: React.FC<{
  toggleTheme: () => void;
  resolvedTheme: 'light' | 'dark';
}> = ({ toggleTheme, resolvedTheme }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2.5 rounded-lg transition-all duration-200',
        'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
        'text-gray-700 dark:text-gray-300',
        'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
      )}
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};
