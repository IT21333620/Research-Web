import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Shadhir A.M',
      position: 'Group Leader',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'shadhir03@gmail.com',
      image: '/Images/member1.jpg',
    },
    {
      name: 'Ahamed R.T',
      position: 'Group Member',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'thanishahamed321@gmail.com',
      image: '/Images/member2.jpg',
    },
    {
      name: 'Sapukotana K.R',
      position: 'Group Member',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'kavijasapukotana@gmail.com',
      image: '/Images/member31.jpg',
    },
    {
      name: 'Kumarasiri S.A.P',
      position: 'Group Member',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'ashenpradeep001@gmail.com',
      image: '/Images/member4.jpg',
    },
    {
      name: 'Dr. Kapila Dissanayaka',
      position: 'Supervisor',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'kapila.d@sliit.lk',
      image: '/Images/supervisor.jpg',
    },
    {
      name: 'Prof. Anuradha Jayakody',
      position: 'Co-Supervisor',
      affiliation: 'Sri Lanka Institute of Information Technology',
      email: 'anuradha.j@sliit.lk',
      image: '/Images/co_supervisor.jpg',
    },
  ];

  return (
    <section id="about-us" className="min-h-screen bg-white dark:bg-gray-800 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Meet the dedicated team behind our project, affiliated with the Sri Lanka Institute of Information Technology (SLIIT). Our diverse expertise drives innovation and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 text-center"
            >
              <div className="w-30 h-30 mx-auto aspect-ratio: 1/1 rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src={member.image}
                  alt={`${member.name} profile`}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 ">{member.name}</h3>
              <p className="text-sm font-medium ">{member.position}</p>
              <p className="text-sm font-medium ">{member.affiliation}</p>
              <Link
                href={`mailto:${member.email}`}
                className="text-blue-200 hover:underline text-sm"
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