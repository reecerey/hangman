import React, { Component } from 'react';
import './App.css';
import WordToGuess from './WordToGuess';
import Alphabet from './Alphabet';
import HangmanDisplay from './HangmanDisplay';
import GameInstructions from './GameInstructions';

const wordList = `
  hangman programming react javascript openai developer learning
  abruptly absurd abyss affix askew avenue awkward axiom azure
  bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard
  boggle bookworm boxcar boxful buckaroo buffalo buffoon buxom
  buzzard buzzing buzzwords caliph cobweb cockiness croquet
  crypt curacao cycle daiquiri dirndl disavow dizzying duplex
  dwarves embezzle equip espionage euouae exodus faking
  fishhook fixable fjord flapjack flopping fluffiness flyby
  foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize
  gazebo giaour gizmo glowworm glyph gnarly gnostic gossip
  grogginess haiku haphazard hyphen iatrogenic icebox injury
  ivory ivy jackpot jaundice jawbreaker jaywalk jazziest jazzy
  jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful
  juicy jukebox jumbo kayak kazoo keyhole khaki kilobyte kiosk
  kitsch kiwifruit klutz knapsack larynx lengths lucky luxury
  lymph marquis matrix megahertz microwave mnemonic mystify
  naphtha nightclub nowadays numbskull nymph onyx ovary oxidize
  oxygen pajama peekaboo phlegm pixel pizazz pneumonia polka
  pshaw psyche puppy puzzling quartz queue quips quixotic quiz
  quizzes quorum razzmatazz rhubarb rhythm rickshaw schnapps
  scratch shiv snazzy sphinx spritz squawk staff strength strengths
  stretch stronghold stymied subway swivel syndrome thriftless
  thumbscrew topaz transcript transgress transplant triphthong
  twelfth twelfths unknown unworthy unzip uptown vaporize vixen
  vodka voodoo vortex voyeurism walkway waltz wave wavy waxy
  wellspring wheezy whiskey whizzing whomever wimpy witchcraft
  wizard woozy wristwatch wyvern xylophone yachtsman yippee
  yoked youthful yummy zephyr zigzag zigzagging zilch zipper
  zodiac zombie
`.trim().split(/\s+/);

const words = wordList.filter(word => word); // Filter out empty strings

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: this.getRandomWord(),
      guessedLetters: [],
      incorrectGuesses: 0,
      maxIncorrectGuesses: 7,
      gameStatus: 'playing', // 'playing', 'won', or 'lost'
      showInstructions: false,
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

  handleRestartClick = () => {
    this.setState({
      wordToGuess: this.getRandomWord(),
      guessedLetters: [],
      incorrectGuesses: 0,
      gameStatus: 'playing',
    });
  };

  toggleInstructions = () => {
    this.setState((prevState) => ({
      showInstructions: !prevState.showInstructions,
    }));
  };

  render() {
    const { wordToGuess, guessedLetters, incorrectGuesses, gameStatus, showInstructions } = this.state;

    return (
      <div className="App">
        <h1>Hangman</h1>

        <button onClick={this.toggleInstructions} className="instructions-button">
          How to Play
        </button>
        <GameInstructions onClose={this.toggleInstructions} showInstructions={this.state.showInstructions} />

        {gameStatus === 'playing' ? (
          <>
            <WordToGuess wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
            <Alphabet onLetterClick={this.handleLetterClick} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
            <HangmanDisplay incorrectGuesses={incorrectGuesses} />
            <button onClick={this.handleRestartClick} disabled={gameStatus !== 'playing'} className="restart-button">
              Restart
            </button>
          </>
        ) : (
          <div className="game-result">
            {gameStatus === 'won' ? `You Won! The word was "${wordToGuess}"` : `You Lost. The word was "${wordToGuess}"`}
            <br />
            <button onClick={this.handlePlayAgainClick}>Play again</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;