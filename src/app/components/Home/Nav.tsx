'use client';
import React from 'react'
import Link from 'next/link';
import { CiGift } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { useSession, signIn, signOut } from 'next-auth/react';
import User from '@/helpers/user';
import { Session } from 'next-auth';
import ProgramsDropdown from './Navbar/ProgramsDropdown/page';

const Nav = () => {
    const { data: session, status } = useSession();

    return (
        <div className="w-full h-16 flex items-center p-4 bg-[rgb(23,20,33)] relative">
            <div className="flex items-center w-full max-w-screen-xl mx-auto pl-4">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="https://www.airtribe.live/_nuxt/img/main.6e304f5.svg" alt="Airtribe Logo" className="logo" />
                    <span className="text-white text-3xl font-semibold">Airtribe </span>
                </Link>

                <div className="flex space-x-8 pl-10">
                    <ProgramsDropdown />
                    <Link href="/events" className="  text-lg text-white">Events</Link>
                    <Link href="/upskill" className="text-lg text-white">Upskill for free</Link>
                    <Link href="/reviews" className="text-lg text-white">Reviews </Link>
                    <Link href="/jobboard" className="text-lg text-white">Job board</Link>

                </div>

                <div className="flex items-center gap-4 ml-auto">
                    <div className="w-auto flex items-center cursor-pointer text-white hover:bg-[#3E335F] h-full px-2 py-2 rounded-lg">
                        <CiGift />
                    </div>
                </div>

                {status === 'loading' ? null : session ? (
            <User session={session as Session} />
          ) : (
            <button
              className="bg-purple-600 text-white flex items-center gap-2 px-4 py-2 font-semibold rounded hover:bg-purple-700"
              onClick={() => signIn()}
            >
              Login
              <FaArrowRight />
            </button>
          )}
            </div>

        </div>


    );
};

export default Nav;