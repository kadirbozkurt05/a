import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Info } from 'lucide-react';
import SolarSystem from '../components/solar/SolarSystem';

const SolarSystemPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Güneş Sistemi Simülasyonu</h1>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-6 py-2 rounded-lg flex items-center ${
                  isPlaying
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white transition-colors`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Durdur
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Başlat
                  </>
                )}
              </button>
            </div>

            <SolarSystem isPlaying={isPlaying} />

            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-2">Simülasyon Hakkında:</p>
                  <ul className="space-y-1">
                    <li>• Gezegenlerin yörünge hızları görselleştirme için ölçeklendirilmiştir</li>
                    <li>• Gerçek yörünge hızları arasındaki fark çok büyük olduğundan, dış gezegenlerin hareketi gözlemlenebilir hale getirilmiştir</li>
                    <li>• Gezegen boyutları ve yörünge mesafeleri göreceli olarak ölçeklendirilmiştir</li>
                    <li>• Fare ile görünümü döndürebilir ve yakınlaştırabilirsiniz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarSystemPage;