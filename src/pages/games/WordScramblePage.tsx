import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchWords } from '../../api/games';

const WordScramblePage = () => {
  const [words, setWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWords = async () => {
      try {
        const fetchedWords = await fetchWords();
        setWords(fetchedWords);
        selectNewWord(fetchedWords);
      } catch (err) {
        setError('Kelimeler yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    loadWords();
  }, []);

  const scrambleWord = (word: string) => {
    return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  };

  const selectNewWord = (wordList: string[] = words) => {
    if (wordList.length === 0) return;
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(randomWord);
    setScrambledWord(scrambleWord(randomWord));
    setUserInput('');
    setMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1);
      setMessage('Doğru! 🎉');
      setTimeout(() => selectNewWord(), 1500);
    } else {
      setMessage('Yanlış cevap, tekrar dene!');
    }
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
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Kelime Karıştırma</h1>
            <p className="text-gray-600">Puan: {score}</p>
          </div>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-blue-600 mb-4">{scrambledWord}</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
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

          <button
            onClick={() => selectNewWord()}
            className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Yeni Kelime
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WordScramblePage;