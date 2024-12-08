import React from 'react';
import { motion } from 'framer-motion';
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
      {exams.map((exam) => (
        <motion.div
          key={exam.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ExamCard exam={exam} onStart={onStartExam} />
        </motion.div>
      ))}
    </div>
  );
};

export default ExamList;