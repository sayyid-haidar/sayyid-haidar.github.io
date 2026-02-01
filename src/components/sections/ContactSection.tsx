import React from 'react';
import { Mail, Download } from 'lucide-react';
import { Container } from '../layout/Container';
import { Section, SectionHeader } from '../ui/Section';
import { ScrollReveal } from '../ui/ScrollReveal';
import type { ProfileData } from '../../types';

interface ContactSectionProps {
  profile: ProfileData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const { email, resumePath, availability } = profile.contact;

  return (
    <Section id="contact" background="dark" padding="lg">
      <Container size="md">
        <ScrollReveal>
          <SectionHeader
            title="Ready to Build Together?"
            subtitle={`I'm ${availability.status.toLowerCase()} ${availability.description}. Let's discuss how we can build scalable, intelligent systems that drive real business value.`}
            centered
            light
          />
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${email}`}
              className="group bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {email}
            </a>
            <a
              href={resumePath}
              download
              className="group border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:animate-bounce transition-transform" />
              Download Resume
            </a>
          </div>
        </ScrollReveal>

        {/* Social Links */}
        <ScrollReveal delay={400}>
          <div className="flex justify-center space-x-6 text-gray-400">
            {profile.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="hover:text-white hover:scale-110 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};
export default ContactSection;
