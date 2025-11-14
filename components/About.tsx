'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, Home, Trees } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Nature Inspired',
      description: 'Every element thoughtfully designed to harmonize with the natural environment',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Modern Architecture',
      description: 'Contemporary design meets timeless elegance in every villa',
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: 'Sustainable Living',
      description: 'Eco-conscious features that blend luxury with environmental responsibility',
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-white" ref={ref}>
      <motion.div
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
          <span className="text-sage-600 text-sm lg:text-base tracking-[0.3em] uppercase font-light mb-4 block">
            Welcome Home
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-earth-800 mb-6">
            About OASIA
          </h2>
          <div className="w-24 h-1 bg-sage-600 mx-auto"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div variants={itemVariants}>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2400&auto=format&fit=crop"
                alt="Modern luxury villa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-serif font-semibold text-earth-800 leading-tight">
              Where Modern Design Meets Natural Tranquility
            </h3>
            <p className="text-lg text-earth-600 leading-relaxed">
              OASIA is more than a residential compound—it's a lifestyle destination. Nestled in
              the prestigious Sheikh Zayed district, our thoughtfully crafted villas represent
              the perfect balance between earth and life.
            </p>
            <p className="text-lg text-earth-600 leading-relaxed">
              Every detail reflects balance, warmth, and a sense of natural tranquility—creating
              a place that feels effortlessly alive and beautifully serene. Here, luxury isn't
              just about opulence; it's about living in harmony with nature.
            </p>
            <motion.a
              href="#features"
              className="inline-block px-8 py-4 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors font-medium mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.a>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 bg-sand-50 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 text-sage-700 rounded-full mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-semibold text-earth-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-earth-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

