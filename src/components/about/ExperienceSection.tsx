import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart } from 'lucide-react';

const highlights = [
  {
    icon: BookOpen,
    text: '8 yıllık özel okul öğretmenliğimin yanında her yıl 2 ila 5 arasında özel ders verdiğim öğrenci olmuştur.'
  },
  {
    icon: Users,
    text: 'İlkokul seviyesinde her sınıfa ders verdim, şu an 8 faal öğrencim bulunmaktadır.'
  },
  {
    icon: Heart,
    text: 'Mesleğime aşık olduğum için okuldan kalan zamanlarda özel ders vermek benim için bir iş değil hobi haline geldi.'
  }
];

const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <img
          src="https://i.ibb.co/hLFYXVj/esma-ogretmen-here.png"
          alt="Esma Öğretmen"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <item.icon className="w-6 h-6 text-[#2C3E50] mt-1" />
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceSection;