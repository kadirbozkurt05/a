import React from 'react';
import { motion } from 'framer-motion';

const approachContent = [
  'Son 4 yılı aynı kurumda olmak üzere 7 yıl özel okullarda öğretmenlik yaptım. Daha sonra kendi öğrencilerimin sayısı artması sebebiyle kurumda çalışmayı bırakıp sadece özel ders alanına yöneldim.',
  'Çalıştığım kurumlarda, önceliğim öğrencilerimin faydası olmuştur ancak toplu ders vermenin verdiği dezavantajlar, özel derste alınan verimin okullarda alınmasının önüne geçmektedir.',
  'Yıllardır özel ders de veren bir eğitimci olarak, her öğrencinin az veya çok özel derse ihtiyacı olduğunu düşünmekteyim.',
  'Tecrübe ne kadar önemli olsa da genç nesillerle iletişim için genç ve dinamik de olmanın önemli olduğunu düşünüyorum.',
  'Gerek okumayı sökmekte zorlanan 1. sınıf öğrencilerine, gerekse ileriki safhalarda öğrenimine devam eden ilkokul öğrencilerine özel ders verdim ve hepsinde de gözle görülür başarılar yakaladım. Pek çok öğrencimin velisinden bu yönde takdirler aldım ve bu motivasyonla okulu tamamen bırakıp kariyerime sadece özel ders vererek devam etme kararı aldım.'
];

const ApproachSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Deneyim ve Yaklaşımım</h2>
      
      <div className="space-y-6 text-gray-700">
        {approachContent.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default ApproachSection;