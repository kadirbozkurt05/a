import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Lightbulb } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
            alt="Education"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Eğitimde Yenilikçi Çözümler</h1>
            <p className="text-xl mb-8">
              İlkokul öğretmenlerine özel hazırlanmış dijital araçlar ve kaynaklar ile eğitimi daha etkili hale getirin.
            </p>
            <a
              href="/hece-calismasi"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Hemen Başla
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Neler Sunuyoruz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Öğretmenlerimizin ihtiyaç duyduğu tüm araçlar ve kaynaklar tek bir platformda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10" />,
                title: "Eğitim Araçları",
                description: "Heceleme çalışması gibi özel hazırlanmış dijital araçlar"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Sınıf Yönetimi",
                description: "Her sınıf seviyesine uygun özel kaynaklar"
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Başarı Takibi",
                description: "Öğrenci gelişimini takip etme araçları"
              },
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Yenilikçi Yaklaşım",
                description: "Modern eğitim teknolojileri ve yöntemleri"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Başlayın</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Ücretsiz araçlarımızı kullanmaya başlayın ve eğitimde fark yaratın.
          </p>
          <a
            href="/hece-calismasi"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Araçları Keşfet
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;