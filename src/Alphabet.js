import React from 'react';
import './Alphabet.css';

const Alphabet = ({ onLetterClick, wordToGuess, guessedLetters }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const getButtonBackgroundColor = (letter) => {
    if (guessedLetters.includes(letter)) {
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
          style={{ backgroundColor: getButtonBackgroundColor(letter) }}
          disabled={guessedLetters.includes(letter)}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;

