import { getMaskedString } from "./MaskedUtility";

function MaskedText({ text, guessWord }) {
  const maskString = getMaskedString(text, guessWord);
  // console.log(guessWord);
  // console.log(maskString + "its maskedText function");

  return (
    <>
      {maskString.map((el, idx) => {
        return (
          <span key={idx} className="mx-2 text-red-400">
            {el}
          </span>
        )
      })}
    </>
  )
}
export default MaskedText;
