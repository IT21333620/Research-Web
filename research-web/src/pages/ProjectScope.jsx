import Link from 'next/link';

export default function ProjectScope() {
  const objectives = [
    {
      title: "Innovative Solutions",
      description: "Develop cutting-edge tools to address industry challenges and drive progress.",
    },
    {
      title: "User-Centric Design",
      description: "Create intuitive and accessible interfaces to enhance user experience.",
    },
    {
      title: "Scalable Architecture",
      description: "Build a robust and scalable platform to support future growth and integration.",
    },
    {
      title: "Sustainability Focus",
      description: "Incorporate eco-friendly practices to ensure long-term environmental impact.",
    },
  ];

  return (
    <section id="project-scope" className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Project Scope
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Our project aims to deliver a comprehensive platform that empowers users with innovative tools and sustainable solutions. Below are the key objectives driving our vision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{objective.title}</h3>
              <p className="mt-2 text-gray-600">{objective.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#milestones"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View Our Milestones
          </Link>
        </div>
      </div>
    </section>
  );
}