"use client"
import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Plug, 
  Brain, 
  TrendingUp, 
  MessageSquare, 
  Sparkles, 
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Working = () => {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const workflowRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.header-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      })

      // Animate steps with stagger
      stepsRef.current.forEach((step, index) => {
        if (!step) return
        
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 60,
          rotateX: -15,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out'
        })
      })

      // Animate workflow items with scale
      workflowRef.current.forEach((item, index) => {
        if (!item) return
        
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(2)'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Integration',
      description: 'Connect our AI agents to your existing systems and communication channels in minutes.',
      icon: Plug,
      color: 'from-purple-500 to-purple-800',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      number: '02',
      title: 'Training',
      description: 'Customize your AI agents with your brand voice, knowledge base, and specific workflows.',
      icon: Brain,
      color: 'from-purple-500 to-purple-800',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    },
    {
      number: '03',
      title: 'Optimization',
      description: 'Monitor performance and let our machine learning algorithms continuously improve your customer experience.',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-800',
      glowColor: 'rgba(168, 85, 247, 0.4)'
    }
  ]

  const workflow = [
    { 
      title: 'Customer Inquiry', 
      icon: MessageSquare,
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
      description: 'Receive'
    },
    { 
      title: 'AI Analysis', 
      icon: Brain,
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400',
      description: 'Process'
    },
    { 
      title: 'Response Generation', 
      icon: Sparkles,
      color: 'from-pink-500/20 to-rose-500/20',
      iconColor: 'text-pink-400',
      description: 'Generate'
    },
    { 
      title: 'Continuous Learning', 
      icon: BarChart3,
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400',
      description: 'Improve'
    }
  ]

  return (
    <div ref={sectionRef} className='min-h-screen bg-[#030712] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Animated background gradients */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='header-content text-center mb-24'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6'>
            <Zap className='w-4 h-4 text-purple-400' />
            <span className='text-purple-400 text-sm font-medium tracking-wider uppercase'>
              Process
            </span>
          </div>
          
          <h2 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-t from-purple-300 via-purple-100  to-white bg-clip-text text-transparent'>
            How It Works
          </h2>
          
          <p className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
            Simple integration, powerful results. Get started in three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className='grid md:grid-cols-3 gap-6 lg:gap-8 mb-32'>
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className='relative group'
              >
                {/* Glassmorphism card with enhanced effects */}
                <div className='relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 h-full backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2'>
                  {/* Glow effect on hover */}
                  <div 
                    className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
                    style={{ background: `radial-gradient(circle at center, ${step.glowColor}, transparent 70%)` }}
                  />
                  
                  <div className='relative z-10'>
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className='w-8 h-8 text-white' strokeWidth={2.5} />
                    </div>
                    
                    {/* Number badge */}
                    <div className='inline-flex items-center gap-2 mb-4'>
                      <span className='text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600 opacity-20'>
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Title with gradient */}
                    <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className='text-gray-400 leading-relaxed text-sm'>
                      {step.description}
                    </p>

                    {/* Check icon */}
                    <div className='mt-6 flex items-center gap-2 text-purple-400'>
                      <CheckCircle2 className='w-5 h-5' />
                      <span className='text-sm font-medium'>Quick Setup</span>
                    </div>
                  </div>

                  {/* Connecting arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20'>
                      <div className='w-8 h-[2px] bg-gradient-to-r from-purple-500 to-transparent'></div>
                      <ArrowRight className='w-6 h-6 text-purple-500/50 absolute -right-1 top-1/2 transform -translate-y-1/2' />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Workflow Section */}
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl md:text-5xl font-bold mb-4 bg-linear-to-t from-purple-300 via-purple-100  to-stone-200 bg-clip-text text-transparent'>
              AI Agent Workflow
            </h3>
            <p className='text-gray-400 text-lg'>
              Seamless automation from inquiry to insight
            </p>
          </div>
          
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6'>
            {workflow.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  ref={el => workflowRef.current[index] = el}
                  className='relative group'
                >
                  {/* Glassmorphism workflow card */}
                  <div className='relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:scale-105 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20'>
                    {/* Top label */}
                    <div className='text-xs text-gray-500 font-medium uppercase tracking-wider mb-3'>
                      {item.description}
                    </div>
                    
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${item.iconColor}`} strokeWidth={2} />
                    </div>
                    
                    {/* Title */}
                    <p className='text-sm md:text-base font-semibold text-white/90'>
                      {item.title}
                    </p>
                  </div>

                  {/* Arrow connector (except for last item) */}
                  {index < workflow.length - 1 && (
                    <div className='hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 items-center'>
                      <ArrowRight className='w-6 h-6 text-purple-500/40' />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          
        </div>
      </div>
    </div>
  )
}

export default Working
