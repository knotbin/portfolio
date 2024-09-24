'use client'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all relative group"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/knotbin"
          >
            <ArrowIcon />
            <span className="ml-2 h-7 relative">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">github</span>
              <span className="absolute inset-0 bg-transparent highlighter"></span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all relative group"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/knotbin"
          >
            <ArrowIcon />
            <span className="ml-2 h-7 relative">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">twitter</span>
              <span className="absolute inset-0 bg-transparent highlighter"></span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all relative group"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bsky.app/profile/knotbin.xyz"
          >
            <ArrowIcon />
            <span className="ml-2 h-7 relative">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">bluesky</span>
              <span className="absolute inset-0 bg-transparent highlighter"></span>
            </span>
          </a>
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