import React from 'react';
import { Container } from '../layout/Container';
import { Section, SectionHeader } from '../ui/Section';
import { SkillCard } from '../ui/SkillCard';
import { ScrollReveal } from '../ui/ScrollReveal';
import type { Skill } from '../../types';

interface AboutSectionProps {
  skills: Skill[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ skills }) => {
  return (
    <Section id="about" background="gray">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader
            title="What I Do"
            subtitle="I specialize in building robust backend systems and integrating AI capabilities for real-world applications"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
export default AboutSection;
