'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Experience from '@/components/Experience/Experience'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Navigation from '@/components/Navigation/Navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reduce animation complexity on mobile for better performance
      const isMobile = window.innerWidth < 768
      
      gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0, y: isMobile ? 20 : 30 },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.3 : 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              end: 'top 20%',
              toggleActions: 'play none none reset',
              once: false,
              invalidateOnRefresh: true
            }
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}