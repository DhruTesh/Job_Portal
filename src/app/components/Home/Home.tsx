'use client';

import Image from "next/image";
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#120B23]">
      {/* Grid Background Section */}
      <div className="relative w-screen bg-gradient-to-br from-[#171421] to-[#2D2234]">
        <div className="absolute inset-0 bg-[url('/bg_grid.png')] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 relative z-10 py-16 px-8">
          <div className="text-white">
            <h1 className="text-7xl font-bold leading-tight">Upskill for professional excellence</h1>
            <p className="mt-7 mb-7 text-lg">
              Social learning and expert-led programs to start, transition or boost your career
            </p>
            <div className="mt-6 relative">
              <p className="text-sm uppercase font-semibold text-gray-400">Trusted by</p>
              <div className="mt-2 flex space-x-4 relative z-10">
                <div className="bg-gradient-to-br from-[#15497E] p-4 rounded-xl text-center text-2xl w-34">
                  <p className="text-2xl font-bold text-white">40k+</p>
                  <p className="text-xl text-gray-300">learners</p>
                </div>
                <div className="bg-gradient-to-br from-[#357458] p-4 rounded-xl text-center text-2xl w-34">
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-xl text-gray-300">experts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center w-full">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/HPGroup_image.jpg"
                alt="Community playing foosball"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <section className="text-white py-16 px-6 md:px-20 w-full bg-[#171421]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Join our vibrant community</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Diverse, inclusive and fun! That's how we'd describe the Airtribe community.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Image Block */}
            <div className="bg-black rounded-xl overflow-hidden w-120 h-80">
              <Image 
                src="/frame.jpg" 
                alt="Hands-on Learning" 
                width={384} 
                height={224} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experiential Learning Card */}
            <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl p-6 w-120">
              <h3 className="text-xl font-semibold mb-3 mt-20">Be part of an experiential learning journey</h3>
              <p className="text-base text-gray-200">
                Learn through community sessions, peer-to-peer discussions, in-person meetups and a lot more!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Lifelong Learners Card */}
            <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-xl p-6 w-120 h-80 flex flex-col justify-between pt-20">
              <div>
                <h3 className="text-xl font-semibold mb-3">Join a community of 40,000+ lifelong learners</h3>
                <p className="text-base text-gray-200 mb-4">
                  Enjoy the network and support of learners just like you! Build connections and friendships that could last a lifetime.
                </p>
              </div>
              <button className="bg-white text-green-900 font-semibold py-2 px-4 rounded-lg self-start text-sm mb-10">
                What's the community like?
              </button>
            </div>

            {/* Backend Engineering Card */}
            <div className="relative rounded-xl p-6 w-120 flex flex-col justify-between bg-white text-black overflow-hidden ">
              <Image 
                src="/bg_eng.png"
                alt="Background pattern"
                fill
                className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none rounded-xl"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-purple-800 mb-3 pt-15">Backend Engineering Launchpad</h3>
                <p className="text-base mb-4">
                  Develop, enhance, and hone your backend engineering skills. Apply your learnings to practical projects and become an exceptional developer.
                </p>
              </div>
              <button className="bg-purple-700 text-white py-2 px-4 rounded-lg w-fit text-sm relative z-10 mb-10">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="w-screen bg-[#171421] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-6">
              <Image src="/newsletter.jpg" alt="Newsletter Icon" width={80} height={80} />
            </div>
            <h2 className="text-4xl font-bold mb-4">Explore our writings on<br />Tech, Product and<br />Growth!</h2>
            <p className="text-lg mb-6 text-gray-300">
              Subscribe to our newsletter to stay informed,<br />
              inspired, and ahead of the curve with our curated content.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold">
              Subscribe
            </button>
          </div>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-[#5E3AF3] to-[#4A2AB2] p-6 rounded-2xl text-white relative">
              <p className="text-sm font-semibold mb-2">FOR PRODUCT ENTHUSIASTS</p>
              <div className="mb-4">
                <Image
                  src="/blinkit.jpg"
                  alt="Blinkit Article"
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">🔍 How Blinkit built their Search Ads Engine</h3>
              <p className="text-sm text-gray-200 mb-4">
                Discover how Blinkit developed their search ads product and explore the nuances of the Q-commerce industry by watching the latest episode of Scale by Airtribe. 🚀
              </p>
              <button className="text-white hover:text-gray-300 text-xl">↗</button>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-b from-[#276E5F] to-[#21594E] p-6 rounded-2xl text-white relative">
              <p className="text-sm font-semibold mb-2">FOR TECH ENTHUSIASTS</p>
              <div className="mb-4">
                <Image
                  src="/torrent.jpg"
                  alt="Torrent Article"
                  width={500}
                  height={300}
                  className="rounded-md bg-white"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">How Does Torrent Work?</h3>
              <p className="text-sm text-gray-200 mb-4">
                In today's edition of our newsletter, we will understand the basics of BitTorrent: how files are shared between users, why it's popular, and what it means for downloading large files online.
              </p>
              <button className="text-white hover:text-gray-300 text-xl">↗</button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Problems Section */}
      <div className="w-screen bg-[#171421] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
            Learning problems we've all faced
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              'Learning in isolation',
              'No practical/hands-on experience',
              'No peer support',
              'Difficult to retain what was taught',
              'Hard to get across the finish line',
              'No personal guidance and mentorship',
              'Outdated curriculum',
            ].map((problem, index) => (
              <div key={index} className="bg-gray-800 py-3 px-6 rounded-lg">
                🫤 {problem}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Airtribe Way Section */}
      <div className="w-screen bg-[#171421] text-white py-12 px-6 md:px-16">
        <hr className="border-gray-700 mb-15" />
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
          Presenting the <span className="text-purple-400">Airtribe</span> way!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: '📡',
              title: 'Live interactive sessions by industry experts',
              description:
                'Get valuable industry insights from our instructors who have dedicated years to learning and unlearning.',
            },
            {
              icon: '📝',
              title: 'Dedicated sessions to solve your queries',
              description:
                'We offer doubt-solving sessions with mentors to help you stay on track with the course.',
            },
            {
              icon: '🛠',
              title: 'Hands-on projects to apply your learnings',
              description:
                'Our programs prioritize hands-on learning, with projects at the end of each module to reinforce each topic.',
            },
            {
              icon: '🤝',
              title: 'Active community to help you grow',
              description:
                'Our programs offer a college-like learning experience with a supportive community of like-minded individuals.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
