import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Question {
  num1: number;
  num2: number;
  operator: string;
  answer: number;
}

const MathQuizPage = () => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  const generateQuestion = () => {
    let num1: number, num2: number, maxNum: number;

    switch (difficulty) {
      case 'easy':
        maxNum = 10;
        break;
      case 'medium':
        maxNum = 25;
        break;
      case 'hard':
        maxNum = 50;
        break;
    }

    num1 = Math.floor(Math.random() * maxNum) + 1;
    num2 = Math.floor(Math.random() * maxNum) + 1;

    const operators = ['+', '-', '×'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let answer: number;
    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        // Ensure positive result
        if (num2 > num1) {
          [num1, num2] = [num2, num1];
        }
        answer = num1 - num2;
        break;
      case '×':
        answer = num1 * num2;
        break;
      default:
        answer = 0;
    }

    setQuestion({ num1, num2, operator, answer });
    setUserAnswer('');
    setMessage('');
  };

  useEffect(() => {
    generateQuestion();
  }, [difficulty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) return;

    const answer = parseInt(userAnswer);
    if (answer === question.answer) {
      setScore(score + 1);
      setMessage('Doğru! 🎉');
    } else {
      setMessage(`Yanlış. Doğru cevap: ${question.answer}`);
    }
    setTotal(total + 1);
    setTimeout(generateQuestion, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Matematik Yarışması</h1>
            <p className="text-gray-600">
              Doğru: {score} / Toplam: {total}
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Zorluk Seviyesi</label>
            <div className="grid grid-cols-3 gap-2">
              {(['easy', 'medium', 'hard'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`p-2 rounded-lg transition-colors ${
                    difficulty === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {level === 'easy' ? 'Kolay' : level === 'medium' ? 'Orta' : 'Zor'}
                </button>
              ))}
            </div>
          </div>

          {question && (
            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {question.num1} {question.operator} {question.num2} = ?
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-3 border rounded-lg text-center text-xl"
              placeholder="Cevabınızı yazın..."
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Kontrol Et
            </button>
          </form>

          {message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-4 p-4 rounded-lg text-center ${
                message.includes('Doğru') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {message}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MathQuizPage;