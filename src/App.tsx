import React from 'react';
import { Download, Mail } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import whatIDoData from './data/what-i-do.json';
import experiencesData from './data/experiences.json';
import profileData from './data/profile.json';
import heroData from './data/hero.json';

const App: React.FC = () => {
  // Helper function to get employment type config
  const getEmploymentType = (type: string) => {
    const config = experiencesData.employmentConfig.employmentTypes[type as keyof typeof experiencesData.employmentConfig.employmentTypes];
    return config || { label: type, color: 'text-gray-600' };
  };

  // Helper function to get border color
  const getBorderColor = (borderStyle: string) => {
    const colors = experiencesData.employmentConfig.borderColors;
    return colors[borderStyle as keyof typeof colors] || 'border-gray-300';
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container-width py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900">{heroData.name}</div>
            <div className="hidden md:flex space-x-8">
              {profileData.navigation.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href={profileData.contact.resumePath}
              download
              className="btn-primary text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Height */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container-width">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {heroData.title}
                  <span className="block text-gray-600">{heroData.subtitle}</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  {heroData.description}
                </p>

                {/* Key Stats - Horizontal */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {profileData.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Get In Touch
                  </a>
                  <a
                    href={profileData.socialLinks.find(link => link.name === 'LinkedIn')?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium"
                  >
                    View Profile
                  </a>
                </div>

                {/* Availability Badge */}
                <div className="mt-8">
                  <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-700 text-sm font-medium">
                      {profileData.contact.availability.status} {profileData.contact.availability.description}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Background Decoration */}
                  <div className="absolute inset-0 bg-gray-100 rounded-2xl transform rotate-3"></div>
                  <div className="absolute inset-0 bg-gray-200 rounded-2xl transform -rotate-2"></div>
                  
                  {/* Main Photo Container */}
                  <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                    <img
                      src={heroData.profileImage.src}
                      alt={heroData.profileImage.alt}
                      className="w-80 h-80 object-cover rounded-xl"
                      loading="lazy"
                    />
                    
                    {/* Floating Info Card */}
                    <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                      <div className="text-sm text-gray-600">{heroData.currentPosition.description}</div>
                      <div className="font-semibold text-gray-900">{heroData.currentPosition.company}</div>
                      <div className="text-sm text-gray-500">{heroData.currentPosition.title}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What I Do
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                I specialize in building robust backend systems and integrating AI capabilities 
                for real-world applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whatIDoData.map((service) => (
                <div key={service.id} className="text-center p-8 bg-white rounded-xl shadow-sm">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    {service.technologies.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline - Simplified */}
      <section id="experience" className="py-20 bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Experience
              </h2>
              <p className="text-xl text-gray-600">
                Progressive career growth across full-time, contract, and freelance opportunities
              </p>
            </div>
            
            <div className="space-y-12">
              {experiencesData.experiences.map((experience) => {
                // Get border color from config
                const borderColor = getBorderColor(experience.borderStyle || 'recent');
                
                return (
                  <div key={experience.id} className={`border-l-4 ${borderColor} pl-8`}>
                    {experience.isConsolidated ? (
                      // Consolidated early career section
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {experience.title} ({experience.period})
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          {experience.positions?.map((position, index) => (
                            <div key={index}>
                              <strong>{position.title}</strong> at {position.company}{' '}
                              <span className={`text-sm ${getEmploymentType(position.type).color}`}>
                                ({getEmploymentType(position.type).label})
                              </span> • {position.period}
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-700 mt-4">{experience.description}</p>
                      </div>
                    ) : (
                      // Regular experience section
                      <>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-2xl font-semibold text-gray-900">
                            {experience.title}
                            {experience.type && (
                              <span className={`text-sm font-normal ${getEmploymentType(experience.type).color}`}>
                                {' '}({getEmploymentType(experience.type).label})
                              </span>
                            )}
                          </h3>
                          <span className="text-gray-600">
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>
                        <div className="text-lg text-gray-600 mb-4">
                          {experience.company} • {experience.location}
                        </div>
                        <p className="text-gray-700">{experience.description}</p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Direct & Simple */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              I'm {profileData.contact.availability.status.toLowerCase()} {profileData.contact.availability.description}. 
              Let's discuss how we can build scalable, intelligent systems that drive real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                {profileData.contact.email}
              </a>
              <a
                href={profileData.contact.resumePath}
                download
                className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>

            <div className="flex justify-center space-x-6 text-gray-400">
              {profileData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container-width">
          <div className="text-center text-gray-400">
            <p>© 2025 {heroData.name} • {heroData.title} {heroData.subtitle}</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;
