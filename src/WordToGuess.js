import React from 'react';
import './WordToGuess.css';

const WordToGuess = ({ wordToGuess, guessedLetters }) => {
  const displayWord = wordToGuess
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  return <div className="word-to-guess">{displayWord}</div>;
};

export default WordToGuess;
