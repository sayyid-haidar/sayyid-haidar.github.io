import React from 'react';
import { Container } from './Container';

interface FooterProps {
  name: string;
  title: string;
  subtitle: string;
}

export const Footer: React.FC<FooterProps> = ({
  name,
  title,
  subtitle,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 dark:bg-black border-t border-gray-800 dark:border-gray-800 transition-colors duration-200">
      <Container>
        <div className="text-center text-gray-400 dark:text-gray-500 transition-colors">
          <p>
            © {currentYear} {name} • {title} {subtitle}
          </p>
        </div>
      </Container>
    </footer>
  );
};
