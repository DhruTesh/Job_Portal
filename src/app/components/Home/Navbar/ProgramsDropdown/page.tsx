'use client'; // If using in Next.js App Router

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Optional: For a cleaner dropdown arrow

const programs = [
  { name: 'AI-First Product Management', href: '/courses/product-management-launchpad' },
  { name: 'Backend Engineering Launchpad', href: '/courses/backend-engineering-launchpad' },
  { name: 'Product Management - Classroom Edition', href: 'https://lp.airtribe.live/product-management-classroom' },
  { name: 'PM Interview Mastery', href: 'https://lp.airtribe.live/pm-interview-mastery' },
  { name: 'Tech Mastery for PMs', href: 'https://lp.airtribe.live/tech-mastery' },
  { name: 'DSA for Career Advancement', href: 'https://lp.airtribe.live/dsa-16-week-course' },
  { name: 'Full-stack Development Launchpad', href: '/courses/fullstack-development-launchpad' },
  { name: 'Data Analytics Launchpad', href: '/courses/data-science-launchpad' },
];

export default function ProgramsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="  text-lg text-white">Programs</div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-72 bg-[rgb(55,35,97)] shadow-lg rounded-md z-50 p-2">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.href}
              className="block px-4 py-2 text-m text-white  hover:bg-violet-700 rounded-md"
              target={program.href.startsWith('http') ? '_blank' : '_self'}
              rel={program.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {program.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
