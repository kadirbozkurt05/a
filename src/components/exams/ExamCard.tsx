import React, { useState } from 'react';
import { Clock, BookOpen, HelpCircle, AlertCircle } from 'lucide-react';
import { Exam } from '../../types/exam';
import ExamStartModal from './ExamStartModal';
import { motion } from 'framer-motion';

interface ExamCardProps {
  exam: Exam;
  onStart: (examId: string) => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, onStart }) => {
  const [showModal, setShowModal] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Kolay':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Orta':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Zor':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <>
      <motion.div 
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{exam.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(exam.difficulty)}`}>
              {exam.difficulty}
            </span>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-600">
              <BookOpen className="w-5 h-5 mr-3 text-blue-500" />
              <span>{exam.subject} - {exam.topic}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-3 text-blue-500" />
              <span>{exam.duration} dakika</span>
            </div>
            <div className="flex items-center text-gray-600">
              <HelpCircle className="w-5 h-5 mr-3 text-blue-500" />
              <span>{exam.questionCount} Soru</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>Hazırlık süresi: 5 dk</span>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center font-medium"
            >
              Sınava Başla
            </button>
          </div>
        </div>
      </motion.div>

      <ExamStartModal
        exam={exam}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onStart={() => {
          setShowModal(false);
          onStart(exam.id);
        }}
      />
    </>
  );
};

export default ExamCard;