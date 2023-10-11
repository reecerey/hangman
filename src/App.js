import React, { Component } from 'react';
import './App.css';
import WordToGuess from './WordToGuess';
import Alphabet from './Alphabet';
import HangmanDisplay from './HangmanDisplay';

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

  handleLetterClick = (letter) => {
    const { wordToGuess, guessedLetters, incorrectGuesses, maxIncorrectGuesses } = this.state;

    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!wordToGuess.includes(letter)) {
        this.setState({ guessedLetters, incorrectGuesses: incorrectGuesses + 1 });
      } else {
        this.setState({ guessedLetters });
      }
    }

    // Check for win/lose conditions here
  };

  render() {
    const { wordToGuess, guessedLetters, incorrectGuesses } = this.state;

    return (
      <div className="App">
        <h1>Hangman</h1>
        <WordToGuess wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        <Alphabet onLetterClick={this.handleLetterClick} />
        <HangmanDisplay incorrectGuesses={incorrectGuesses} />
      </div>
    );
  }
}

export default App;
