import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LiteratureSurvey() {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gradient-to-r from-blue-400 to-indigo-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 data-[visible='true']:translate-y-0 data-[visible='false']:translate-y-10 data-observe"
    >
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">Literature Survey</h2>
      </div>
      <div className="ml-5">
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          The practice of psychotherapy has undergone considerable transformation in recent decades, evolving from 
          conventional face-to-face sessions to hybrid modalities, and more recently, to fully remote formats. This 
          transition has been significantly accelerated by the global COVID-19 pandemic, which reshaped social 
          behaviors and necessitated the rapid adoption of distance-based solutions across multiple sectors, including 
          mental health services. Restrictions on physical gatherings, social distancing mandates, and widespread 
          concerns over health and safety made in-person therapy sessions increasingly difficult to sustain. 
          Consequently, distance therapy emerged as the primary mode of delivery for mental health interventions.
          Distance therapy offers several advantages. It enhances accessibility for patients residing in remote or 
          underserved regions, reduces the logistical and financial barriers associated with physical appointments, 
          and provides greater flexibility in scheduling. The ability to connect therapists and patients across 
          geographical boundaries has contributed to the widespread acceptance of distance therapy as a viable 
          alternative to traditional face-to-face models.
        </p>
       <div className="flex justify-center mb-4">
          <Image
            src="/Images/diagram1.jpg"
            alt="Diagram 1: Psychotherapy Transition"
            width={480}
            height={360}
            className="rounded-lg"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          According to recent industry reports, the global online therapy market has witnessed unprecedented growth 
          since 2020 and is projected to continue expanding in the coming years.
        </p>
        <div className="flex justify-center mb-4">
          <Image
            src="/Images/diagram2.jpg"
            alt="Diagram 2: Online Therapy Growth"
            width={480}
            height={360}
            className="rounded-lg"
          />
        </div>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          Despite these notable benefits, distance therapy presents inherent challenges that compromise some of the 
          fundamental elements critical to effective therapeutic outcomes. Traditional in-person therapy sessions 
          leverage the physical presence of both therapists and patients to establish a strong therapeutic alliance, 
          facilitate trust, and enable the observation of non-verbal cues such as body language, micro-expressions, 
          and behavioral shifts. These non-verbal communications often provide therapists with invaluable insights 
          into the patient’s emotional and psychological state, supplementing verbal disclosures.
          The absence of a shared physical space in distance therapy significantly impairs the therapist’s ability to 
          perceive and interpret these subtle but essential indicators. As a result, therapists may encounter difficulties 
          in accurately diagnosing core issues, adapting therapeutic strategies in real-time, and monitoring patients' 
          emotional progression across multiple sessions. Furthermore, maintaining patient engagement and ensuring 
          adherence to therapeutic recommendations becomes more challenging when direct, face-to-face interaction 
          is removed from the therapeutic process.
        </p>
      </div>
    </div>
  );
}