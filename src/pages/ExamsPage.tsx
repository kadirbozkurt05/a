import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ExamCard from '../components/exams/ExamCard';
import ExamFilters from '../components/exams/ExamFilters';
import { mockExams } from '../data/mockExams';

const ExamsPage = () => {
  const { grade } = useParams<{ grade: string }>();
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
    // This will be implemented when the backend is ready
    console.log(`Starting exam: ${examId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            {grade ? `${grade}. Sınıf Sınavları` : 'Tüm Sınavlar'}
          </h1>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredExams.map((exam) => (
                  <ExamCard
                    key={exam.id}
                    exam={exam}
                    onStart={handleStartExam}
                  />
                ))}
              </div>

              {filteredExams.length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <p className="text-gray-600">Bu kriterlere uygun sınav bulunamadı.</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExamsPage;