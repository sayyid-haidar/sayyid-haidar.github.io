import React, { useState } from 'react';
import { Container } from './Container';
import { MobileNav } from './MobileNav';
import { HamburgerButton } from '../ui/HamburgerButton';
import { ThemeToggle, SimpleThemeToggle } from '../ui/ThemeToggle';
import type { NavigationItem } from '../../types';
import type { Theme } from '../../hooks/useTheme';

interface NavbarProps {
  name: string;
  navigation: NavigationItem[];
  resumePath: string;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  resolvedTheme: 'light' | 'dark';
  // Data availability flags
  hasProjects?: boolean;
  hasExperience?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  navigation,
  resumePath,
  theme,
  setTheme,
  toggleTheme,
  resolvedTheme,
  hasProjects = true,
  hasExperience = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter navigation based on data availability
  const filteredNavigation = navigation.filter((item) => {
    if (item.href === '#projects' && !hasProjects) return false;
    if (item.href === '#experience' && !hasExperience) return false;
    return true;
  });

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 z-40 transition-colors duration-200">
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <a href="#" className="font-bold text-xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              {name}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {filteredNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle
                theme={theme}
                setTheme={setTheme}
                resolvedTheme={resolvedTheme}
              />
              <a
                href={resumePath}
                download
                className="btn-primary text-sm"
              >
                Download CV
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <SimpleThemeToggle
                toggleTheme={toggleTheme}
                resolvedTheme={resolvedTheme}
              />
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={filteredNavigation}
        resumePath={resumePath}
        resolvedTheme={resolvedTheme}
      />
    </>
  );
};
