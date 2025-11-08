import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Ruler, MapPin, GraduationCap, Briefcase, Users } from 'lucide-react';
import { biodata } from '../data/biodata';

const BasicInfo: React.FC = () => {
  const infoItems = [
    { icon: Calendar, label: 'Date of Birth', value: biodata.personal.dateOfBirth },
    { icon: Ruler, label: 'Height', value: biodata.personal.height },
    { icon: Users, label: 'Religion', value: biodata.personal.religion },
    { icon: MapPin, label: 'Caste', value: biodata.personal.caste },
    { icon: GraduationCap, label: 'Education', value: biodata.personal.education },
    { icon: Briefcase, label: 'Occupation', value: biodata.personal.occupation },
    { icon: MapPin, label: 'Location', value: biodata.personal.location },
    { icon: Briefcase, label: 'Company', value: biodata.personal.company },
  ];

  return (
    <section className="section-padding gradient-bg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">
            Basic <span className="text-primary">Details</span>
          </h2>
          <p className="text-xs text-gray-600 max-w-6xl mx-auto">
            Get to know me better through these essential details about my life and background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-1 card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-medium text-gray-500 mb-1 italic">{item.label}</h3>
                  <p className="text-sm font-semibold text-text">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-xl text-center"
        >
          <h3 className="text-xl font-bold text-text mb-4">Quick Summary</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I'm a {biodata.personal.age}-year-old {biodata.personal.education} graduate working as a {biodata.personal.occupation.toLowerCase()}
            in {biodata.personal.location}. I come from a {biodata.personal.religion.toLowerCase()} {biodata.personal.caste.toLowerCase()} background
            and believe in balancing traditional values with modern thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BasicInfo;