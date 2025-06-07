import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", color: "from-orange-500 to-red-500" },
        { name: "Python", color: "from-blue-500 to-green-500" },
        { name: "JavaScript", color: "from-yellow-500 to-orange-500" },
        { name: "J2EE", color: "from-red-500 to-pink-500" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", color: "from-orange-500 to-red-600" },
        { name: "CSS", color: "from-blue-500 to-purple-500" },
        { name: "React", color: "from-cyan-500 to-blue-500" },
        { name: "Responsive Design", color: "from-green-500 to-teal-500" },
      ]
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Machine Learning", color: "from-purple-500 to-pink-500" },
        { name: "Deep Learning", color: "from-indigo-500 to-purple-500" },
        { name: "CNN", color: "from-pink-500 to-rose-500" },
        { name: "Data Analysis", color: "from-emerald-500 to-teal-500" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "MySQL", color: "from-blue-600 to-blue-800" },
        { name: "Git/GitHub", color: "from-gray-600 to-gray-800" },
        { name: "GIS Tools", color: "from-green-600 to-emerald-600" },
        { name: "VS Code", color: "from-blue-500 to-cyan-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through education, professional experience, and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group cursor-default"
                  >
                    <div className={`relative p-4 bg-gradient-to-r ${skill.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className="absolute inset-0 bg-white/20 rounded-xl"></div>
                      <div className="relative z-10">
                        <span className="text-white font-semibold text-sm text-center block">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Eclipse', 'PowerPoint', 'Excel', 'Word', 'Spatial Analysis',
              'Quality Control', 'Technical Documentation', 'Problem Solving',
              'Team Collaboration', 'Project Management'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;