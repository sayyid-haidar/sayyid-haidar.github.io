import React from 'react';
import { Download, Mail } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container-width py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900">Sayyid Haidar</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <a
              href="/assets/Sayyid-Haidar-Resume.pdf"
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
                  Backend
                  <span className="block text-gray-600">Engineer</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Experienced in building production-ready systems with 
                  <span className="text-gray-900 font-medium"> Java Spring, Node.js, PostgreSQL, AWS</span> and 
                  <span className="text-gray-900 font-medium"> Computer Vision integration</span>
                </p>

                {/* Key Stats - Horizontal */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4+</div>
                    <div className="text-sm text-gray-600">Years Exp</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">6</div>
                    <div className="text-sm text-gray-600">Companies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">∞</div>
                    <div className="text-sm text-gray-600">Learning</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:sayyid.abdul.aziz.haidar@gmail.com"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sayyid-abdul-aziz-haidar-3a9230146/"
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
                    <span className="text-green-700 text-sm font-medium">Available for new opportunities</span>
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
                      src="/assets/sayyid-haidar-profile.jpg"
                      alt="Sayyid Haidar - Backend Engineer"
                      className="w-80 h-80 object-cover rounded-xl"
                      loading="lazy"
                    />
                    
                    {/* Floating Info Card */}
                    <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border">
                      <div className="text-sm text-gray-600">Currently at</div>
                      <div className="font-semibold text-gray-900">Cakrawala University</div>
                      <div className="text-sm text-gray-500">Student Gov President</div>
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
              {/* Backend Development */}
              <div className="text-center p-8 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  BE
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Engineering</h3>
                <p className="text-gray-600 mb-4">
                  Designing RESTful APIs, microservices architecture, and data processing pipelines. Experience with high-traffic systems, caching strategies, and database optimization.
                </p>
                <div className="text-sm text-gray-500">
                  Java Spring Boot • Node.js • Express • PostgreSQL • MongoDB • Redis • AWS • Docker
                </div>
              </div>

              {/* System Architecture */}
              <div className="text-center p-8 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  SA
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">System Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Architecting distributed systems for scalability and reliability. Focus on event-driven architecture, load balancing, and fault tolerance patterns.
                </p>
                <div className="text-sm text-gray-500">
                  Microservices • Event-Driven Architecture • Docker • Kubernetes • CI/CD • Load Balancing
                </div>
              </div>

              {/* AI Vision Computing */}
              <div className="text-center p-8 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  AI
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Vision Computing</h3>
                <p className="text-gray-600 mb-4">
                  Implementing computer vision solutions using YOLO object detection, developing data annotation workflows, and training custom models. Integrating AI capabilities into production systems.
                </p>
                <div className="text-sm text-gray-500">
                  YOLO v5/v8 • OpenCV • TensorFlow • Data Annotation • Model Training • Python • Computer Vision APIs
                </div>
              </div>
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
                Building systems at companies of different scales and stages
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Current Role */}
              <div className="border-l-4 border-gray-900 pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Student Government President</h3>
                  <span className="text-gray-600">Nov 2024 - Present</span>
                </div>
                <div className="text-lg text-gray-600 mb-4">Cakrawala University • Jakarta</div>
                <p className="text-gray-700">
                  Leading 200+ student initiatives while pursuing Data Science degree. 
                  Actively working on computer vision projects using YOLO models, data annotation pipelines, and AI model training for practical applications.
                </p>
              </div>

              {/* Recent Experience */}
              <div className="border-l-4 border-gray-300 pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Software Engineer</h3>
                  <span className="text-gray-600">Apr 2024 - Jul 2024</span>
                </div>
                <div className="text-lg text-gray-600 mb-4">PT E-Tirta Medical Centre • Jakarta</div>
                <p className="text-gray-700">
                  Developed and maintained backend services serving 10K+ users daily for healthcare applications. 
                  Implemented secure APIs, optimized database queries, and ensured 99.9% system uptime in production.
                </p>
              </div>

              {/* Senior Role */}
              <div className="border-l-4 border-gray-300 pl-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Senior Backend Developer</h3>
                  <span className="text-gray-600">Mar 2023 - Mar 2024</span>
                </div>
                <div className="text-lg text-gray-600 mb-4">NF Juara • Indonesia</div>
                <p className="text-gray-700">
                  Led backend development for 3 major products serving 50K+ active users. 
                  Architected microservices infrastructure, reduced system latency by 40%, and mentored 5 junior developers in Java Spring and system design.
                </p>
              </div>

              {/* Earlier Experience */}
              <div className="border-l-4 border-gray-200 pl-8">
                <div className="text-gray-600 mb-4">
                  <strong>Previous roles:</strong> Backend Developer at NF Juara (2021-2023), 
                  Backend Mentor at QarirLabs (2022), Software Engineer at Badr Interactive (2021-2022), 
                  Backend Developer at Skydu Academy (2019-2021)
                </div>
                <p className="text-gray-700">
                  Progressive experience from junior to senior roles, 
                  building production systems and mentoring others.
                </p>
              </div>
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
              I'm available for backend engineering positions and AI integration projects. 
              Let's discuss how we can build scalable, intelligent systems that drive real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:sayyid.abdul.aziz.haidar@gmail.com"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                sayyid.abdul.aziz.haidar@gmail.com
              </a>
              <a
                href="/assets/Sayyid-Haidar-Resume.pdf"
                download
                className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>

            <div className="flex justify-center space-x-6 text-gray-400">
              <a
                href="https://www.linkedin.com/in/sayyid-abdul-aziz-haidar-3a9230146/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sayyid-haidar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container-width">
          <div className="text-center text-gray-400">
            <p>© 2025 Sayyid Haidar • Backend Engineer</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;
