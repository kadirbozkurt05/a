import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Exam } from '../../types/exam';
import ExamCard from './ExamCard';

interface ExamListProps {
  exams: Exam[];
  onStartExam: (examId: string) => void;
}

const ExamList: React.FC<ExamListProps> = ({ exams, onStartExam }) => {
  if (exams.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <p className="text-gray-600">Bu kriterlere uygun sınav bulunamadı.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AnimatePresence mode="popLayout">
        {exams.map((exam) => (
          <motion.div
            key={exam._id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <ExamCard exam={exam} onStart={onStartExam} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ExamList;