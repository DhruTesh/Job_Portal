import React from 'react'
import Link from 'next/link';
import { CiGift } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Nav = () => {
    return (
        <div className="w-auto h-16 flex items-center  p-4 bg-[rgb(23,20,33)]">
            <div className="flex items-center space-x-4 pl-[20rem]">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="https://www.airtribe.live/_nuxt/img/main.6e304f5.svg" alt="Airtribe Logo" className="logo" />
                    <span className="text-white text-3xl font-semibold">Airtribe</span>
                </Link>

                <div className="flex space-x-8 pl-10">
                    <Link href="/programs" className="text-lg text-white">Programs</Link>
                    <Link href="/events" className="  text-lg text-white">Events</Link>
                    <Link href="/upskill" className="text-lg text-white">Upskill for free</Link>
                    <Link href="/reviews" className="text-lg text-white">Reviews</Link>
                    <Link href="/jobboard" className="text-lg text-white">Job board</Link>

                </div>

                <div className="flex items-center  space-x-4 pl-[20rem]">
                    <div className="w-auto flex items-center cursor-pointer bg-white h-full px-4 py-2 rounded-full">
                        <CiGift />
                    </div>
                </div>

                <div className="ml-4 flex">
                    <Link href="/signup">

                        <button className="bg-purple-600 text-white flex items-center gap-2 px-4 py-2 font-semibold rounded hover:bg-purple-700 opacity-100" >
                            Sign up
                            <FaArrowRight />

                        </button>

                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Nav;