// import React from 'react'
// import Link from 'next/link';
//  import { CiGift } from "react-icons/ci";
// import { FaArrowRight } from "react-icons/fa";

// const Nav = () => {
//     return (
//         <div className="w-auto h-16 flex items-center  p-4 bg-[rgb(23,20,33)]">
//             <div className="flex items-center space-x-4 pl-[20rem]">
//                 <Link href="/" className="flex items-center space-x-2">
//                     <img src="https://www.airtribe.live/_nuxt/img/main.6e304f5.svg" alt="Airtribe Logo" className="logo" />
//                     <span className="text-white text-3xl font-semibold">Airtribe</span>
//                 </Link>

//                 <div className="flex space-x-8 pl-10">
//                     <Link href="/programs" className="text-lg text-white">Programs</Link>
//                     <Link href="/events" className="  text-lg text-white">Events</Link>
//                     <Link href="/upskill" className="text-lg text-white">Upskill for free</Link>
//                     <Link href="/reviews" className="text-lg text-white">Reviews</Link>
//                     <Link href="/Joblist" className="text-lg text-white">Job board</Link>

//                 </div>

//                 <div className="flex items-center  space-x-4 pl-[20rem]">
//                     <div className="w-auto flex items-center cursor-pointer bg-white h-full px-4 py-2 rounded-full">
//                         <CiGift />
//                     </div>
//                 </div>

//                 <div className="ml-4 flex">
//                     <Link href="/signup">

//                         <button className="bg-purple-600 text-white flex items-center gap-2 px-4 py-2 font-semibold rounded hover:bg-purple-700 opacity-100" >
//                             Sign up
//                             <FaArrowRight />

//                         </button>

//                     </Link>
//                 </div>

//             </div>
//         </div>

//     );
// };

// export default Nav;




"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { CiGift } from "react-icons/ci";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setMenuOpen(false);
    };

    return (
        <div className="w-full h-16 flex items-center p-4 bg-[rgb(23,20,33)] relative">
            <div className="flex items-center w-full max-w-screen-xl mx-auto pl-4">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="https://www.airtribe.live/_nuxt/img/main.6e304f5.svg" alt="Airtribe Logo" className="logo" />
                    <span className="text-white text-3xl font-semibold">Airtribe</span>
                </Link>

                <div className="hidden lg:flex items-center space-x-2 ml-8">
                    <Link href="/programs" onClick={() => handleMenuClick('programs')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'programs' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Programs</Link>
                    <Link href="/events" onClick={() => handleMenuClick('events')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'events' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Events</Link>
                    <Link href="/upskill" onClick={() => handleMenuClick('upskill')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'upskill' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Upskill for free</Link>
                    <Link href="/reviews" onClick={() => handleMenuClick('reviews')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'reviews' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Reviews</Link>
                    <Link href="/Joblist" onClick={() => handleMenuClick('Joblist')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'Joblist' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Job board</Link>
                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <div className="w-auto flex items-center cursor-pointer text-white hover:bg-[#3E335F] h-full px-2 py-2 rounded-lg">
                        <CiGift />
                    </div>
                    <Link href="/signup">
                        <button className="bg-[#683FBE] text-white flex items-center gap-2 px-4 py-2 font-semibold rounded hover:bg-[#533298] cursor-pointer opacity-100">
                            Sign up
                            <FaArrowRight />
                        </button>
                    </Link>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl lg:hidden">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-[rgb(23,20,33)] flex flex-col items-center space-y-6 py-6 lg:hidden z-50">
                    <Link href="/programs" onClick={() => handleMenuClick('programs')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'programs' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Programs</Link>
                    <Link href="/events" onClick={() => handleMenuClick('events')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'events' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Events</Link>
                    <Link href="/upskill" onClick={() => handleMenuClick('upskill')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'upskill' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Upskill for free</Link>
                    <Link href="/reviews" onClick={() => handleMenuClick('reviews')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'reviews' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Reviews</Link>
                    <Link href="/Joblist" onClick={() => handleMenuClick('Joblist')} className={`text-lg px-3 py-1 rounded-lg ${activeMenu === 'Joblist' ? 'bg-[#3E335F] text-white' : 'text-white'}`}>Job board</Link>
                </div>
            )}
        </div>
    );
};

export default Nav;