import React, { Suspense } from 'react';

// Layout Components (eager loaded)
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Critical Section
import { HeroSection } from './components/sections/HeroSection';

// Lazy loaded sections
const AboutSection = React.lazy(() => import('./components/sections/AboutSection'));
const ProjectsSection = React.lazy(() => import('./components/sections/ProjectsSection'));
const ExperienceSection = React.lazy(() => import('./components/sections/ExperienceSection'));
const ContactSection = React.lazy(() => import('./components/sections/ContactSection'));

// Utility Components
import ScrollToTop from './components/ScrollToTop';
import { Skeleton, SectionHeaderSkeleton, CardSkeleton, ExperienceCardSkeleton } from './components/ui/Skeleton';

// Hooks
import { useTheme } from './hooks/useTheme';

// Static data (critical for initial render)
import heroData from './data/hero.json';
import profileData from './data/profile.json';
import whatIDoData from './data/what-i-do.json';

// Non-critical data - using static imports for development (HMR support)
// Switch to useJsonData for production if needed
import projectsDataStatic from './data/projects.json';
import experiencesDataStatic from './data/experiences.json';

// Loading fallbacks
const AboutLoading = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeaderSkeleton />
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    </div>
  </section>
);

const ProjectsLoading = () => (
  <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeaderSkeleton />
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

const ExperienceLoading = () => (
  <section className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeaderSkeleton />
      <div className="space-y-12">
        {[...Array(4)].map((_, i) => (
          <ExperienceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

const ContactLoading = () => (
  <section className="py-20 bg-gray-900">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      <Skeleton className="h-12 w-96 mx-auto" />
      <Skeleton className="h-6 w-full max-w-xl mx-auto" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-14 w-64 rounded-lg" />
        <Skeleton className="h-14 w-48 rounded-lg" />
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const { theme, setTheme, toggleTheme, resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        name={heroData.name}
        navigation={profileData.navigation}
        resumePath={profileData.contact.resumePath}
        theme={theme}
        setTheme={setTheme}
        toggleTheme={toggleTheme}
        resolvedTheme={resolvedTheme}
        hasProjects={projectsDataStatic.length > 0}
        hasExperience={experiencesDataStatic.experiences.length > 0}
      />

      {/* Main Content */}
      <main>
        {/* Critical content */}
        <HeroSection hero={heroData} profile={profileData} />

        {/* Lazy loaded sections */}
        <Suspense fallback={<AboutLoading />}>
          <AboutSection skills={whatIDoData} />
        </Suspense>

        <Suspense fallback={<ProjectsLoading />}>
          {projectsDataStatic.length > 0 && (
            <ProjectsSection projects={projectsDataStatic} />
          )}
        </Suspense>

        <Suspense fallback={<ExperienceLoading />}>
          {experiencesDataStatic.experiences.length > 0 && (
            <ExperienceSection
              experiences={experiencesDataStatic.experiences}
              employmentConfig={experiencesDataStatic.employmentConfig}
            />
          )}
        </Suspense>

        <Suspense fallback={<ContactLoading />}>
          <ContactSection profile={profileData} />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer
        name={heroData.name}
        title={heroData.title}
        subtitle={heroData.subtitle}
      />

      <ScrollToTop />
    </div>
  );
};

export default App;
