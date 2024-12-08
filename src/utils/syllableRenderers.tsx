import React from 'react';
import divide from './syllableUtils';

export const coloredSyllables = (word: string) => {
  return word.split('-').map((syllable, index) => (
    <span
      key={index}
      className={`inline-block px-2 py-1 m-1 ${
        ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200'][index % 4]
      }`}
      style={{ fontFamily: "'Comic Sans MS', cursive" }}
    >
      {syllable}
    </span>
  ));
};

export const renderSentence = (sentence: string) => {
  const words = sentence.split(' ');
  return words.map((word, wordIndex) => (
    <React.Fragment key={wordIndex}>
      {renderWord(word)}
      {wordIndex < words.length - 1 && <span className="text-gray-900"> </span>}
    </React.Fragment>
  ));
};

const renderWord = (word: string) => {
  const syllables = divide(word).split('-');
  return syllables.map((syllable, index) => (
    <span
      key={index}
      className={`font-medium ${index % 2 === 0 ? 'text-red-600' : 'text-gray-900'}`}
      style={{ fontFamily: "'Comic Sans MS', cursive" }}
    >
      {syllable}
    </span>
  ));
};