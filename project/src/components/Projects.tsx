import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EyeIcon, 
  ShieldCheckIcon, 
  SpeakerWaveIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Digital Image Forgery Detection Using Deep Learning",
      description: "An innovative solution addressing the proliferation of image forgeries using advanced CNN architecture and transfer learning techniques.",
      fullDescription: "This project presents a novel approach to combat digital image manipulation by utilizing Python and Convolutional Neural Network (CNN) model architecture. The system is designed to detect various types of image forgeries with high accuracy through advanced deep learning techniques.",
      technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning", "OpenCV", "NumPy"],
      features: [
        "Advanced CNN architecture for forgery detection",
        "Transfer learning implementation for improved accuracy",
        "Multiple forgery type detection capabilities",
        "Real-time image analysis and classification",
        "High precision and recall metrics"
      ],
      icon: EyeIcon,
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-50 to-cyan-50",
      category: "Deep Learning",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Audio to Sign Language Translation for Deaf People",
      description: "A comprehensive communication system that converts spoken audio messages into text and displays corresponding Indian Sign Language visual representations.",
      fullDescription: "This innovative project aims to bridge communication gaps for the deaf community by developing a comprehensive system that processes spoken audio, converts it to text, and displays corresponding Indian Sign Language images or GIFs in real-time.",
      technologies: ["Python", "Speech Recognition", "NLP", "Computer Vision", "TensorFlow", "OpenCV"],
      features: [
        "Real-time speech-to-text conversion",
        "Indian Sign Language image/GIF display",
        "Accurate audio processing algorithms",
        "User-friendly interface design",
        "Accessibility-focused implementation"
      ],
      icon: SpeakerWaveIcon,
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-50 to-pink-50",
      category: "Accessibility Technology",
      image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions that showcase my expertise in deep learning, accessibility technology, and problem-solving.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 mb-4">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.fullDescription}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                          <ShieldCheckIcon className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative group">
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mb-3`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-white font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-gray-200 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse opacity-60"></div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent my passion for leveraging technology to solve real-world problems. 
              I'm always excited to discuss technical details and explore new opportunities for collaboration.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;