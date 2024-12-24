import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Send } from 'lucide-react';
import { explainConcept } from '../../api/ai';
import LoadingAnimation from '../../components/ai/LoadingAnimation';

const ConceptExplainerPage = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    try {
      setLoading(true);
      const response = await explainConcept({ topic });
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {!loading && !result && (
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-4 mb-8">
                <Brain className="w-8 h-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">
                  Hangi konuyu öğrenmek istersin?
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu Başlığı veya Anahtar Kelime
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Örn: İkinci Dereceden Denklemler"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Anlat
                </button>
              </form>
            </div>
          )}

          {loading && <LoadingAnimation />}

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{topic}</h2>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                  {result}
                </pre>
              </div>
              <button
                onClick={() => {
                  setResult(null);
                  setTopic('');
                }}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Yeni Konu Sor
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ConceptExplainerPage;