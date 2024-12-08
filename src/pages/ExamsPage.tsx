import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ExamList from '../components/exams/ExamList';
import ExamFilters from '../components/exams/ExamFilters';
import { mockExams } from '../data/mockExams';

const ExamsPage = () => {
  const { grade } = useParams<{ grade?: string }>();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const filteredExams = useMemo(() => {
    return mockExams.filter((exam) => {
      if (grade && exam.grade !== parseInt(grade)) return false;
      if (selectedSubject && exam.subject !== selectedSubject) return false;
      if (selectedTopic && exam.topic !== selectedTopic) return false;
      if (difficulty && exam.difficulty !== difficulty) return false;
      return true;
    });
  }, [grade, selectedSubject, selectedTopic, difficulty]);

  const subjects = [...new Set(mockExams.map((exam) => exam.subject))];
  const topics = [...new Set(mockExams.map((exam) => exam.topic))];

  const handleStartExam = (examId: string) => {
    // In a real application, this would navigate to the exam page
    navigate(`/sinav/${examId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">
              {grade ? `${grade}. Sınıf Sınavları` : 'Tüm Sınavlar'}
            </h1>
            <p className="text-blue-100">
              Öğrencilerinizin seviyesini ölçmek için hazırlanmış kapsamlı değerlendirme sınavları
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <ExamFilters
                subjects={subjects}
                selectedSubject={selectedSubject}
                onSubjectChange={setSelectedSubject}
                topics={topics}
                selectedTopic={selectedTopic}
                onTopicChange={setSelectedTopic}
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
              />
            </div>

            <div className="lg:col-span-3">
              <ExamList 
                exams={filteredExams}
                onStartExam={handleStartExam}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExamsPage;