import React from 'react'
import MagicBento from '../components/Bento'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Features = () => {
  return (
    <div className='bg-[#030712] min-h-screen'>
      <div className='flex justify-center items-center py-8'>
        <h1 className={`bg-gradient-to-t from-stone-400 to-white bg-clip-text text-transparent text-6xl font-bold ${inter.className}`}>
          Features:
        </h1>
      </div>
      <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </div>
  )
}
