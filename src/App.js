import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: 'hangman', // Set your word here
      guessedLetters: [],
      incorrectGuesses: 0,
      maxIncorrectGuesses: 6, // You can change this to set a different maximum
    };
  }

  render() {
    return (
      <div className="App">
        {/* Add your WordToGuess, Alphabet, and HangmanDisplay components here */}
      </div>
    );
  }
}

export default App;