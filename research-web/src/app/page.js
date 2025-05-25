'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './globals.css';
import Home from '@/pages/Home';
import Milestones from '@/pages/MileStones';
import ProjectScope from '@/pages/ProjectScope';
import Downloads from '@/pages/Download';
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import Header from '@/components/Header';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex space-x-8">
              <Link
                href="#home"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="#project-scope"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'project-scope' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Project Scope
              </Link>
              <Link
                href="#milestones"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'milestones' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Milestones
              </Link>
              <Link
                href="#downloads"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'downloads' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Downloads
              </Link>
              <Link
                href="#about-us"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  activeSection === 'about-us' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <Header/> */}

      {/* Page Content */}
      <main className="pt-16">
        <Home />
        <ProjectScope/>
        <Milestones/>
        <Downloads/>
        <AboutUs/>
        <ContactUs/>
      </main>
    </div>
  );
}