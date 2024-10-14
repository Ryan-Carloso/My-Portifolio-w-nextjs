// components/Header.tsx
"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface HeaderProps {
  isVisible: boolean
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  return (
    <header id="home" className="container mx-auto px-4 py-24 md:py-32 relative z-10">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div
          className="mb-6 md:mb-0 transition-all duration-1000 ease-in-out transform translate-y-10 opacity-0"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            opacity: isVisible ? 1 : 0,
          }}
        >
          <h1 className="text-4xl font-bold mb-2 text-blue-400">Ryan Costa</h1>
          <p className="text-xl text-gray-300">Software Developer</p>
          <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-2 mt-4">
            {[
              'React',
              'React Native',
              'Node.js',
              'TypeScript',
              'Python',
              'Scraping',
              'Supabase',
              'Firebase',
            ].map((stack) => (
              <span
                key={stack}
                className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors duration-200 hover:bg-gray-600 hover:text-white"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <div
          className="relative w-40 h-40 transition-all duration-1000 delay-300 ease-in-out transform scale-0"
          style={{ transform: isVisible ? 'scale(1)' : 'scale(0)' }}
        >
          <Image
            src="/ryan01.jpg"
            alt="Profile Picture"
            layout="fill"
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
