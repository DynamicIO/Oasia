'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop',
      title: 'Villa Exterior',
      category: 'Architecture',
    },
    {
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2400&auto=format&fit=crop',
      title: 'Modern Living Space',
      category: 'Interiors',
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
      title: 'Luxury Bedroom',
      category: 'Interiors',
    },
    {
      url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2400&auto=format&fit=crop',
      title: 'Garden View',
      category: 'Landscape',
    },
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop',
      title: 'Contemporary Villa',
      category: 'Architecture',
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
      title: 'Elegant Interior',
      category: 'Interiors',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sage-600 text-sm lg:text-base tracking-[0.3em] uppercase font-light mb-4 block">
            Visual Journey
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-earth-800 mb-6">
            Gallery
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty and elegance of OASIA through our curated collection
          </p>
          <div className="w-24 h-1 bg-sage-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs tracking-wider uppercase text-sage-300 mb-2 block">
                  {image.category}
                </span>
                <h3 className="text-xl font-serif font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-earth-900/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors flex items-center justify-center text-2xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Gallery

