import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Lightbulb, Brain, Sparkles, Bot, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-r from-[#2C3E50] to-[#3498DB] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Öğrenme Yolculuğunda Yanınızdayım
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                8 yıllık deneyimim ve tutkumla ilkokul öğrencilerine özel, kişiselleştirilmiş eğitim desteği sunuyorum.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/hakkimda"
                  className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  Hakkımda
                </a>
                <a
                  href="/kaynaklar"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
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
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center space-x-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full mb-4"
            >
              <Bot className="w-5 h-5" />
              <span className="font-medium">Yapay Zeka Destekli Eğitim</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Yapay Zeka ile Öğrenme Deneyimini Kişiselleştirin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Modern eğitim teknolojileri ve yapay zeka araçlarıyla öğrenme sürecinizi daha etkili hale getirin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Kişisel Çalışma Programı</h3>
                <p className="text-gray-600 mb-6">
                  Yapay zeka ile oluşturulan, size özel çalışma programları ile verimli öğrenme.
                </p>
                <a
                  href="/yapay-zeka/calisma-programi"
                  className="text-blue-600 font-medium hover:text-blue-700 flex items-center justify-center"
                >
                  Program Oluştur
                  <Zap className="w-4 h-4 ml-2" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Konu Anlatımı</h3>
                <p className="text-gray-600 mb-6">
                  Anlamadığınız konuları yapay zeka ile basit ve anlaşılır şekilde öğrenin.
                </p>
                <a
                  href="/yapay-zeka/konu-anlatimi"
                  className="text-purple-600 font-medium hover:text-purple-700 flex items-center justify-center"
                >
                  Hemen Dene
                  <Zap className="w-4 h-4 ml-2" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-1"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Soru Çözümü</h3>
                <p className="text-gray-600 mb-6">
                  Takıldığınız soruları yapay zeka ile adım adım çözün ve öğrenin.
                </p>
                <a
                  href="/yapay-zeka/konu-anlatimi"
                  className="text-green-600 font-medium hover:text-green-700 flex items-center justify-center"
                >
                  Soru Sor
                  <Zap className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Neden Özel Ders?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kişiselleştirilmiş eğitim yaklaşımı ile her öğrencinin potansiyelini en üst düzeye çıkarıyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Bireysel İlgi",
                description: "Her öğrencinin öğrenme hızına ve stiline uygun özel program"
              },
              {
                icon: Users,
                title: "8 Yıllık Deneyim",
                description: "Özel okul ve birebir eğitimde kanıtlanmış başarı"
              },
              {
                icon: Award,
                title: "Ölçülebilir Başarı",
                description: "Düzenli gelişim takibi ve veli bilgilendirmesi"
              },
              {
                icon: Lightbulb,
                title: "Modern Yaklaşım",
                description: "Güncel eğitim teknolojileri ve yöntemleri"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-[#2C3E50] mb-4 flex justify-center">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C3E50] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Öğrenme Yolculuğuna Başlayın</h2>
            <p className="mb-8 text-lg text-gray-300">
              Öğrencinizin potansiyelini keşfetmek ve akademik başarısını artırmak için hemen iletişime geçin.
            </p>
            <a
              href="/iletisim"
              className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              İletişime Geç
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;