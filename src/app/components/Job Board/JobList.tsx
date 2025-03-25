'use client'
import { useState } from "react";
import Link from "next/link";
import { jobs } from "../../components/Job Board/data/jobs";
import { Search, Bell } from "lucide-react";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import ProductManagerBanner from "./ProductManagerBanner";
// import Footer from "./Footer";

// Define the type for job categories
type Category = "product" | "engineering";

export default function JobList() {
    const [category, setCategory] = useState<Category>("product");
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [experienceFilter, setExperienceFilter] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredJobs = jobs[category].filter(
        (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (locationFilter === "" ||
                job.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
            (experienceFilter === "" || job.experience === experienceFilter)
    );

    const jobsPerRow = 4;
    const numRows = 2;
    const firstBatchJobs = filteredJobs.slice(0, jobsPerRow * numRows);
    const secondBatchJobs = filteredJobs.slice(jobsPerRow * numRows, jobsPerRow * (numRows + 1));

    return (
        <div className="max-w-full ">
            {/* Title Bar */}
            <h1 className="text-5xl font-bold text-center bg-[#251C3B] text-white pt-15 pb-5">
                {category === "product" ? "Product Manager Jobs" : "Software Developer Jobs"}
            </h1>
            <p className="text-l text-center bg-[#251C3B] text-white pb-10">
                An exclusive collection of curated job opportunities for you.
            </p>

            {/* Search Bar */}
            <div className="relative my-4 max-w-xl mx-auto">
                <Search className="absolute left-4 top-4 text-black-500" size={22} />
                <input
                    type="text"
                    placeholder="Search by role, location, experience..."
                    className="shadow-lg pl-12 pr-4 py-4 w-full bg-white rounded-md focus:ring-1"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Notification Bar */}
            <div
                className="bg-[#FEF6E5] border border-[#FFDF20] text-sm text-black px-6 py-3 rounded-md flex items-center justify-between max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="flex items-center">
                    <Bell className="text-yellow-700 mr-2" />
                    <span className="font-medium">Get regular updates about new openings!</span>
                </div>
                <span className="text-lg">→</span>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">
                    <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg max-w-full sm:max-w-2xl w-full relative flex flex-col sm:flex-row items-center">
                        <button className="absolute top-2 right-2 text-gray-600 text-2xl cursor-pointer" onClick={() => setIsModalOpen(false)}>×</button>

                        {/* Left Content */}
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

                        {/* Right Side - Large QR Code */}
                        <img src="/qr.png" alt="QR Code" className="w-40 h-40 sm:w-60 sm:h-60 mt-6 sm:mt-0 sm:ml-6 justify-start" />
                    </div>
                </div>
            )}


            {/* Category Switch */}
            <div className="max-w-[15rem] mx-auto flex justify-center my-4 p-2 rounded-md border-2 border-gray-200">
                <button
                    onClick={() => setCategory("product")}
                    className={`px-4 py-2 cursor-pointer ${category === "product"
                        ? "bg-[#683FBE] text-white text-xl rounded-lg"
                        : "bg-gray-100"
                        }`}
                >
                    Product
                </button>
                <button
                    onClick={() => setCategory("engineering")}
                    className={`px-4 py-2 ml-2 cursor-pointer ${category === "engineering"
                        ? "bg-[#683FBE] text-white text-xl rounded-lg"
                        : "bg-gray-100"
                        }`}
                >
                    Engineering
                </button>
            </div>

            {/* Filters & Post Job Button */}
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between mt-4 space-y-4 sm:space-y-0">
                <h1 className="text-2xl font-bold">{filteredJobs.length} Jobs</h1>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Experience Dropdown */}
                    <select
                        className="h-[40px] border border-gray-300 px-4 rounded text-gray-400 w-[180px]"
                        value={experienceFilter}
                        onChange={(e) => setExperienceFilter(e.target.value)}
                    >
                        <option value="">Min Experience</option>
                        <option value="0-2 years">0-2 years</option>
                        <option value="2-5 years">2-5 years</option>
                        <option value="3-6 years">3-6 years</option>
                    </select>

                    {/* Location Filter */}
                    <input
                        type="text"
                        placeholder="Filter by location..."
                        className="h-[40px] border border-gray-300 px-4 rounded text-gray-600 w-[200px]"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                    />

                    {/* Post a Job Button */}
                    <button className="h-[40px] bg-[#683FBE] text-white px-5 rounded font-medium cursor-pointer">
                        Post a Job
                    </button>
                </div>
            </div>

            {/* 🔹 FIRST BATCH (2 Rows, 8 Jobs) */}
            <div className="max-w-7xl mx-auto grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 md:px-8 lg:px-10">
                {firstBatchJobs.map((job) => (
                    <Link key={job.id} href={`/job/${job.id}`} className="block">
                        <div className="rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg cursor-pointer bg-white w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center space-x-3">
                                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-md" />
                                    <div>
                                        <h2 className="font-semibold text-base md:text-lg">{job.company}</h2>
                                        <p className="text-xs md:text-sm text-gray-500">Posted on {job.post}</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mt-3">{job.title}</h3>
                            </div>
                            <div className="mt-6 space-y-1 text-gray-600 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CiLocationOn className="text-gray-700" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <CiClock2 className="text-gray-700" />
                                    <span>{job.type}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>



            {/* 🔹 Product Manager Banner */}
            <div className="max-w-7xl mx-auto my-10 justify-center">
                <ProductManagerBanner />
            </div>

            {/* 🔹 SECOND BATCH (4 Jobs Below Banner) */}
            <div className="max-w-7xl mx-auto grid gap-4 m-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 md:px-8 lg:px-10">
                {secondBatchJobs.map((job) => (
                    <Link key={job.id} href={`/job/${job.id}`} className="block">
                        <div className="rounded-lg border border-gray-200 p-4 shadow-md hover:shadow-lg cursor-pointer bg-white w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center space-x-3">
                                    <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-md" />
                                    <div>
                                        <h2 className="font-semibold text-base md:text-lg">{job.company}</h2>
                                        <p className="text-xs md:text-sm text-gray-500">Posted on {job.post}</p>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mt-3">{job.title}</h3>
                            </div>
                            <div className="mt-6 space-y-1 text-gray-600 text-sm">
                                <div className="flex items-center space-x-2">
                                    <CiLocationOn className="text-gray-700" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center space-x-2 mt-2">
                                    <CiClock2 className="text-gray-700" />
                                    <span>{job.type}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer
            <Footer /> */}

        </div>
    );
}

