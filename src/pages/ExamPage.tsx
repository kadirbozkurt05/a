import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, Save, Award } from 'lucide-react';
import { mockExams } from '../data/mockExams';
import { ExamResult } from '../types/exam';

const ExamPage = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const [examStartTime, setExamStartTime] = useState<Date | null>(null);
  
  const exam = mockExams.find(e => e.id === examId);
  
  useEffect(() => {
    if (!exam) {
      navigate('/sinavlar');
      return;
    }
    
    setTimeLeft(exam.duration * 60);
    setExamStartTime(new Date());
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [exam, navigate]);

  if (!exam) {
    return null;
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    let correctCount = 0;
    exam.questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correctCount++;
      }
    });

    const timeSpent = examStartTime 
      ? Math.floor((new Date().getTime() - examStartTime.getTime()) / 1000)
      : 0;

    return {
      totalQuestions: exam.questions.length,
      correctAnswers: correctCount,
      score: Math.round((correctCount / exam.questions.length) * 100),
      timeSpent
    };
  };

  const handleSubmit = () => {
    const result = calculateResult();
    setExamResult(result);
  };

  if (examResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Sınav Sonucu</h1>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-blue-600">{examResult.score}%</p>
                <p className="text-gray-600">Başarı Oranı</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xl font-bold text-gray-800">
                    {examResult.correctAnswers}/{examResult.totalQuestions}
                  </p>
                  <p className="text-gray-600">Doğru Cevap</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xl font-bold text-gray-800">
                    {Math.floor(examResult.timeSpent / 60)}:{(examResult.timeSpent % 60).toString().padStart(2, '0')}
                  </p>
                  <p className="text-gray-600">Geçen Süre</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/sinavlar')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sınavlara Dön
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">{exam.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Sınavı Bitir
                </button>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-6"
            >
              <div className="mb-6">
                <span className="text-sm text-gray-500">
                  Soru {currentQuestion + 1} / {exam.questions.length}
                </span>
                <h2 className="text-xl font-semibold mt-2">{exam.questions[currentQuestion].text}</h2>
              </div>

              <div className="space-y-4">
                {exam.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      answers[currentQuestion] === option
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Önceki Soru
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === exam.questions.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentQuestion === exam.questions.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Sonraki Soru
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExamPage;