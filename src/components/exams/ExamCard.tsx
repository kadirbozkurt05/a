import React from 'react';
import { Clock, BookOpen, HelpCircle } from 'lucide-react';
import { Exam } from '../../types/exam';

interface ExamCardProps {
  exam: Exam;
  onStart: (examId: string) => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, onStart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{exam.title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-4 h-4 mr-2" />
            <span>{exam.subject} - {exam.topic}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{exam.duration} dakika</span>
          </div>
          <div className="flex items-center text-gray-600">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span>{exam.questionCount} Soru</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm ${
            exam.difficulty === 'Kolay' ? 'bg-green-100 text-green-800' :
            exam.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {exam.difficulty}
          </span>
          <button
            onClick={() => onStart(exam.id)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sınava Başla
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamCard;