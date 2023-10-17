import React from 'react';
import './Alphabet.css';

const Alphabet = ({ onLetterClick, wordToGuess, guessedLetters }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const getLetterColor = (letter) => {
    if (guessedLetters && guessedLetters.includes(letter) && wordToGuess) {
      return wordToGuess.includes(letter) ? 'blue' : 'red';
    }
    return '';
  };

  return (
    <div className="alphabet">
      {alphabet.split('').map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          style={{ color: getLetterColor(letter) }}
          disabled={guessedLetters && guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;