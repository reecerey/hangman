import React from 'react';
import './GameInstructions.css';

const GameInstructions = ({ onClose, showInstructions }) => {
    return (
      <div className={`modal ${showInstructions ? 'show' : ''}`}>
        <div className="modal-content">
          <button onClick={onClose} className="close-button">
            Close
          </button>
          <h2>How to Play Hangman</h2>
          <p>Hangman is a word-guessing game. Follow these rules to play:</p>
            <ol>
                <li>A secret word is chosen at random.</li>
                <li>You must try to guess the word by suggesting one letter at a time.</li>
                <li>For each incorrect guess, a part of the hangman is drawn.</li>
                <li>The game ends when the word is guessed correctly or when the hangman is fully drawn.</li>
            </ol>
          <p>Try to guess the word correctly before the hangman is complete! Good luck!</p>
        </div>
      </div>
    );
  };

export default GameInstructions;