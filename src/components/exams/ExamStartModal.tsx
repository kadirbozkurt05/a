import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, BookOpen, HelpCircle, X, AlertTriangle } from 'lucide-react';
import { Exam } from '../../types/exam';

interface ExamStartModalProps {
  exam: Exam;
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

const ExamStartModal: React.FC<ExamStartModalProps> = ({
  exam,
  isOpen,
  onClose,
  onStart,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl relative w-full max-w-lg p-6 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{exam.title}</h3>
              <p className="text-gray-600">Sınava başlamadan önce lütfen aşağıdaki bilgileri kontrol edin.</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-700">
                <BookOpen className="w-5 h-5 mr-3 text-blue-500" />
                <span>Ders: {exam.subject}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-blue-500" />
                <span>Süre: {exam.duration} dakika</span>
              </div>
              <div className="flex items-center text-gray-700">
                <HelpCircle className="w-5 h-5 mr-3 text-blue-500" />
                <span>Soru Sayısı: {exam.questionCount}</span>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-yellow-800 font-medium mb-1">Önemli Bilgiler</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Sınav başladıktan sonra süre işlemeye başlayacaktır.</li>
                    <li>• Sınav sırasında sayfayı yenilememeye dikkat edin.</li>
                    <li>• Tüm soruları yanıtladığınızdan emin olun.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                İptal
              </button>
              <button
                onClick={onStart}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sınava Başla
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ExamStartModal;