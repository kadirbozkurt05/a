import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, Save } from 'lucide-react';
import { mockExams } from '../data/mockExams';

const ExamPage = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  
  const exam = mockExams.find(e => e.id === examId);
  
  useEffect(() => {
    if (!exam) {
      navigate('/sinavlar');
      return;
    }
    
    setTimeLeft(exam.duration * 60);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Handle exam completion
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

  // Mock questions for demonstration
  const questions = [
    {
      id: 1,
      text: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      correct: "4"
    },
    {
      id: 2,
      text: "3 x 4 = ?",
      options: ["10", "11", "12", "13"],
      correct: "12"
    },
    // Add more questions as needed
  ];

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
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Handle exam submission
    navigate('/sinavlar');
  };

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
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <div className="mb-6">
              <span className="text-sm text-gray-500">
                Soru {currentQuestion + 1} / {questions.length}
              </span>
              <h2 className="text-xl font-semibold mt-2">{questions[currentQuestion].text}</h2>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
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
          </div>

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
              disabled={currentQuestion === questions.length - 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentQuestion === questions.length - 1
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