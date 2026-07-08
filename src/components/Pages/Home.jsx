import { Link } from "react-router-dom";
import Button from "../Buttons/Buttons";
import { useEffect, useState } from "react";



export function home() {

    const[selectedWord,setslectedWord] = useState('');
    async function fetchWord() {
    let response = await fetch('http://localhost:3000/word');
    let data = await response.json();
    console.log(data);

    const randomIndex = Math.floor(Math.random()*data.length);
    console.log(randomIndex);
    console.log(data[randomIndex].wordValue);
    setslectedWord(data[randomIndex].wordValue);
    
}

useEffect(()=>{
    fetchWord();

},[]);
  return (
    <>
      <Link to="/play" state={{word:selectedWord}}>
        <Button text="Single Player Game " />
      </Link>
      <br />
      <Link to="/start">
        <Button text="MultiPlayer Game" />
      </Link>
    </>
  );
}

export default home;
