const Al = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
// const Alphabets = Al.toUpperCase();
import GameOver from "../GameStartOver/GameOver";

function LetterButton({ text, guessedLetter,onLetterClick,disabled }) {
  // console.log(text);
//   console.log(guessedLetter);
  const OriginalLetterSet = new Set(text.toUpperCase().split(""));
  const guessedLetterSet = new Set(
  guessedLetter.map(l => l.toUpperCase())
);

  const buttonStyle = function (letter) {
    // console.log("Checking letter:", letter);
  // console.log("Guessed Set:", guessedLetterSet);
  // console.log("Original Set:", OriginalLetterSet);

    if (guessedLetterSet.has(letter)) {
      return `${OriginalLetterSet.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
      return "bg-blue-500";
    }
  };
   function handleLetterClick(event) {
    let Character = event.target.value;
    // console.log(Character);
    onLetterClick?.(Character)
    
   }
  const buttons = Al.map(letter => {
    return (
        <button
        key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={disabled || guessedLetterSet.has(letter)}
        className={`h-12 w-12 m-3 text-white rounded-md cursor-pointer ${buttonStyle(letter)}`}
        >
        {letter}
        </button>
    )
  })
  // console.log(buttons);
  return(
    <>
        { buttons }
    
    </>
  ) 
}

export default LetterButton;
