'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useCallback, useEffect } from 'react'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
}

export function Navbar() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <div
            className="flex items-center transition-all relative group"
          >
            <Link href="/">
              <span className="ml-2 h-7 relative">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">home</span>
                <span className="absolute inset-0 bg-transparent highlighter"></span>
              </span>
            </Link>
          </div>
        </li>
        <li>
          <div
            className="flex items-center transition-all relative group"
          >
            <Link href="/blog">
              <span className="ml-2 h-7 relative">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">blog</span>
                <span className="absolute inset-0 bg-transparent highlighter"></span>
              </span>
            </Link>
          </div>
        </li>
        <li>
          <div
            className="flex items-center transition-all relative group"
          >
            <Link href="/projects">
              <span className="ml-2 h-7 relative">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">projects</span>
                <span className="absolute inset-0 bg-transparent highlighter"></span>
              </span>
            </Link>
          </div>
        </li>
      </ul>
      <style jsx>{`
        .highlighter {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background-color: #3b82f6; /* Blue color */
          z-index: 1;
          transition: width 0.3s ease-out;
        }

        .group:hover .highlighter {
          width: 100%;
        }
      `}</style>
    </footer>
  )
}