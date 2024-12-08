import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Card {
  id: number;
  content: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGamePage = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const initialCards = [
    { content: '🍎', match: '🍎' },
    { content: '🌞', match: '🌞' },
    { content: '🌈', match: '🌈' },
    { content: '🎨', match: '🎨' },
    { content: '📚', match: '📚' },
    { content: '✏️', match: '✏️' },
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedCards = [...initialCards, ...initialCards];
    const shuffledCards = duplicatedCards
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        content: card.content,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (cards[id].isMatched) return;
    if (flippedCards.includes(id)) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstId, secondId] = newFlippedCards;
      if (cards[firstId].content === cards[secondId].content) {
        newCards[firstId].isMatched = true;
        newCards[secondId].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          newCards[firstId].isFlipped = false;
          newCards[secondId].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const isGameComplete = cards.every((card) => card.isMatched);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Hafıza Oyunu</h1>
            <p className="text-gray-600 mb-4">Hamle Sayısı: {moves}</p>
            <button
              onClick={initializeGame}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Yeni Oyun
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square flex items-center justify-center text-4xl rounded-lg cursor-pointer transition-all duration-300 ${
                  card.isFlipped || card.isMatched
                    ? 'bg-white shadow-md'
                    : 'bg-blue-600'
                }`}
              >
                {(card.isFlipped || card.isMatched) && card.content}
              </motion.div>
            ))}
          </div>

          {isGameComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8 p-4 bg-green-100 rounded-lg"
            >
              <p className="text-green-800 font-semibold">
                Tebrikler! {moves} hamlede tamamladınız!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MemoryGamePage;