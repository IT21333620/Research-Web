export default function Milestones() {
  const milestones = [
    {
      date: "January 2023",
      title: "Project Kickoff",
      description: "Officially launched the project with a dedicated team and clear objectives.",
    },
    {
      date: "June 2023",
      title: "Prototype Completion",
      description: "Developed and tested the initial prototype, achieving key functionality milestones.",
    },
    {
      date: "March 2024",
      title: "First Deployment",
      description: "Successfully deployed the first version to a select group of users for feedback.",
    },
    {
      date: "December 2024",
      title: "Full Launch",
      description: "Rolled out the complete platform to the public with enhanced features.",
    },
  ];

  return (
    <section id="milestones" className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Milestones
        </h2>
        <div className="relative">
          {/* Vertical Line for Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-1/2 px-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                  <p className="text-sm text-gray-500">{milestone.date}</p>
                  <p className="mt-2 text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}