'use client';

import Image from "next/image";
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
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
                alt="Hands-on Learning"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Learning Problems Section - Wrapped Inside One Div */}
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
