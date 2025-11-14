'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Waves,
  Dumbbell,
  ShieldCheck,
  Wifi,
  Car,
  TreePine,
  Sun,
  Wind,
  Sparkles,
} from 'lucide-react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const amenities = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: 'Swimming Pools',
      description: 'Resort-style pools with landscaped gardens',
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with modern equipment',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: '24/7 Security',
      description: 'Advanced security systems and personnel',
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: 'Green Spaces',
      description: 'Lush parks and walking trails throughout',
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Private Parking',
      description: 'Secure parking spaces for each villa',
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Smart Home',
      description: 'Integrated smart home technology',
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Solar Power',
      description: 'Sustainable energy solutions',
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: 'Climate Control',
      description: 'Advanced HVAC systems in every villa',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Premium Finishes',
      description: 'High-end materials and craftsmanship',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 lg:py-32 bg-sand-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sage-600 text-sm lg:text-base tracking-[0.3em] uppercase font-light mb-4 block">
            Exceptional Amenities
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-earth-800 mb-6">
            Features & Amenities
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Experience a lifestyle of unparalleled comfort with world-class facilities designed
            for modern living
          </p>
          <div className="w-24 h-1 bg-sage-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-sage-100 text-sage-700 rounded-xl flex items-center justify-center group-hover:bg-sage-600 group-hover:text-white transition-colors duration-300">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-earth-800 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-earth-600">{amenity.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Villa Specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-sage-700 to-sage-800 rounded-3xl p-10 lg:p-16 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl font-serif font-bold mb-4">Villa Specifications</h3>
            <p className="text-sage-100 text-lg">
              Meticulously designed spaces that cater to every aspect of luxury living
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">300-500</div>
              <div className="text-sage-200">Square Meters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">4-6</div>
              <div className="text-sage-200">Bedrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">4-5</div>
              <div className="text-sage-200">Bathrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">3+</div>
              <div className="text-sage-200">Parking Spaces</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

