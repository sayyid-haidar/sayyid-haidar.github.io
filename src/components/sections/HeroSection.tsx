import React from 'react';
import { Container } from '../layout/Container';
import type { HeroData, ProfileData } from '../../types';
import { getLinkedInUrl } from '../../lib/utils';

interface HeroSectionProps {
  hero: HeroData;
  profile: ProfileData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  hero,
  profile,
}) => {
  const linkedInUrl = getLinkedInUrl(profile.socialLinks);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight transition-colors">
              {hero.title}
              <span className="block text-gray-600 dark:text-gray-400">{hero.subtitle}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in transition-colors" style={{ animationDelay: '0.2s' }}>
              {hero.description}
            </p>

            {/* Key Stats - Horizontal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {profile.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group cursor-default"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-300 origin-left">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href={`mailto:${profile.contact.email}`}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium text-center"
              >
                Get In Touch
              </a>
              {linkedInUrl && (
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 font-medium text-center"
                >
                  View Profile
                </a>
              )}
            </div>

            {/* Availability Badge */}
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors cursor-default">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                  {profile.contact.availability.status} {profile.contact.availability.description}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Background Decoration with hover effect */}
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-all duration-500"></div>
              
              {/* Main Photo Container */}
              <div className="relative bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img
                  src={hero.profileImage.src}
                  alt={hero.profileImage.alt}
                  className="w-80 h-80 object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                  width={320}
                  height={320}
                />
                
                {/* Floating Info Card with hover effect */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                  <div className="text-sm text-gray-600 dark:text-gray-400">{hero.currentPosition.description}</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{hero.currentPosition.company}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{hero.currentPosition.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
