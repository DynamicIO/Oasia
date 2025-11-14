'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-earth-900 text-sand-100">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-serif font-bold text-sage-400 mb-4"
            >
              OASIA
            </motion.h3>
            <p className="text-sand-200 leading-relaxed mb-6 max-w-md">
              A green sanctuary in the heart of Zayed, where modern design and rich landscapes
              come together in harmony. Experience the balance between earth and life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-sage-700 hover:bg-sage-600 text-white rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-sand-200 hover:text-sage-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sand-200">
              <li>Sheikh Zayed, Giza, Egypt</li>
              <li>
                <a
                  href="tel:+201234567890"
                  className="hover:text-sage-400 transition-colors"
                >
                  +20 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oasia-villas.com"
                  className="hover:text-sage-400 transition-colors"
                >
                  info@oasia-villas.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sand-300 text-sm">
              © {currentYear} OASIA Villas. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-sand-300 hover:text-sage-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sand-300 hover:text-sage-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

