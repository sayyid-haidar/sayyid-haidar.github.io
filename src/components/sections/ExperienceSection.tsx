import React from 'react';
import { Container } from '../layout/Container';
import { Section, SectionHeader } from '../ui/Section';
import { ExperienceCard } from '../ui/ExperienceCard';
import { ScrollReveal } from '../ui/ScrollReveal';
import type { Experience, EmploymentConfig } from '../../types';

interface ExperienceSectionProps {
  experiences: Experience[];
  employmentConfig: EmploymentConfig;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  employmentConfig,
}) => {
  // Don't render section if no experiences
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <Section id="experience" background="white">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader
            title="Experience"
            subtitle="Progressive career growth across full-time, contract, and freelance opportunities"
          />
        </ScrollReveal>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              employmentConfig={employmentConfig}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default ExperienceSection;
