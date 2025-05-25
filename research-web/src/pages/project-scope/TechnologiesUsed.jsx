import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function TechnologiesUsed() {
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

  const technologies = [
    { name: 'Librosa', src: '/icons/librosa.png' },
    { name: 'Flask', src: '/icons/flask.png' },
    { name: 'Next Js', src: '/icons/nextjs.jpeg' },
    { name: 'Flutter', src: '/icons/flutter.jpeg' },
    { name: 'Spring Boot', src: '/icons/spring-boot.png' },
    { name: 'Unity', src: '/icons/unity.png' },
    { name: 'D3 Js', src: '/icons/d3js.jpg' },
    { name: 'Docker', src: '/icons/docker.png' },
  ];

  return (
    <div ref={cardRef} className="py-10 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Technologies Used</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            The following technologies power our AI-enhanced distance therapy system, enabling real-time emotional analysis, secure scheduling, and seamless engagement.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap" style={{ width: `${technologies.length * (200 + 24)}px` }}>
            {technologies.map((tech, index) => (
              <div key={index} className="flex-shrink-0 mx-6 inline-block">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={200}
                  height={200}
                  className="transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}