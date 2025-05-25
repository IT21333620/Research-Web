import { useEffect, useRef } from 'react';

export default function ResearchObjectives() {
  const cardRef = useRef(null);

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

    const elements = cardRef.current.querySelectorAll('[data-observe]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const subObjectives = [
    {
      title: 'Stress Detection through Facial Emotion Recognition',
      icon: '😊',
      description: 'Analyze patients’ facial expressions in real time to detect stress levels and monitor emotional fluctuations throughout therapy sessions, providing therapists with continuous feedback for tailored interventions.',
    },
    {
      title: 'Stress Detection through Vocal Emotion Recognition',
      icon: '🗣️',
      description: 'Detect stress severity by analyzing speech patterns and vocal characteristics during therapy sessions, adding an additional layer of emotional assessment for enhanced reliability.',
    },
    {
      title: 'Fair Scheduling Algorithm Based on Pre-Therapy Stress Assessment',
      icon: '⏰',
      description: 'Develop a scheduling mechanism that prioritizes therapy sessions based on patients’ stress levels, determined through pre-therapy interactive activities, ensuring timely interventions for those in critical need.',
    },
    {
      title: 'Post-Therapy Engagement and Diagnostic Feedback Mechanism',
      icon: '📊',
      description: 'Sustain patient engagement after therapy by recommending therapist-assigned activities and monitoring participation, providing diagnostic feedback on therapy adherence and progress.',
    },
  ];

  return (
    <div ref={cardRef} className="py-10 bg-gray-50 dark:bg-gray-900 rounded-xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Research Objectives</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            The primary objective of this research is to develop an AI-enhanced system that improves the effectiveness of distance therapy sessions.
          </p>
        </div>
        <div className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-t-xl">
            Primary Objective
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-4 px-4 pb-4">
            Develop an AI-enhanced system that improves the effectiveness of distance therapy sessions by equipping therapists with real-time emotional insights, ensuring need-based session scheduling, and promoting sustained post-therapy engagement. The overarching aim is to bridge the experiential gap between in-person and online therapy, enhancing therapeutic outcomes and patient satisfaction in remote settings.
          </p>
        </div>
        <div className="space-y-8">
          {subObjectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 data-[visible='true']:translate-y-0 data-[visible='false']:translate-y-10 transition-all duration-500 data-observe"
            >
              <div className="flex flex-col items-center mr-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {objective.icon}
                </div>
                {index < subObjectives.length - 1 && (
                  <div className="h-full w-1 border-l-4 border-blue-500 border-dashed mt-2"></div>
                )}
              </div>
              <div className="flex-1 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{objective.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}