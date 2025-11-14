'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Sheikh Zayed, Giza, Egypt',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+20 123 456 7890',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@oasia-villas.com',
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-sand-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-sage-600 text-sm lg:text-base tracking-[0.3em] uppercase font-light mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-earth-800 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a visit or inquire about availability. Our team is ready to help you find
            your perfect home
          </p>
          <div className="w-24 h-1 bg-sage-600 mx-auto mt-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-serif font-semibold text-earth-800 mb-6">
                Visit Our Sales Office
              </h3>
              <p className="text-lg text-earth-600 leading-relaxed mb-8">
                Experience OASIA firsthand. Our sales team is available to show you our model
                villas and discuss customization options tailored to your lifestyle.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-sage-100 text-sage-700 rounded-xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-earth-800 mb-1">{info.title}</h4>
                    <p className="text-earth-600">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Operating Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 bg-sage-700 text-white rounded-2xl"
            >
              <h4 className="text-xl font-serif font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Saturday - Thursday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-serif font-semibold text-earth-800 mb-6">
                Send us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-earth-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-earth-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-earth-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all"
                    placeholder="+20 123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-earth-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your interests and preferred villa specifications..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-sage-600 text-white rounded-xl hover:bg-sage-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-sage-100 text-sage-800 rounded-xl text-center"
                  >
                    Thank you! We'll get back to you shortly.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

