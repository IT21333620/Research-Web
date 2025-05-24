import { useEffect, useRef } from 'react';
import { Search, TrendingUp, MessageCircle, AlertCircle } from 'lucide-react';

export default function ResearchGap() {
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

  const gaps = [
    {
      title: 'Lack of Real-Time Stress Detection',
      icon: <Search className="w-10 h-10 text-amber-600" />,
      description: 'No integration of stress detection tools within distance therapy sessions.',
    },
    {
      title: 'Missing Fair Scheduling Algorithms',
      icon: <TrendingUp className="w-10 h-10 text-amber-600" />,
      description: 'Absence of algorithms prioritizing patients based on emotional need.',
    },
    {
      title: 'Insufficient Post-Therapy Monitoring',
      icon: <MessageCircle className="w-10 h-10 text-amber-600" />,
      description: 'Limited mechanisms for patient monitoring and engagement tracking after therapy.',
    },
    {
      title: 'Limited Multi-Modal Emotion Recognition',
      icon: <AlertCircle className="w-10 h-10 text-amber-600" />,
      description: 'Underutilization of combined facial and vocal analysis for therapeutic applications.',
    },
  ];

  return (
    <div ref={cardRef} className="py-10 bg-white dark:bg-gray-800 rounded-xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Research Gap</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Following areas are the research gaps found in distance therapy solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20" data-observe>
        {gaps.map((gap, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 text-center bg-gradient-to-r from-blue-500 to-indigo-600 data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 data-[visible='true']:translate-x-0 data-[visible='false']:translate-x-10 data-observe"
          >
            <div className="mb-4 flex justify-center">{gap.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{gap.title}</h3>
            <p className="text-gray-100 dark:text-gray-200">{gap.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}