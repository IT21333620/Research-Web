import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Methodology() {
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

  return (
    <div ref={cardRef} className="py-10 bg-white dark:bg-gray-900 rounded-xl" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Methodology</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            The proposed system is architected to support therapists during distance therapy sessions by providing real-time emotional monitoring and feedback.
          </p>
        </div>
        <div className="mb-8 flex justify-center data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <Image
                src="/Images/diagram3.jpg"
                alt="Overall System Diagram"
                width={480}
                height={400}
                className="rounded-lg shadow-md object-contain"
            />
        </div>
        <div className="space-y-4">
            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
          <p className="text-gray-600 dark:text-gray-400">
            Each of these modules is designed to function both independently and collaboratively within the overall system. The architecture adopts a client-server model where the patient application captures real-time data and transmits it securely to the server, where processing and analysis occur. The therapist interface, accessible via a web application, presents real-time visualizations and feedback derived from the analysis.
          </p>
        </div>
          <details className="group data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg cursor-pointer">
              <h3 className="text-xl font-semibold">Facial Emotion Recognition Module</h3>
              <span className="transition-transform group-open:-rotate-180">▼</span>
            </summary>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow-sm">
                <div className="mb-8 flex justify-center data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <Image
                src="/Images/diagram4.jpg"
                alt="Facial Emotion Recognition System Diagram"
                width={480}
                height={400}
                className="rounded-lg shadow-md object-contain"
            />
        </div>
              <p className="text-gray-600 dark:text-gray-400">
                The Realtime Stress Detection through Facial Emotion Recognition and Emotional State Fluctuations module is a cornerstone of the proposed system. It is designed to bridge the observational limitations inherent in teletherapy by providing therapists with real-time insights into the emotional states and stress levels of patients. Traditional teletherapy often restricts the therapist’s ability to perceive non-verbal cues such as facial expressions, which play a crucial role in assessing a patient's emotional and psychological condition. 
              </p>
              <br/>
              <p className="text-gray-600 dark:text-gray-400">
                By leveraging advancements in computer vision and deep learning, this module aims to restore the depth of interaction that is otherwise lost in remote settings. The methodology for developing this module encompasses several critical stages, including data collection and preprocessing, model development, real-time emotional tracking, stress mapping, and therapist feedback visualization.
              </p>
            </div>
          </details>
          <details className="group data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg cursor-pointer">
              <h3 className="text-xl font-semibold">Vocal Emotion Recognition Module</h3>
              <span className="transition-transform group-open:-rotate-180">▼</span>
            </summary>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow-sm">
                <div className="mb-8 flex justify-center data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <Image
                src="/Images/diagram5.jpg"
                alt="Vocal Emotion Recognition System Diagram"
                width={480}
                height={400}
                className="rounded-lg shadow-md object-contain"
            />
        </div>
              <p className="text-gray-600 dark:text-gray-400">
               	Hybrid CNN-LSTM Model for Emotion & Stress Detection – Develop and train a CNN-LSTM model to analyze vocal data for emotion and stress recognition, aiming for 85% accuracy on a diverse test set.
              </p>
              <br/>
              <p className="text-gray-600 dark:text-gray-400">
                Real-Time Emotion Analysis Application – Create an application that continuously analyzes vocal inputs, providing therapists with real-time emotional feedback with 85% or higher accuracy and minimal latency.
              </p>
              <br/>
              <p className="text-gray-600 dark:text-gray-400">
               Integration of Voice & Facial Analysis – Combine SER and FER for a comprehensive emotional assessment, enhancing system accuracy by 10% or higher.
              </p>
            </div>
          </details>
          <details className="group data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg cursor-pointer">
              <h3 className="text-xl font-semibold">Fair Scheduling Algorithm</h3>
              <span className="transition-transform group-open:-rotate-180">▼</span>
            </summary>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow-sm">
                <div className="mb-8 flex justify-center data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <Image
                src="/Images/diagram6.jpg"
                alt="Fair Scheduling Algorithm System Diagram"
                width={300}
                height={400}
                className="rounded-lg shadow-md object-contain"
            />
        </div>
              <p className="text-gray-600 dark:text-gray-400">
                The system consists of two main user interfaces: one for patients and another for therapists. Patients interact with the system through a mobile application, while therapists access it via a desktop web application. Both interfaces are designed to be user-friendly, secure, and responsive, ensuring seamless interaction with the backend services.
                At the core of the backend, the first module is Capture Stress. This module is responsible for managing the interactive activities performed by the patient. It collects relevant cognitive and emotional response data, such as reaction time, accuracy, and behavioural patterns, during the activity sessions.
              </p>
              <br/>
              <p className="text-gray-600 dark:text-gray-400">
               Following data capture, the Calculate Stress module processes the raw interaction data to derive a quantitative stress score for each patient. This involves applying feature extraction techniques and running the stress scoring algorithm, which categorizes patients into low, moderate, or high stress levels.
              </p>
              <br/>
              <p className="text-gray-600 dark:text-gray-400">
               The Scheduling Algorithm then utilizes the calculated stress scores to prioritize therapy sessions based on patient urgency. It dynamically allocates session slots by balancing the patient’s psychological needs, therapist availability, and individual scheduling preferences. This module ensures fair and clinically relevant session assignment rather than relying on a first-come, first-served basis.
              </p>
              <br/>
              <p className="text-gray-600 dark:text-gray-400">
                Processed data and scheduling information are stored in a secure Database, which acts as the central repository for all patient records, stress scores, scheduled sessions, and therapist feedback. The database ensures high availability, integrity, and confidentiality of sensitive healthcare information.
              </p>
            </div>
          </details>
          <details className="group data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
            <summary className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg cursor-pointer">
              <h3 className="text-xl font-semibold">Post-Therapy Engagement Monitoring Module</h3>
              <span className="transition-transform group-open:-rotate-180">▼</span>
            </summary>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow-sm">
                <div className="mb-8 flex justify-center data-[visible='true']:opacity-100 data-[visible='false']:opacity-0 transition-opacity duration-500 data-observe">
                    <Image
                        src="/Images/diagram7.jpg"
                        alt="Post-Therapy Engagement System Diagram"
                        width={480}
                        height={400}
                        className="rounded-lg shadow-md object-contain"
                    />
                </div>
              <p className="text-gray-600 dark:text-gray-400">
                The development of the Activity Recommendation System is centered around a rule-based decision tree that assigns appropriate stress-reducing activities based on each patient's unique profile. This system considers evidence-based practices—such as deep breathing and mindfulness meditation—and categorizes each activity by intensity and type (e.g., indoor/outdoor, physical/mental). Recommendations are personalized by assessing session-based stress levels and patient age, ensuring more intense or active tasks are assigned when appropriate, such as gardening for high-stress, outdoor-preferred individuals or calming exercises for older patients.
              </p>
                <br/>
              <p className="text-gray-600 dark:text-gray-400">
                To support passive monitoring and progress tracking, patients use a Flutter-based mobile app to log their activity completion status, with options like "Completed," "Partially Completed," or "Not Started." The app includes a timer with pause and stop functionality to capture engagement durations. Progress is evaluated using a scoring system (0–100), and patients are categorized into full, partial, or non-completion groups. When progress falls short, the system automatically adjusts the activity intensity. If repeated attempts show inadequate progress, the patient receives warnings and is prioritized for immediate therapeutic intervention.
              </p>
               <br/>
              <p className="text-gray-600 dark:text-gray-400">
                In the feedback and intervention module, therapists access a web-based dashboard showing their assigned patients’ completion status and overall engagement. The system generates real-time alerts, enabling therapists to act promptly. Based on completion rates, therapists can assign new activities, issue warnings, or schedule urgent therapy sessions. The system is being implemented in three phases: first, creating the profiling and activity recommendation engine; second, developing and connecting the mobile app with potential IoT capabilities; and third, deploying the therapist dashboard with integrated feedback and intervention logic.
              </p>
            </div>
          </details>
        </div>
        
      </div>
    </div>
  );
}