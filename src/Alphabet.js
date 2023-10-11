import React from 'react';

const Alphabet = ({ onLetterClick }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="alphabet">
      {alphabet.split('').map((letter) => (
        <button key={letter} onClick={() => onLetterClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Alphabet;
