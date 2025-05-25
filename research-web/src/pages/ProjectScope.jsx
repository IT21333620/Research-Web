import { useEffect, useRef } from 'react';
import LiteratureSurvey from './project-scope/LiteratureSuervey';
import ResearchGap from './project-scope/ResearchGap';
import ResearchProblem from './project-scope/ResearchProblem';
import ResearchObjectives from './project-scope/ResearchObjectives';
import Methodology from './project-scope/Methodology';
import TechnologiesUsed from './project-scope/TechnologiesUsed';

export default function ProjectScope() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('[data-observe]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="project-scope" className="min-h-screen bg-white py-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-gray-800 text-center font-extrabold mb-8 animate-slide-in">
          Project Scope
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <LiteratureSurvey />
          <ResearchGap/>
          <ResearchProblem/>
          <ResearchObjectives/>
          <Methodology/>
          
        </div>
      </div>
       <div className="mt-10">
        <TechnologiesUsed />
      </div>
    </section>
  );
}