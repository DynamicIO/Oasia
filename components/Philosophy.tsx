'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Philosophy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="philosophy" className="relative py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 via-earth-800/85 to-sage-900/90 z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-sand-200 text-sm lg:text-base tracking-[0.3em] uppercase font-light mb-6 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-12 leading-tight">
            Balance Between Earth and Life
          </h2>
          <blockquote className="text-2xl lg:text-3xl text-sand-100 font-light leading-relaxed italic mb-8">
            "OASIA represents a balance between earth and life. A sanctuary where every element
            exists in perfect harmony—where architecture breathes with the landscape, and modern
            living embraces natural serenity."
          </blockquote>
          <div className="w-32 h-1 bg-sage-400 mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Philosophy

