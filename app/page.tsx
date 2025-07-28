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
      gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
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