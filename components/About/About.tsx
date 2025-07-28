'use client'

import { motion } from 'framer-motion'
import { personalInfo, achievements, leadership } from '@/utils/data'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="section-padding fade-in-section bg-gradient-to-b from-[#faf9f7] to-[#f7f3f0] dark:from-[#f0ebe6] dark:to-[#e8e2db]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-[#6a6a6a] max-w-2xl mx-auto">
            Passionate about building scalable solutions and solving complex problems
          </p>
        </motion.div>

        {/* Main Content - New Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Bio Section with Enhanced Layout */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
              
              <div className="relative bg-white/80 dark:bg-[#f5f0eb]/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-[#ddd7d0]">
                <motion.h3 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-serif font-bold mb-8 text-center text-gray-900 dark:text-[#3a3a3a]"
                >
                  Who I Am
                </motion.h3>
                
                <div className="max-w-4xl mx-auto">
                  {personalInfo.about.split('\n\n').map((paragraph, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${index !== 0 ? 'mt-6' : ''}`}
                    >
                      {index === 0 && (
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
                        </div>
                      )}
                      
                      <p className={`text-lg leading-relaxed ${
                        index === 0 
                          ? 'text-gray-700 dark:text-[#4a4a4a] font-medium text-center' 
                          : index === 1
                          ? 'text-gray-600 dark:text-[#5a5a5a] text-center md:text-left pl-0 md:pl-8 border-l-0 md:border-l-2 border-primary/20'
                          : 'text-center text-primary dark:text-primary/80 font-medium italic'
                      }`}>
                        {paragraph}
                      </p>
                      
                      {index === 1 && (
                        <div className="flex items-center justify-center mt-6 mb-4">
                          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent rounded-full" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three Column Layout for Info */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {/* Contact Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 p-6 rounded-xl border border-primary/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg">Get in Touch</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 dark:text-[#6a6a6a]">{personalInfo.email}</p>
                <p className="text-gray-600 dark:text-[#6a6a6a]">{personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Quick Stats Card - Now in the middle */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 p-6 rounded-xl border border-accent/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg">Quick Facts</h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 dark:text-[#6a6a6a]">🎓 B.Tech in Information Technology</p>
                <p className="text-gray-600 dark:text-[#6a6a6a]">💼 SDE Intern at AtomicWork</p>
                <p className="text-gray-600 dark:text-[#6a6a6a]">🏆 Hackathon Winner</p>
                <p className="text-gray-600 dark:text-[#6a6a6a]">💻 Full-Stack Developer</p>
              </div>
            </motion.div>

            {/* Leadership Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-secondary/5 to-secondary/10 dark:from-secondary/10 dark:to-secondary/5 p-6 rounded-xl border border-secondary/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg">Leadership</h4>
              </div>
              <div className="space-y-3">
                {leadership.map((item, index) => (
                  <div key={index}>
                    <p className="font-medium text-sm">{item.role}</p>
                    <p className="text-xs text-secondary">{item.organization}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Section - Horizontal Scroll */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-center">Achievements & Recognition</h3>
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-72"
                  >
                    <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6 h-full">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-bl-full" />
                      <div className="relative flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 dark:text-[#4a4a4a] font-medium leading-relaxed">{achievement}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}