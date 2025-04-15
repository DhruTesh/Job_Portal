import React, { useState } from "react";
import { useRouter } from 'next/router';
import { jobs } from '../../data/jobs';
import Link from 'next/link';
import { Bell } from "lucide-react";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;
  const allJobs = [...jobs.product, ...jobs.engineering];
  const job = allJobs.find(job => job.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!job) return <p className="text-center">Job not found</p>;

  return (
    <div className="max-w-7xl mx-auto bg-gray-100 min-h-screen p-4 flex flex-col items-center">
      {/* Back to Job Board Section */}
      <div className="w-full mb-5">
        <Link href="/" className="flex items-center text-gray-900 hover:text-gray-600 transition cursor-pointer">
          <span className="text-lg">←</span>
          <span className="ml-2 text-sm">Job Board</span>
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Details Section */}
        <div className="md:col-span-2 bg-white p-6 shadow-lg rounded-lg">
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-[#8C5543] text-2xl mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">{job.title} at {job.company}</h1>
          </div>
          <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {job.location}
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" /> {job.type}
            </div>
            <p>Experience: {job.experience}</p>
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <button className="bg-[#683FBE] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full">
            Apply now
          </button>
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          {/* Company Info */}
          <div className="bg-white p-4 shadow-lg rounded-lg text-left">
            <h3 className="text-lg font-semibold text-gray-900">{job.company}</h3>
            <a href={job.website} target="_blank" className="text-blue-600 hover:underline">{job.website}</a>
            <button className="mt-4 w-full bg-[#683FBE] text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
              Apply now
            </button>
            <button className="mt-2 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              View other openings
            </button>
          </div>

          {/* Course Bar */}
          <div className="bg-white p-4 shadow-lg rounded-lg text-left pb-4">
            <h3 className="text-lg font-semibold text-gray-900">Master Backend Engineering</h3>
            <p className="text-gray-700">Backend Engineering Launchpad</p>
            <p className="text-gray-500 text-sm">Next batch starts on 15 Mar</p>
            <button className="mt-2 w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
              Watch course trailer
            </button>
          </div>

          {/* Notification Bar */}
          <div
            className="mt-5 flex items-center justify-center cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="relative bg-[#FEF6E5] border border-[#FFDF20] text-center text-black rounded-lg p-6 w-full max-w-md sm:max-w-lg shadow-lg">
              {/* Circular Icon at the Top */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#FEF6E5] rounded-full p-4 shadow-md">
                <Bell className="text-yellow-700 text-3xl" />
              </div>

              {/* Content */}
              <h2 className="text-lg font-semibold mt-6">Always stay in the know!</h2>
              <p className="text-gray-600 text-sm mt-2">
                Join our community and stay notified of the latest job opportunities.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">
          <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-full sm:max-w-2xl w-full relative flex flex-col sm:flex-row items-center">
            <button className="absolute top-2 right-2 text-gray-600 text-2xl cursor-pointer" onClick={() => setIsModalOpen(false)}>×</button>
            <div className="flex flex-col text-left max-w-full sm:max-w-sm px-4 sm:px-0">
              <div className="flex items-center mb-4">
                <Bell className="text-yellow-600 text-3xl mr-3" />
                <h2 className="text-xl font-bold">Always stay in the know!</h2>
              </div>
              <p className="text-gray-600">Join our community and stay notified of the latest job opportunities.</p>
              <p className="mt-4 font-bold">Join using the link or scan the QR</p>
              <a
                href="https://chat.whatsapp.com/H6saA3Qlu3Y"
                className="text-[#683FBE] flex items-center border border-gray-200 px-4 py-2 rounded-lg text-sm mt-2 w-fit"
              >
                <img src="/whatsapp.jpg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                https://chat.whatsapp.com/H6saA3Qlu3Y
              </a>
            </div>
            <img src="/qr.png" alt="QR Code" className="w-40 h-40 sm:w-60 sm:h-60 mt-6 sm:mt-0 sm:ml-6" />
          </div>
        </div>
      )}
    </div>
  );
}
