import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  StarIcon, 
  CalendarIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: "B.Tech in Computer Science and Engineering - Data Science",
    institution: "Malla Reddy College of Engineering",
    period: "2020 - 2024",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Web Development Technologies",
      "Software Engineering Principles",
      "Database Management Systems",
      "Machine Learning Fundamentals",
      "Deep Learning Applications",
      "Statistical Analysis"
    ]
  };

  const certifications = [
    {
      title: "Data Science Virtual Experience Program",
      issuer: "Industry Program",
      type: "Professional Development",
      icon: StarIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Python Programming",
      issuer: "Certification Authority",
      type: "Programming Language",
      icon: AcademicCapIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Java Programming",
      issuer: "Certification Authority",
      type: "Programming Language",
      icon: AcademicCapIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Science, Machine Learning and its Real Time Applications",
      issuer: "Professional Institute",
      type: "Specialized Program",
      icon: StarIcon,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic foundation and professional certifications that shape my expertise in computer science and data science.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
                  <AcademicCapIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Academic Background</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Degree Info */}
                <div className="border-l-4 border-primary-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {education.degree}
                  </h4>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                    <BuildingLibraryIcon className="w-4 h-4 mr-2" />
                    <span className="font-medium">{education.institution}</span>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{education.period}</span>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Relevant Coursework:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></div>
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg flex items-center justify-center mr-4">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
                  <p className="text-gray-600 dark:text-gray-400">Professional Credentials</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group cursor-default"
                  >
                    <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-xl p-4 border border-gray-200 dark:border-gray-600 group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <cert.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {cert.issuer}
                          </p>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                            {cert.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-primary-100 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              My educational foundation in Computer Science combined with specialized Data Science training 
              and professional certifications has equipped me with a comprehensive skill set. I remain 
              committed to continuous learning and staying updated with the latest technological advancements 
              in the field.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Continuous Learning', 'Research Oriented', 'Industry Relevant', 'Practical Application'].map((trait, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-600 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium shadow-md"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;