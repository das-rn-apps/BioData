import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Target } from 'lucide-react';
import { biodata } from '../data/biodata';

const PersonalInfo: React.FC = () => {
  return (
    <section className="section-padding gradient-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-3">
            Personal <span className="text-primary">Information</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Learn more about my interests, personality, and what I look for in a life partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Hobbies & Interests */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 card-hover"
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-text">Hobbies & Interests</h3>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {biodata.personalInfo.hobbies.map((hobby, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-xs font-medium card-hover"
                >
                  {hobby}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "📚", title: "Reading & Teaching", desc: "Fiction & Self-help" },
                { emoji: "🎶", title: "Music", desc: "Indian Music" },
                { emoji: "📸", title: "Photography", desc: "Nature & Portraits" },
                { emoji: "🧘", title: "Wellness", desc: "Exrecise" },
              ].map((interest, index) => (
                <div key={index} className="glass-effect rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">{interest.emoji}</div>
                  <h4 className="font-semibold text-text text-sm">{interest.title}</h4>
                  <p className="text-xs text-gray-500">{interest.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personality */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-4 card-hover"
          >
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-text">My Personality</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                {biodata.personalInfo.personality}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { trait: "Optimistic", color: "bg-green-100 text-green-800" },
                  { trait: "Caring", color: "bg-pink-100 text-pink-800" },
                  { trait: "Ambitious", color: "bg-blue-100 text-blue-800" },
                  { trait: "Honest", color: "bg-purple-100 text-purple-800" }
                ].map((trait, index) => (
                  <div key={index} className={`${trait.color} px-3 py-2 rounded-lg text-center text-sm font-medium`}>
                    {trait.trait}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partner Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 glass-effect rounded-xl p-3 card-hover"
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center mb-3">
              <Target className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-text">Partner Preferences</h3>
            </div>
            <div className="w-20 h-1 primary-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-text mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Qualities I Admire
              </h4>
              <div className="space-y-2">
                {[
                  "Well-educated and career-oriented",
                  "Understanding and caring nature",
                  "Respects family values",
                  "Good sense of humor",
                  "Ambitious yet grounded"
                ].map((quality, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    {quality}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-3 flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Ideal Match
              </h4>
              <div className="space-y-2">
                {[
                  "Age: 20-24 years",
                  "Similar cultural background",
                  "Stable career",
                  "Family-oriented",
                  "Ready for commitment"
                ].map((match, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {match}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
            <p className="text-gray-600 leading-relaxed text-sm">
              {biodata.personalInfo.partnerPreferences}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInfo;