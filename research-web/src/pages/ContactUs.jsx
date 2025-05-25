import { useState } from 'react';

export default function ContactUs() {
  const [copied, setCopied] = useState(false);

  const emailTemplate = `Subject: Inquiry About AI-Enhanced Distance Therapy System

Dear [Recipient's Name],

I hope this message finds you well. My name is [Your Name], and my email is [Your Email]. I am writing to inquire about the AI-Enhanced Distance Therapy System developed by your team. I would like to know more about [specific inquiry, e.g., features, implementation, or collaboration opportunities].

Could you please provide additional details or let me know the next steps? I would appreciate a response at your earliest convenience.

Thank you for your time and assistance.

Best regards,
[Your Name]
[Your Contact Information]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Have questions or need more information about our project? Use the email template below to get in touch with us.
        </p>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
            Email Template
          </h3>
          <div className="mb-4">
            <textarea
              readOnly
              value={emailTemplate}
              className="w-full h-48 p-4 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg resize-none focus:outline-none"
            />
          </div>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      </div>
    </section>
  );
}