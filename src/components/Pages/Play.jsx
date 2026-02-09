import { Link, useLocation } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedText";
import LetterButton from "../LetterButton/LetterButtons";
import { useState } from "react";
import Hangman from "../Hangman/hangman";
import GameOver from "../GameStartOver/GameOver";
function playGame() {
  let location = useLocation();
  const word = location.state?.word;
  if (!word) {
    return <div>No word found. Go back to start.</div>;
  }
  const [step, setstep] = useState(0);
  let [guessedLetter, setguessedLetter] = useState([]);
  const wrongGuesses = guessedLetter.filter(
    (letter) => !word.toUpperCase().includes(letter),
  ).length;

  const maxAttempt = 7;

  const isGameOver = wrongGuesses > maxAttempt;

  const isWinner = word.toUpperCase().split('').every(letter=>
    guessedLetter.includes(letter)
  )
  function handleLetterClick(letter) {
    // console.log("Clicked:", letter);
    if (word?.toUpperCase().includes(letter)) {
      // console.log('Correct');
    } else {
      // console.log('Wrong');
      setstep(step + 1);
    }
    if(isGameOver || isWinner) return;
    setguessedLetter([...guessedLetter, letter]);
  }
  return (
    <div>
      <h1>Play Game</h1>
      {isGameOver && (<h2 className="text-red-500 text-2xl">Game Over 😢</h2>)}
      {isWinner && (<h2 className="text-green-500 text-2xl">You Win 🎉</h2>)}
      <MaskedText text={location.state.word} guessWord={guessedLetter} />
      <div className="my-2">
        <LetterButton
          text={word}
          guessedLetter={guessedLetter}
          onLetterClick={handleLetterClick}
          disabled = {isGameOver || isWinner}
        />
      </div>
      <Link to="/start" className="text-blue-400">
        Start Game
      </Link>
      <div>
        <Hangman step={step} />
      </div>
    </div>
  );
}

export default playGame;
