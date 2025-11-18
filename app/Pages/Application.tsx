import React from 'react'
import { Inter } from 'next/font/google'
import { Linkedin, LucideGithub } from 'lucide-react'
import { LucideLinkedin } from 'lucide-react'
import { LucideX } from 'lucide-react'
const inter = Inter({ subsets: ['latin'] })

// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Community', 'Support', 'Status', 'Updates'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  }

  const socialLinks = [
    { name: 'Twitter', icon: <LucideX />, url: '#' },
    { name: 'GitHub', icon: <LucideGithub />, url: '#' },
    { name: 'LinkedIn', icon: <Linkedin />, url: '#' },
  ]

  return (
    <footer className='bg-gradient-to-b from-[#030712] to-black border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <h3 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-3'>
                Glassic
            </h3>
            <p className='text-gray-400 text-sm mb-4'>
              AI-powered voice agents transforming industries with intelligent automation and 24/7 support.
            </p>
            {/* Social Links */}
            <div className='flex gap-3'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className='w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:border-purple-500 transition-all duration-300'
                  aria-label={social.name}
                >
                  <span className='text-lg'>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className='text-white font-semibold mb-3 text-sm'>{category}</h4>
              <ul className='space-y-2'>
                {links.map((link) => (
                  <li key={link}>
                    <a href='#' className='text-gray-400 text-sm hover:text-purple-400 transition-colors duration-200'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-500 text-sm'>
            © {currentYear} Glassic. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <a href='#' className='text-gray-500 text-sm hover:text-purple-400 transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='text-gray-500 text-sm hover:text-purple-400 transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Application Component
const Application = () => {
  const useCases = [
    {
      emoji: '👥',
      category: 'All Industries',
      title: 'Customer Support',
      description: '24/7 support handling inquiries, troubleshooting, and ticket creation',
      stats: ['45% Cost Reduction', '24/7 Availability']
    },
    {
      emoji: '📅',
      category: 'Healthcare',
      title: 'Appointment Scheduling',
      description: 'Automated booking and management of appointments across time zones',
      stats: ['70% Time Saved', '3x Booking Rate']
    },
    {
      emoji: '🎯',
      category: 'Sales',
      title: 'Lead Qualification',
      description: 'Engage and qualify leads instantly, any time of day',
      stats: ['2x Conversion Rate', '50% Faster Response']
    },
    {
      emoji: '📦',
      category: 'E-commerce',
      title: 'Order Management',
      description: 'Handle order status, tracking, and basic modifications',
      stats: ['60% Less Queries', '98% Accuracy']
    },
    {
      emoji: '🔧',
      category: 'Home Services',
      title: 'Service Booking',
      description: 'Schedule and manage service appointments efficiently',
      stats: ['40% More Bookings', 'Zero Wait Time']
    },
    {
      emoji: '📊',
      category: 'Research',
      title: 'Survey & Feedback',
      description: 'Collect and analyze customer feedback automatically',
      stats: ['4x Response Rate', 'Real-time Analysis']
    }
  ]

  return (
    <div className={`min-h-screen bg-[#030712] text-white ${inter.className}`}>
      <div className='flex justify-center items-center py-16'>
        <h1 className='bg-gradient-to-t from-stone-400 to-white bg-clip-text text-transparent text-6xl font-bold'>
          Application Use Cases
        </h1>
      </div>

      <p className='text-center text-gray-400 text-lg mb-12'>
        Discover how AI voice agents transform different industries
      </p>

      <div className='max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className='bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all duration-300'
          >
            <div className='text-4xl mb-3'>{useCase.emoji}</div>
            <h3 className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent text-sm font-semibold mb-2'>{useCase.category}</h3>
            <h2 className='text-xl font-bold mb-3'>{useCase.title}</h2>
            <p className='text-gray-400 text-sm mb-4'>{useCase.description}</p>
            <div className='flex gap-3 flex-wrap'>
              {useCase.stats.map((stat, i) => (
                <span key={i} className='bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full border border-purple-500/30'>
                  {stat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Application
