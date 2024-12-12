import React from 'react';
import AboutHero from '../components/about/AboutHero';
import StatsSection from '../components/about/StatsSection';
import ExperienceSection from '../components/about/ExperienceSection';
import ApproachSection from '../components/about/ApproachSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <StatsSection />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ExperienceSection />
            <ApproachSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;