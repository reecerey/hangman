import React from 'react';
import './HangmanDisplay.css';

const HangmanDisplay = ({ incorrectGuesses }) => {
  // Static SVG elements for the hangman's structure (always visible)
  const staticParts = (
    <>
      <line x1="60" y1="20" x2="140" y2="20" className="figure-part" />
      <line x1="140" y1="20" x2="140" y2="50" className="figure-part" />
      <line x1="60" y1="20" x2="60" y2="230" className="figure-part" />
      <line x1="20" y1="230" x2="100" y2="230" className="figure-part" />
      <line x1="140" y1="50" x2="140" y2="70" className="figure-part" />
    </>
  );

  // SVG paths for different parts of the hangman (changes based on incorrect guesses)
  const hangmanParts = [
    <image x="111" y="40" width="60" height="60" xlinkHref="/hangman-head.png" style={{ mixBlendMode: 'multiply' }}/>,
    <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />,
    <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />,
    <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />,
    <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />,
    <line x1="140" y1="150" x2="160" y2="180" className="figure-part" />,
  ];

  return (
    <div className="hangman-display">
      <svg height="250" width="200" className="figure-container">
        {staticParts}
        {hangmanParts.slice(0, incorrectGuesses)}
      </svg>
    </div>
  );
};

export default HangmanDisplay;