'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/utils/data'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f7f3f0] to-[#f7f3f0] dark:from-[#ede7e0] dark:to-[#e8e2db]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" 
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Content */}
      <motion.div
        className="container relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50" />
            <div 
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              style={{
                backgroundImage: `url('/images/profile.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#e5e7eb'
              }}
            >
              <div className="sr-only">Shashwat Srivastava</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
        </motion.h1>

        <motion.h2 
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-[#6a6a6a] mb-8"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-[#6a6a6a] max-w-4xl mx-auto mb-12 whitespace-nowrap"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-[#2c2c2c] dark:bg-[#3a3a3a] text-white dark:text-white rounded-full font-medium hover:bg-[#1a1a1a] dark:hover:bg-[#2c2c2c] transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href={personalInfo.resume}
            download
            className="px-8 py-4 border-2 border-[#2c2c2c] dark:border-[#4a4a4a] text-[#2c2c2c] dark:text-[#4a4a4a] rounded-full font-medium hover:bg-[#2c2c2c] hover:text-white dark:hover:bg-[#3a3a3a] dark:hover:text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mt-12"
        >
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#2c2c2c] dark:border-[#4a4a4a] hover:bg-[#2c2c2c] hover:text-white hover:border-[#2c2c2c] dark:hover:bg-[#3a3a3a] dark:hover:text-white dark:hover:border-[#3a3a3a] transition-all"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#2c2c2c] dark:border-[#4a4a4a] hover:bg-[#2c2c2c] hover:text-white hover:border-[#2c2c2c] dark:hover:bg-[#3a3a3a] dark:hover:text-white dark:hover:border-[#3a3a3a] transition-all"
            whileHover={{ scale: 1.1, rotate: -360 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#2c2c2c] dark:border-[#4a4a4a] hover:bg-[#2c2c2c] hover:text-white hover:border-[#2c2c2c] dark:hover:bg-[#3a3a3a] dark:hover:text-white dark:hover:border-[#3a3a3a] transition-all"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}