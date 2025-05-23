import Link from 'next/link';
import Image from 'next/image';

export default function Downloads() {
  const documents = [
    {
      name: 'Project Proposal.pdf',
      preview: '/images/pdf-file.png',
      file: '/docs/project-proposal.pdf',
    },
    {
      name: 'Technical Specification.pdf',
      preview: '/images/pdf-file.png',
      file: '/docs/technical-specification.pdf',
    },
    {
      name: 'User Guide.pdf',
      preview: '/images/pdf-file.png',
      file: '/docs/user-guide.pdf',
    },
  ];

  return (
    <section id="downloads" className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Downloads
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Access our collection of documents available in PDF format. Click on any file to download.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.file}
              download
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={doc.preview}
                alt={`${doc.name} preview`}
                width={100}
                height={100}
                className="mb-2 object-contain"
              />
              <span className="text-sm text-gray-600 text-center truncate w-full">{doc.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}