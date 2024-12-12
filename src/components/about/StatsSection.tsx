import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';

const stats = [
  { icon: Clock, value: '8+', label: 'Yıllık Deneyim' },
  { icon: Users, value: '100+', label: 'Mutlu Öğrenci' },
  { icon: Star, value: '8', label: 'Aktif Öğrenci' }
];

const StatsSection = () => {
  return (
    <section className="py-12 -mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#2C3E50]" />
              <div className="text-3xl font-bold text-[#2C3E50] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;