'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CiGift } from "react-icons/ci";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useSession, signIn } from 'next-auth/react';
import User from '@/helpers/user';
import { Session } from 'next-auth';
import ProgramsDropdown from './Navbar/ProgramsDropdown/page';


const Nav = () => {
	const { data: session, status } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

<<<<<<< HEAD
	return (
		<>
			{/* Header */}
			<div className="w-full h-16 flex items-center p-4 bg-[rgb(23,20,33)] relative z-50">
				<div className="flex items-center w-full max-w-screen-xl mx-auto pl-4">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<img src="https://www.airtribe.live/_nuxt/img/main.6e304f5.svg" alt="Airtribe Logo" className="logo w-6 h-6" />
						<span className="text-white text-3xl font-semibold">Airtribe</span>
					</Link>
=======
                <div className="flex space-x-8 pl-10">
                    <ProgramsDropdown />
                    <Link href="/events" className="  text-lg text-white">Events</Link>
                    <Link href="/upskill" className="text-lg text-white">Upskill for free</Link>
                    <Link href="/reviews" className="text-lg text-white">Reviews </Link>
                    <Link href="/jobportal" className="text-lg text-white">Job board</Link>
>>>>>>> origin/Dhrutesh

					{/* Desktop Menu */}
					<div className="hidden md:flex space-x-8 pl-10">
						<ProgramsDropdown />
						<Link href="/events" className="text-lg text-white">Events</Link>
						<Link href="/upskill" className="text-lg text-white">Upskill for free</Link>
						<Link href="/reviews" className="text-lg text-white">Reviews</Link>
						<Link href="/jobboard" className="text-lg text-white">Job board</Link>
					</div>

					{/* Right Side - Desktop */}
					<div className="hidden md:flex items-center gap-4 ml-auto">
						<div className="w-auto flex items-center cursor-pointer text-white hover:bg-[#3E335F] h-full px-2 py-2 rounded-lg">
							<CiGift />
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

					{/* Mobile Menu Toggle */}
					<button
						onClick={toggleMobileMenu}
						className="md:hidden ml-auto text-white text-xl"
						aria-label="Toggle Menu"
					>
						{mobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>

			{/* Slide-in Mobile Drawer */}
			<div
				className={`fixed top-0 right-0 z-40 h-full w-3/4 bg-[rgb(23,20,33)] transform transition-transform duration-300 ease-in-out ${
					mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="flex flex-col px-6 py-6 space-y-6">
					{/* Close Button */}
					<button
						className="self-end text-white text-2xl"
						onClick={toggleMobileMenu}
						aria-label="Close Menu"
					>
						<FaTimes />
					</button>

					{/* Links */}
					<ProgramsDropdown />
					<Link href="/events" className="text-white" onClick={toggleMobileMenu}>Events</Link>
					<Link href="/upskill" className="text-white" onClick={toggleMobileMenu}>Upskill for free</Link>
					<Link href="/reviews" className="text-white" onClick={toggleMobileMenu}>Reviews</Link>
					<Link href="/jobboard" className="text-white" onClick={toggleMobileMenu}>Job board</Link>

					{/* Divider */}
					<hr className="border-white/20" />

					{/* Auth Button */}
					{status === 'loading' ? null : session ? (
						<User session={session as Session} />
					) : (
						<button
							className="bg-purple-600 text-white w-full flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded hover:bg-purple-700"
							onClick={() => {
								toggleMobileMenu();
								signIn();
							}}
						>
							Login
							<FaArrowRight />
						</button>
					)}
				</div>
			</div>

			{/* Overlay */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
					onClick={toggleMobileMenu}
				/>
			)}
		</>
	);
};

export default Nav;
