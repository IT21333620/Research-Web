export default function Milestones() {
  const milestones = [
    {
      date: "9th August 2024",
      title: "Proposal Presentation & Report",
      description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: "12%",
      outcomes: "LO1-LO5",
    },
    {
      date: "5th December 2024",
      title: "Progress Presentation I",
      description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: "15%",
      outcomes: "LO1-LO5",
    },
    {
      date: "20th March 2025",
      title: "Progress Presentation II",
      description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
      marks: "18%",
      outcomes: "LO1-LO5",
    },
    {
      date: "11th April 2025",
      title: "Final Report",
      description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below include marks for Individual & group reports and also Final report.",
      marks: "19%",
      outcomes: "LO1-LO5",
    },
    {
      date: "26th May 2025",
      title: "Website",
      description: "The Website helps to promote our research project and reveals all details related to the project.",
      marks: "2%",
      outcomes: "LO4",
    },
    {
      date: "28th May 2025",
      title: "Final Presentation and VIVA",
      description: "Viva is held individually to assess each member's contribution to the project.",
      marks: "20%",
      outcomes: "LO1-LO5",
    },
    {
      date: "2nd June 2025",
      title: "Research Paper",
      description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
      marks: "10%",
      outcomes: "LO1-LO4",
    },
    {
      date: "9th June 2025",
      title: "Research Logbook",
      description: "Status of the project is validated through the Logbook. This also includes Status Documents 1 & 2.",
      marks: "4%",
      outcomes: "LO4",
    },
  ];

  const dotColors = [
    'bg-blue-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-cyan-500',
  ];

  return (
    <section id="milestones" className="min-h-screen bg-gray-100 dark:bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-12">
          Our Milestones
        </h2>
        <div className="relative">
          {/* Gradient Vertical Line for Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-indigo-600 h-full"></div>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 px-4">
                <div className={`bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-blue-500 to-indigo-600' : 'from-blue-600 to-teal-500'
                } text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300`}>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-sm font-medium mt-1">{milestone.date}</p>
                  <p className="text-sm font-medium mt-1">Marks: {milestone.marks} </p>
                  <p className="mt-2 text-sm">{milestone.description}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
              {/* Timeline Dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 ${dotColors[index % dotColors.length]} rounded-full border-2 border-white dark:border-gray-800`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}