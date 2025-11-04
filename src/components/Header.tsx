import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import { biodata } from '../data/biodata';

const Header: React.FC = () => {
  return (
    <section className="relative min-h-screen gradient-bg flex items-center justify-center overflow-hidden">
      {/* Floating hearts background animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200 opacity-30"
            initial={{ y: 100, x: Math.random() * 100 + '%' }}
            animate={{
              y: -100,
              x: Math.random() * 100 + '%',
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            style={{ fontSize: `${20 + Math.random() * 20}px` }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative inline-block">
            <img
              src={biodata.personal.profileImage}
              alt={biodata.personal.name}
              className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-text mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {biodata.personal.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 font-medium"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {biodata.personal.tagline}
        </motion.p>

        {/* Basic Info Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect rounded-lg p-4 card-hover">
            <div className="text-primary font-semibold">{biodata.personal.age}</div>
            <div className="text-sm text-gray-600">Years</div>
          </div>
          <div className="glass-effect rounded-lg p-4 card-hover">
            <div className="text-primary font-semibold">{biodata.personal.height}</div>
            <div className="text-sm text-gray-600">Height</div>
          </div>
          <div className="glass-effect rounded-lg p-4 card-hover">
            <div className="text-primary font-semibold">{biodata.personal.religion}</div>
            <div className="text-sm text-gray-600">Religion</div>
          </div>
          <div className="glass-effect rounded-lg p-4 card-hover">
            <div className="text-primary font-semibold">{biodata.personal.address.split(',')[0]}</div>
            <div className="text-sm text-gray-600">Address</div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;