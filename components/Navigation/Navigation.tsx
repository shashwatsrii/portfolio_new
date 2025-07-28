'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.filter(item => item.href.includes('#')).map(item => item.href.split('#')[1])
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#') && pathname === '/') {
      e.preventDefault()
      const hash = href.split('#')[1]
      const element = document.getElementById(hash)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-center h-16 md:h-20 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-medium transition-colors ${
                  (item.href === '/gallery' && pathname === '/gallery') ||
                  (item.href.includes('#') && pathname === '/' && activeSection === item.href.split('#')[1])
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-gray-900 dark:text-[#5a5a5a] dark:hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                {((item.href === '/gallery' && pathname === '/gallery') ||
                  (item.href.includes('#') && pathname === '/' && activeSection === item.href.split('#')[1])) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-4 w-10 h-10 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    (item.href === '/gallery' && pathname === '/gallery') ||
                    (item.href.includes('#') && pathname === '/' && activeSection === item.href.split('#')[1])
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-[#f0ebe6] dark:text-[#5a5a5a] dark:hover:bg-[#ddd7d0]'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}