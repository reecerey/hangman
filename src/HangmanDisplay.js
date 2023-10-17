import React from 'react';
import './HangmanDisplay.css';

const HangmanDisplay = ({ incorrectGuesses }) => {
  // You can use SVG or ASCII art for the hangman display
  // Example: Use CSS classes to show/hide parts of the hangman
  const hangmanParts = [
    'head',
    'body',
    'left-arm',
    'right-arm',
    'left-leg',
    'right-leg',
  ];

  return (
    <div className="hangman-display">
      <div className="hangman">
        {hangmanParts.map((part, index) => (
          <div
            key={part}
            className={`hangman-part ${index < incorrectGuesses ? 'show' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HangmanDisplay;
