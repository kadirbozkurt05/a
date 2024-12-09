import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ExamList from '../components/exams/ExamList';
import ExamFilters from '../components/exams/ExamFilters';
import SearchBar from '../components/exams/SearchBar';
import { fetchExams } from '../api/exams';
import { Exam } from '../types/exam';

const ExamsPage = () => {
  const { grade } = useParams<{ grade?: string }>();
  const navigate = useNavigate();
  const [exams, setExams] = useState<Exam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadExams = async () => {
      try {
        setLoading(true);
        const response = await fetchExams(grade);
        if (response ) {
          setExams(response);
        } else {
          setExams([]);
        }
      } catch (err) {
        console.error('Error loading exams:', err);
        setError('Sınavlar yüklenirken bir hata oluştu.');
        setExams([]);
      } finally {
        setLoading(false);
      }
    };

    loadExams();
  }, [grade]);

  const subjects = useMemo(() => 
    [...new Set(exams.map((exam) => exam.subject))],
    [exams]
  );

  const availableKeywords = useMemo(() => {
    const filteredExams = selectedSubject
      ? exams.filter(exam => exam.subject === selectedSubject)
      : exams;
    return [...new Set(filteredExams.flatMap(exam => exam.keywords))];
  }, [selectedSubject, exams]);

  const handleKeywordChange = (keyword: string) => {
    setSelectedKeywords(prev => 
      prev.includes(keyword)
        ? prev.filter(k => k !== keyword)
        : [...prev, keyword]
    );
  };

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
    setSelectedKeywords([]);
  };

  const filteredExams = useMemo(() => {
    return exams.filter((exam) => {
      if (selectedSubject && exam.subject !== selectedSubject) return false;
      
      if (selectedKeywords.length > 0 && !selectedKeywords.every(keyword => 
        exam.keywords.includes(keyword)
      )) return false;
      
      if (difficulty && exam.difficulty !== difficulty) return false;
      
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
  }, [exams, selectedSubject, selectedKeywords, difficulty, searchQuery]);

  const handleStartExam = (examId: string) => {
    navigate(`/sinav/${examId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

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