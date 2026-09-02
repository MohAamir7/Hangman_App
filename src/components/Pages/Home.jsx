import { Link } from "react-router-dom";
import Button from "../Buttons/Buttons";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../../ContextAPI/WordContext";
import{words} from "../../Data/WordData.js";



export function home() {
    const {setselectedWord,setwordList} = useContext(WordContext);

    // const[selectedWord,setslectedWord] = useState('');
    async function fetchWord() {
    // let response = await fetch('http://localhost:3000/word');
    // let data = await response.json();
    let data = [...words];
    console.log(data);
    setwordList([...data]);

    const randomIndex = Math.floor(Math.random()*data.length);
    console.log(randomIndex);
    console.log(data[randomIndex].wordValue);
    setselectedWord(data[randomIndex].wordValue);
    
}

useEffect(()=>{
    fetchWord();

},[]);
  return (
    <>
      <Link to="/play" >
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
