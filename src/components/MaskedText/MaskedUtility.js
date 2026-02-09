
export function getMaskedString(OriginalWord,guessedWord) {
    guessedWord = guessedWord.map((letter)=> letter.toUpperCase());

      const guessedWordLetter = new Set(guessedWord);

        const result = OriginalWord.toUpperCase().split('').map((char)=>{

            if(guessedWordLetter.has(char)){
                // console.log(char)
                return char;
            }else{
                return '_';
            }
        })
        // console.log(typeof result);

        return result;
    
}