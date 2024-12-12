import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Lightbulb } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-r from-[#2C3E50] to-[#3498DB]">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-6">
                Öğrenme Yolculuğunda Yanınızdayım
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                8 yıllık deneyimim ve tutkumla ilkokul öğrencilerine özel, kişiselleştirilmiş eğitim desteği sunuyorum.
              </p>
              <div className="space-x-4">
                <a
                  href="/hakkimda"
                  className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Hakkımda
                </a>
                <a
                  href="/kaynaklar"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Kaynakları İncele
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src="https://i.ibb.co/hLFYXVj/esma-ogretmen-here.png"
                alt="Esma Öğretmen"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Neden Özel Ders?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kişiselleştirilmiş eğitim yaklaşımı ile her öğrencinin potansiyelini en üst düzeye çıkarıyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10" />,
                title: "Bireysel İlgi",
                description: "Her öğrencinin öğrenme hızına ve stiline uygun özel program"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "8 Yıllık Deneyim",
                description: "Özel okul ve birebir eğitimde kanıtlanmış başarı"
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Ölçülebilir Başarı",
                description: "Düzenli gelişim takibi ve veli bilgilendirmesi"
              },
              {
                icon: <Lightbulb className="h-10 w-10" />,
                title: "Modern Yaklaşım",
                description: "Güncel eğitim teknolojileri ve yöntemleri"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-[#2C3E50] mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Öğrenme Yolculuğuna Başlayın</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-300">
            Öğrencinizin potansiyelini keşfetmek ve akademik başarısını artırmak için hemen iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime Geç
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;