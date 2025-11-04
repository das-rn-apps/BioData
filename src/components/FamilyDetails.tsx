import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, Heart, UserPlus } from 'lucide-react';
import { biodata } from '../data/biodata';

const FamilyDetails: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Family <span className="text-primary">Details</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My family is my strength and support system. Here's more about them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Parents Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 card-hover"
          >
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-text">Parents</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text text-lg">Father</h4>
                  <p className="text-gray-600">{biodata.family.father.name}</p>
                  <p className="text-sm text-gray-500">{biodata.family.father.occupation}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <User className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-text text-lg">Mother</h4>
                  <p className="text-gray-600">{biodata.family.mother.name}</p>
                  <p className="text-sm text-gray-500">{biodata.family.mother.occupation}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Siblings Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 card-hover"
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold text-text">Siblings</h3>
            </div>

            <div className="space-y-6">
              {/* Sisters */}
              {biodata.family.siblings.sisters && biodata.family.siblings.sisters.length > 0 && (
                <div>
                  <div className="flex items-center mb-3">
                    <div className="bg-pink-100 p-3 rounded-lg mr-3">
                      <User className="w-6 h-6 text-pink-500" />
                    </div>
                    <h4 className="font-semibold text-text text-lg">Sister(s)</h4>
                  </div>
                  <ul className="list-disc ml-10 text-gray-700">
                    {biodata.family.siblings.sisters.map((s, i) => (
                      <li key={i} className="text-base">
                        {s.name} — <span className="text-sm text-gray-500">{s.occupation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Brothers */}
              {biodata.family.siblings.brothers && biodata.family.siblings.brothers.length > 0 && (
                <div>
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-3 rounded-lg mr-3">
                      <UserPlus className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="font-semibold text-text text-lg">Brother(s)</h4>
                  </div>
                  <ul className="list-disc ml-10 text-gray-700">
                    {biodata.family.siblings.brothers.map((b, i) => (
                      <li key={i} className="text-base">
                        {b.name} — <span className="text-sm text-gray-500">{b.occupation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Family Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 glass-effect rounded-xl p-8 card-hover"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-text mb-2">Family Background</h3>
            <div className="w-20 h-1 primary-gradient mx-auto rounded-full"></div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {biodata.family.background}
          </p>
        </motion.div>

        {/* Family Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { title: "Love & Care", icon: "❤️" },
            { title: "Respect", icon: "🙏" },
            { title: "Support", icon: "🤝" },
            { title: "Togetherness", icon: "👨‍👩‍👧‍👦" }
          ].map((value, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-4 text-center card-hover"
            >
              <div className="text-3xl mb-2">{value.icon}</div>
              <h4 className="font-semibold text-text">{value.title}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyDetails;

