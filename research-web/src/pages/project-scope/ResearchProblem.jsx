import { useEffect, useRef } from 'react';
import { EyeOff, Mic, Clock, Activity } from 'lucide-react';

export default function ResearchProblem() {
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

  const problems = [
    {
      title: 'Limited Non-Verbal Cue Observation',
      icon: <EyeOff className="w-10 h-10 text-white" />,
      description: 'Online therapy limits therapists’ ability to observe non-verbal cues such as body language and subtle emotional expressions.',
    },
    {
      title: 'Reliance on Verbal Communication',
      icon: <Mic className="w-10 h-10 text-white" />,
      description: 'Therapists rely mostly on verbal communication during online sessions, which may not fully convey the patient’s emotional condition.',
    },
    {
      title: 'Inadequate Scheduling Practices',
      icon: <Clock className="w-10 h-10 text-white" />,
      description: 'Current scheduling practices are typically first-come, first-served, ignoring the urgency or severity of a patient\'s emotional needs.',
    },
    {
      title: 'Lack of Post-Session Visibility',
      icon: <Activity className="w-10 h-10 text-white" />,
      description: 'Therapists have little to no visibility into a patient\'s behavior or adherence to therapy after a session ends.',
    },
  ];

  return (
    <div ref={cardRef} className="py-10 bg-white dark:bg-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Research Problem</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Following issues highlight the challenges in distance therapy solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20" data-observe>
        {problems.map((problem, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 text-center bg-gradient-to-r from-blue-500 to-indigo-600 data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 data-[visible='true']:translate-x-0 data-[visible='false']:translate-x-10 data-observe"
          >
            <div className="mb-4 flex justify-center">{problem.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
            <p className="text-gray-200">{problem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}