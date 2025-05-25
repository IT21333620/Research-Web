import Link from 'next/link';
import Image from 'next/image';

export default function Downloads() {
  const sections = [
    {
      title: 'Project Charter',
      documents: [
        {
          name: 'Project Charter.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EaK0ZycTWIpFoakmyeUOl3wBmpEo8931FliYtyIlUr1iDw?e=f3Tte7',
        },
      ],
    },
    {
      title: 'Proposal Documents',
      documents: [
        {
          name: 'Member 1 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EQrhi9kVLOtLleNNzrBiZrkBsgjaM8qVohP_drGNEcJ36A?e=VU4a9u',
        },
        {
          name: 'Member 2 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EVOR9Db51RlJgmv8i9DbBjQBpymydqUiQSErBdUg0FTdcA?e=ZhOyjH',
        },
        {
          name: 'Member 3 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EXFPylTlmxVDh-4Gp_ZWDjkBNGsaq81M9lVcZs6RcvqsBA?e=Ld5YWC',
        },
        {
          name: 'Member 4 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EVgz26aS2QhMpe450XY45AIBgZXcAxTNCnXDaK8ICwqjyg?e=OkD9qc',
        },
      ],
    },
    {
      title: 'Check List Documents',
      documents: [
        {
          name: 'Check List 1.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:t:/g/personal/it21333620_my_sliit_lk/EXSzeLBchOFPrXan-XtSExEBzapjryvAWvkIZAlosMRjUw?e=ga64rU',
        },
        {
          name: 'Check List 2.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EcoMc_K8Wt9OsfRGjYqWl1IBrHsUZvOWvYnjfmOLycQbDw?e=Ss9jE9',
        },
        {
          name: 'Check List 3.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/personal/it21333620_my_sliit_lk/_layouts/15/download.aspx?SourceUrl=/personal/it21333620_my_sliit_lk/Documents/Check%20List%203.pdf',
        },
      ],
    },
    {
      title: 'Final Documents',
      documents: [
        {
          name: 'Main Document - Main.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/ESxdG50jAxlHovoVB1X20wgBN38lFPoeO645w4r8tq6qHg?e=VCyCiw',
        },
        {
          name: 'Member 1 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EdX34H3UFtpDniAXQkeT0awBkAAc_lKPS08P4xCFTdyWjQ?e=QPnFha',
        },
        {
          name: 'Member 2 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EbW6vHuiA8ZPkQ8H7TuxRV4BFT8cimwQ9_XIdPbK1wghiA?e=8oQE3I',
        },
        {
          name: 'Member 3 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EcSeh7k2fc1HpW2E_p1SZSgBhYnS8pE_uade5wVoo_AUnQ?e=fnxfHg',
        },
        {
          name: 'Member 4 Document.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EQyGtRjIYuVBvUoRAbUj-XcBjdcn-j2q7dWrakWWS6EU5g?e=dOh5pK',
        },
      ],
    },
    {
      title: 'Presentations',
      documents: [
        {
          name: 'Proposal Presentation.pptx',
          preview: '/Images/pptx.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/ETypGklxFUxGrpjvOI5zCGAB_TRWi6k9-n8R_p61aKtX8g?e=R0GIlr',
        },
        {
          name: 'Progress Presentation-1.pptx',
          preview: '/Images/pptx.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/ETypGklxFUxGrpjvOI5zCGAB_TRWi6k9-n8R_p61aKtX8g?e=R0GIlr',
        },
        {
          name: 'Progress Presentation-2.pptx',
          preview: '/Images/pptx.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/ETexI8N7YwtDnjvY3xc5TWgBfmxiwMMDxyqcfsqW-QuMmQ?e=6VfUbF',
        },
        {
          name: 'Final Presentation.pptx',
          preview: '/Images/pptx.png',
          file: 'https://drive.google.com/uc?export=download&id=[ReplaceWithID]',
        },
      ],
    },
    {
      title: 'Research Papers',
      documents: [
        {
          name: 'Research Paper 1.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EXYUVk4nKFtKsOt6vLoJNvcBYTKiF3FTdYdqaPvhkkHyGQ?e=TQYsRd',
        },
        {
          name: 'Research Paper 2.pdf',
          preview: '/Images/pdf-file.png',
          file: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it21333620_my_sliit_lk/EQDq4WmgrYxCiN9Z2OrT4JsB8kMwB8Y7qhGKSzEO_s0V0w?e=aGUs6o',
        },
      
      ],
    },
  ];

  return (
    <section id="downloads" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">
          Downloads
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Access our collection of documents and presentations available in PDF and PPTX format. Click on any file to download.
        </p>
        <div className="space-y-12">
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                {section.title}
              </h3>
              <div
                className={`grid gap-6 ${
                  section.documents.length === 1
                    ? 'grid-cols-1'
                    : section.documents.length === 3
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : section.documents.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : section.documents.length === 4
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'
                }`}
              >
                {section.documents.map((doc, docIndex) => (
                  <a
                    key={docIndex}
                    href={doc.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                  >
                    <Image
                      src={doc.preview}
                      alt={`${doc.name} preview`}
                      width={100}
                      height={100}
                      className="mb-2 object-contain"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300 text-center truncate w-full">
                      {doc.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}