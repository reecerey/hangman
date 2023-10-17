import React, { Component } from 'react';
import './App.css';
import WordToGuess from './WordToGuess';
import Alphabet from './Alphabet';
import HangmanDisplay from './HangmanDisplay';

const words = ['hangman', 'programming', 'react', 'javascript', 'openai', 'developer', 'learning'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: this.getRandomWord(),
      guessedLetters: [],
      incorrectGuesses: 0,
      maxIncorrectGuesses: 6,
      gameStatus: 'playing', // 'playing', 'won', or 'lost'
    };
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  handleLetterClick = (letter) => {
    const { wordToGuess, guessedLetters, incorrectGuesses, maxIncorrectGuesses } = this.state;

    if (this.state.gameStatus === 'playing' && !guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!wordToGuess.includes(letter)) {
        this.setState({ guessedLetters, incorrectGuesses: incorrectGuesses + 1 }, () => {
          if (incorrectGuesses + 1 >= maxIncorrectGuesses) {
            this.setState({ gameStatus: 'lost' });
          }
        });
      } else if (this.checkWordGuessed()) {
        this.setState({ guessedLetters, gameStatus: 'won' });
      } else {
        this.setState({ guessedLetters });
      }
    }
  };

  checkWordGuessed() {
    const { wordToGuess, guessedLetters } = this.state;
    return wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
  }

  handlePlayAgainClick = () => {
    this.setState({
      wordToGuess: this.getRandomWord(),
      guessedLetters: [],
      incorrectGuesses: 0,
      gameStatus: 'playing',
    });
  };

  render() {
    const { wordToGuess, guessedLetters, incorrectGuesses, gameStatus } = this.state;

    return (
      <div className="App">
        <h1>Hangman</h1>
        {gameStatus === 'playing' ? (
          <>
            <WordToGuess wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
            <Alphabet onLetterClick={this.handleLetterClick} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
            <HangmanDisplay incorrectGuesses={incorrectGuesses} />
          </>
        ) : (
          <div className="game-result">
            {gameStatus === 'won' ? 'You Won!' : 'You Lost'}
            <button onClick={this.handlePlayAgainClick}>Play again</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

