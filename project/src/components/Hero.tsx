import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a simple resume content for download
    const resumeContent = `
PENDYALA SAI CHARAN
+91 - 6304462207 | saicharanpendyala01@gmail.com
LinkedIn: https://www.linkedin.com/in/sai-charan-reddy-1334011ba
GitHub: https://github.com/SaiCharan4517

SUMMARY
Detail-oriented and motivated Computer Science graduate specializing in Data Science with hands-on experience in software development, deep learning, and web technologies. Currently working as an Associate Analyst at Wipro.

EDUCATION
Malla Reddy College of Engineering (2020 - 2024)
B.Tech in Computer Science and Engineering-Data Science

EXPERIENCE
Associate Analyst - Wipro (Sep 2024 – Present)
- Using GIS software and tools to create, edit, and maintain maps
- Analyzing spatial data to identify patterns, trends, and relationships
- Implementing quality control measures for accuracy and reliability

PROJECTS
1. Digital Image Forgery Detection Using Deep Learning
2. Audio to Sign Language Translation for Deaf People

SKILLS
Programming Languages: Java, J2EE
Web Development: HTML, CSS, JavaScript
Database Management: MySQL
Version Control: Git, GitHub

CERTIFICATIONS
- Data Science Virtual Experience Program
- Python Programming
- Java Programming
- Data Science, Machine Learning and its Real Time Applications
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sai_Charan_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-accent-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary-600">SC</span>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-600 opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent">
              Pendyala Sai Charan
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Data Science Specialist',
                2000,
                'Associate Analyst at Wipro',
                2000,
                'Deep Learning Engineer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science graduate specializing in Data Science with expertise in deep learning, 
            GIS analysis, and innovative software solutions. Passionate about leveraging technology 
            to solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDownIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;