import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    
  return (
    <div className={`flex justify-between items-center h-screen px-10 text-6xl bg-[#030712] text-white ${inter.className}`}>
      <div className='font-light'>
       The Industry  <br /> Leading  
        <span className='font-bold pt-1'> AI Voice <br/> Agent.</span>
        <p className='text-lg pt-5 font-raleway text-stone-400'>
          Build, deploy, and scale AI voice agents that handle customer interactions with human-like <br/>
          understanding. Available 24/7, in multiple languages.
        </p>
        <div className="mt-1">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-8 ring-1 ring-white/10">
              <span>Get Started</span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="absolute w-[500px] h-[400px] bg-linear-to-tr from-purple-200 via-fuchsia-600 to-purple-700 blur-3xl rounded-3xl opacity-80"></div>

        <div className="relative bg-[#030712] rounded-3xl w-[480px] h-[360px] flex justify-center items-center text-3xl font-semibold shadow-lg">
          DEMO PART
        </div>
      </div>
    </div>
  )
}

export default Home
