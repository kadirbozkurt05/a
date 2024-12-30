import React from 'react';
import divide from './syllableUtils';

export const coloredSyllables = (word: string) => {
  return word.split('-').map((syllable, index) => (
    <span
      key={index}
      className={`inline-block px-3 py-2 m-1 text-2xl ${
        ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200'][index % 4]
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {syllable}
    </span>
  ));
};

export const renderSentence = (sentence: string) => {
  const words = sentence.split(' ');
  let lastSyllableWasRed = false;

  return words.map((word, wordIndex) => (
    <React.Fragment key={wordIndex}>
      {renderWord(word, !lastSyllableWasRed, (wasRed) => {
        lastSyllableWasRed = wasRed;
      })}
      {wordIndex < words.length - 1 && <span className="text-gray-900"> </span>}
    </React.Fragment>
  ));
};

const renderWord = (
  word: string, 
  startWithRed: boolean,
  updateLastColor: (wasRed: boolean) => void
) => {
  const syllables = divide(word).split('-');
  const isLastSyllableRed = (syllables.length + (startWithRed ? 0 : 1)) % 2 === 1;
  updateLastColor(isLastSyllableRed);

  return syllables.map((syllable, index) => {
    const shouldBeRed = (index + (startWithRed ? 0 : 1)) % 2 === 0;
    return (
      <span
        key={index}
        className={`font-medium text-2xl ${shouldBeRed ? 'text-red-600' : 'text-gray-900'}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {syllable}
      </span>
    );
  });
};