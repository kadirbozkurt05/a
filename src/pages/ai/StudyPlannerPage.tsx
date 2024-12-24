import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Send } from 'lucide-react';
import { generateStudyPlan } from '../../api/ai';
import LoadingAnimation from '../../components/ai/LoadingAnimation';
import { StudyPlanRequest } from '../../types/ai';
import StudyPlanDisplay from '../../components/ai/StudyPlanDisplay';

const SUBJECTS = [
  'Matematik',
  'Türkçe',
  'Fen Bilgisi',
  'Sosyal Bilgiler',
  'İngilizce',
];  

const StudyPlannerPage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<StudyPlanRequest>({
    grade: '',
    subjects: [],
    preferredTopics: '',
    dailyHours: 1,
    excludedDays: [],
    durationWeeks: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await generateStudyPlan(formData);
      setResult(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleDayToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      excludedDays: prev.excludedDays.includes(day)
        ? prev.excludedDays.filter(d => d !== day)
        : [...prev.excludedDays, day]
    }));
  };

  if (loading) return <LoadingAnimation />;

  if (result) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Çalışma Programın Hazır!</h2>
          <StudyPlanDisplay content={result} />
          <button
            onClick={() => {
              setResult(null);
              setFormData({
                grade: '',
                subjects: [],
                preferredTopics: '',
                dailyHours: 1,
                excludedDays: [],
                durationWeeks: 1,
              });
            }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Yeni Program Oluştur
          </button>
        </motion.div>
      </div>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-4 mb-8">
              <Brain className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Merhaba! Sana özel bir çalışma programı hazırlayalım.
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kaçıncı sınıfa gidiyorsun?
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Sınıf seçin</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(grade => (
                    <option key={grade} value={grade}>{grade}. Sınıf</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hangi derslerle ilgili program yapmamı istersin?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SUBJECTS.map(subject => (
                    <button
                      key={subject}
                      type="button"
                      onClick={() => handleSubjectToggle(subject)}
                      className={`p-2 rounded-lg border-2 transition-colors ${
                        formData.subjects.includes(subject)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Özellikle çalışmak istediğin konular var mı? (Opsiyonel)
                </label>
                <input
                  type="text"
                  value={formData.preferredTopics}
                  onChange={(e) => setFormData(prev => ({ ...prev, preferredTopics: e.target.value }))}
                  placeholder="Örn: Kesirler, Paragraf, İngilizce Zamanlar"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Günde kaç saat çalışabilirsin?
                </label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={formData.dailyHours}
                  onChange={(e) => setFormData(prev => ({ ...prev, dailyHours: parseInt(e.target.value) }))}
                  placeholder="Örn: 2"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Boş bırakmak istediğin günler var mı?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map(day => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => handleDayToggle(day)}
                      className={`p-2 rounded-lg border-2 transition-colors ${
                        formData.excludedDays.includes(day)
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kaç haftalık bir program yapmamı istersin?
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={formData.durationWeeks}
                  onChange={(e) => setFormData(prev => ({ ...prev, durationWeeks: parseInt(e.target.value) }))}
                  placeholder="Örn: 4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Program Oluştur
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyPlannerPage;