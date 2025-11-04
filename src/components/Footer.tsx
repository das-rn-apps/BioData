import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { biodata } from '../data/biodata';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-100 to-pink-100 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-accent fill-current" />
            <span className="text-2xl font-semibold text-text mx-4">
              Two souls, one journey
            </span>
            <Heart className="w-6 h-6 text-accent fill-current" />
          </div>
          <p className="text-lg text-gray-600 italic">
            "Marriage is not just about finding the right person, but creating the right relationship. 
            It's not about how much love you have in the beginning, but how much love you build till the end."
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-32 h-1 primary-gradient mx-auto rounded-full mb-8"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          <p className="mb-2">
            Made with <span className="text-red-500">❤️</span> for finding a life partner
          </p>
          <p className="text-sm">
            © {currentYear} {biodata.personal.name}. All rights reserved.
          </p>
        </motion.div>

        {/* Floating Hearts Animation */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300 opacity-40"
              initial={{ y: 0, x: Math.random() * 100 + '%' }}
              animate={{ 
                y: -100,
                x: Math.random() * 100 + '%',
                rotate: 360 
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2
              }}
              style={{ fontSize: `${16 + Math.random() * 8}px` }}
            >
              <Heart fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;