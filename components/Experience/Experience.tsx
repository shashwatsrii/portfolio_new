'use client'

import { motion } from 'framer-motion'
import { experience, education } from '@/utils/data'
import { useState } from 'react'

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  return (
    <section id="experience" className="section-padding fade-in-section bg-gradient-to-b from-[#faf9f7] to-[#f7f3f0] dark:from-[#f0ebe6] dark:to-[#e8e2db]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-[#6a6a6a] max-w-2xl mx-auto">
            My career progression and academic achievements
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#f0ebe6] dark:bg-[#e8e2db] p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-[#faf9f7] dark:bg-[#f0ebe6] text-primary shadow-md'
                  : 'text-gray-600 dark:text-[#6a6a6a] hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-[#faf9f7] dark:bg-[#f0ebe6] text-primary shadow-md'
                  : 'text-gray-600 dark:text-[#6a6a6a] hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === 'experience' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              {/* Experience Cards */}
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex gap-6">
                    {/* Timeline Indicator */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
                      >
                        {index + 1}
                      </motion.div>
                      {index < experience.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-primary to-transparent mt-2" />
                      )}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex-1 bg-[#faf9f7] dark:bg-[#f0ebe6] rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 dark:border-gray-800"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-[#4a4a4a] mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary font-medium flex items-center gap-2">
                            {exp.company}
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{exp.duration}</span>
                          </p>
                        </div>
                        
                        {/* Location & Type Badge */}
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                            {exp.type}
                          </span>
                          <span className="px-3 py-1 bg-[#f0ebe6] dark:bg-[#e8e2db] text-gray-600 dark:text-[#6a6a6a] text-sm rounded-full">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3 mb-4">
                        {exp.description.map((desc, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex gap-3"
                          >
                            <span className="text-primary mt-1.5">▸</span>
                            <p className="text-gray-600 dark:text-[#6a6a6a] text-sm leading-relaxed">
                              {desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIdx * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 text-xs rounded-lg text-gray-700 dark:text-[#5a5a5a] font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}

              {/* Summary Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 grid grid-cols-3 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6 text-center">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-bold text-primary mb-1">4+</h4>
                      <p className="text-sm text-gray-600 dark:text-[#4a4a4a] font-medium">Companies</p>
                      <p className="text-xs text-gray-400 dark:text-[#6a6a6a] mt-1">Worked With</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6 text-center">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-bl-full" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-bold text-secondary mb-1">2+</h4>
                      <p className="text-sm text-gray-600 dark:text-[#4a4a4a] font-medium">Years</p>
                      <p className="text-xs text-gray-400 dark:text-[#6a6a6a] mt-1">Experience</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6 text-center">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full" />
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                      <p className="text-sm text-gray-600 dark:text-[#4a4a4a] font-medium">Technologies</p>
                      <p className="text-xs text-gray-400 dark:text-[#6a6a6a] mt-1">Mastered</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ) : (
            <div>
              {/* Education Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#f5f0eb] rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-[#ddd7d0]"
              >
                {/* University Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-[#4a4a4a]">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-secondary font-medium">
                      {education.institution}
                    </p>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-[#6a6a6a]">Location</p>
                      <p className="font-medium">{education.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-[#6a6a6a]">Duration</p>
                      <p className="font-medium">{education.duration}</p>
                    </div>
                  </div>
                </div>

                {/* CGPA Card */}
                <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 mb-1">Academic Performance</p>
                      <p className="text-4xl font-bold">CGPA: {education.gpa}</p>
                    </div>
                    <div className="text-6xl opacity-20">🎓</div>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-[#4a4a4a]">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {education.coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 bg-[#f0ebe6] dark:bg-[#e8e2db] rounded-lg text-center text-sm font-medium text-gray-700 dark:text-[#5a5a5a]"
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Achievements & Recognition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-[#4a4a4a] text-center">
                  Achievements & Recognition
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full" />
                      <div className="relative">
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold text-primary mb-1">1704</h4>
                        <p className="text-xs text-gray-500 dark:text-[#6a6a6a] uppercase tracking-wider font-medium">GeeksForGeeks</p>
                        <p className="text-xs text-gray-400 dark:text-[#8a8a8a] mt-1">Problem Solving</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-bl-full" />
                      <div className="relative">
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold text-secondary mb-1">1648</h4>
                        <p className="text-xs text-gray-500 dark:text-[#6a6a6a] uppercase tracking-wider font-medium">LeetCode</p>
                        <p className="text-xs text-gray-400 dark:text-[#8a8a8a] mt-1">Contest Rating</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-bl-full" />
                      <div className="relative">
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold text-primary mb-1">5+</h4>
                        <p className="text-xs text-gray-500 dark:text-[#6a6a6a] uppercase tracking-wider font-medium">Competitions</p>
                        <p className="text-xs text-gray-400 dark:text-[#8a8a8a] mt-1">Won</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative overflow-hidden bg-white dark:bg-[#f5f0eb] rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-[#ddd7d0] p-6">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-bl-full" />
                      <div className="relative">
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="text-3xl font-bold text-secondary mb-1">2</h4>
                        <p className="text-xs text-gray-500 dark:text-[#6a6a6a] uppercase tracking-wider font-medium">Leadership</p>
                        <p className="text-xs text-gray-400 dark:text-[#8a8a8a] mt-1">Roles</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}