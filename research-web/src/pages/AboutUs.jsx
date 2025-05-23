import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Dr. Anjali Perera',
      position: 'Project Lead',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'anjali.perera@sliit.lk',
      image: '/images/team-member-1.jpg',
    },
    {
      name: 'Prof. Chaminda Silva',
      position: 'Senior Developer',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'chaminda.silva@sliit.lk',
      image: '/images/team-member-2.jpg',
    },
    {
      name: 'Ms. Nimali Fernando',
      position: 'UI/UX Designer',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'nimali.fernando@sliit.lk',
      image: '/images/team-member-3.jpg',
    },
    {
      name: 'Mr. Kasun Wijesinghe',
      position: 'Software Engineer',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'kasun.wijesinghe@sliit.lk',
      image: '/images/team-member-4.jpg',
    },
    {
      name: 'Dr. Sanduni Ratnayake',
      position: 'Data Analyst',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'sanduni.ratnayake@sliit.lk',
      image: '/images/team-member-5.jpg',
    },
    {
      name: 'Mr. Tharindu Jayawardena',
      position: 'Quality Assurance Lead',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'tharindu.jayawardena@sliit.lk',
      image: '/images/team-member-6.jpg',
    },
  ];

  return (
    <section id="about-us" className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Meet the dedicated team behind our project, affiliated with the Sri Lanka Institute of Information Technology (SLIIT). Our diverse expertise drives innovation and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <Image
                src={member.image}
                alt={`${member.name} profile`}
                width={120}
                height={120}
                className="mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-600">{member.affiliation}</p>
              <Link
                href={`mailto:${member.email}`}
                className="text-blue-600 hover:underline text-sm"
              >
                {member.email}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}