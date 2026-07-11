import { Link, useLocation, useNavigate } from "react-router-dom";
import MaskedText from "../MaskedText/MaskedText";
import LetterButton from "../LetterButton/LetterButtons";
import { useContext, useState } from "react";
import Hangman from "../Hangman/hangman";
import GameResultModal from "../GameResult/GameResultModal";
import { WordContext } from "../../ContextAPI/WordContext";
function playGame() {
  const {wordList,selectedWord} = useContext(WordContext);
  console.log(wordList);
  let location = useLocation();
  let navigate = useNavigate();
  // console.log(location.state.word);
  // const word = location.state?.word;
  if (!selectedWord) {
    return <div>No word found. Go back to start.</div>;
  }
  const [step, setstep] = useState(0);
  let [guessedLetter, setguessedLetter] = useState([]);
  const wrongGuesses = guessedLetter.filter(
    (letter) => !selectedWord.toUpperCase().includes(letter),
  ).length;

  const maxAttempt = 7;

  const isGameOver = wrongGuesses >= maxAttempt;

  const isWinner = selectedWord
    .toUpperCase()
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const isOpenModal = isGameOver || isWinner;
  function reStartGame() {
    setguessedLetter([]);
    setstep(0);
    navigate("/home");
  }
  function handleLetterClick(letter) {
    // console.log("Clicked:", letter);
    if (selectedWord?.toUpperCase().includes(letter)) {
      // console.log('Correct');
    } else {
      // console.log('Wrong');
      setstep(step + 1);
    }
    if (isGameOver || isWinner) return;
    setguessedLetter([...guessedLetter, letter]);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl p-8 text-white animate-scaleIn">
        <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">
          🎯 Hangman Game
           {/* {wordList.map(wordObject => <li key={wordObject.id}>{wordObject.wordValue}</li>)} */}
        </h1>
        <div className="flex justify-center mb-6 text-2xl font-semibold tracking-widest">
          <MaskedText text={selectedWord} guessWord={guessedLetter} />
        </div>
        <div className="my-4 flex justify-center flex-wrap">
          <LetterButton
            text={selectedWord}
            guessedLetter={guessedLetter}
            onLetterClick={handleLetterClick}
            disabled={isGameOver || isWinner}
          />
        </div>
        <div className="flex justify-center mt-6 animate-float">
          <Hangman step={step} />
        </div>
        <GameResultModal
          isOpenModal={isOpenModal}
          reStartGame={reStartGame}
          isWinner={isWinner}
          word={selectedWord}
        />
        <div className="flex justify-center my-3">
          <Link
            to="/start"
            className="inline-block text-center w-2xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-90 transition-transform duration-300 hover:shadow-purple-500/50"
          >
            Start Game
          </Link>
        </div>
      </div>
    </div>
  );
}

export default playGame;
