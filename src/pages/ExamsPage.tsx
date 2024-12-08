import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ExamList from '../components/exams/ExamList';
import ExamFilters from '../components/exams/ExamFilters';
import SearchBar from '../components/exams/SearchBar';
import { mockExams } from '../data/mockExams';

const ExamsPage = () => {
  const { grade } = useParams<{ grade?: string }>();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const subjects = [...new Set(mockExams.map((exam) => exam.subject))];

  // Get keywords only for the selected subject
  const availableKeywords = useMemo(() => {
    const exams = selectedSubject
      ? mockExams.filter(exam => exam.subject === selectedSubject)
      : mockExams;
    return [...new Set(exams.flatMap(exam => exam.keywords))];
  }, [selectedSubject]);

  const handleKeywordChange = (keyword: string) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedKeywords([]); // Reset keywords when subject changes
  };

  const filteredExams = useMemo(() => {
    return mockExams.filter((exam) => {
      // Grade filter
      if (grade && exam.grade !== parseInt(grade)) return false;
      
      // Subject filter
      if (selectedSubject && exam.subject !== selectedSubject) return false;
      
      // Keywords filter
      if (selectedKeywords.length > 0 && !selectedKeywords.every(keyword => 
        exam.keywords.includes(keyword)
      )) return false;
      
      // Difficulty filter
      if (difficulty && exam.difficulty !== difficulty) return false;
      
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = exam.title.toLowerCase().includes(query);
        const matchesKeywords = exam.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        if (!matchesTitle && !matchesKeywords) return false;
      }
      
      return true;
    });
  }, [grade, selectedSubject, selectedKeywords, difficulty, searchQuery]);

  const handleStartExam = (examId: string) => {
    navigate(`/sinav/${examId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
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
                onSubjectChange={handleSubjectChange}
                keywords={availableKeywords}
                selectedKeywords={selectedKeywords}
                onKeywordChange={handleKeywordChange}
                difficulty={difficulty}
                onDifficultyChange={setDifficulty}
              />
            </div>

            <div className="lg:col-span-3">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Sınav başlığı veya anahtar kelime ara..."
              />
              
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