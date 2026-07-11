import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Buttons/Buttons";
import TextInput from "./components/TextInput/TextInput";
import TextInputForm from "./components/TextInputform/TextInputform";
import TextInputFormContainer from "./components/TextInputform/TextInputformConatiner";
import { Route, Routes } from "react-router-dom";
import StartGame from "./components/Pages/StartGame";
import PlayGame from "./components/Pages/Play";
import Home from "./components/Pages/Home";
import { WordContext } from "./ContextAPI/WordContext";

function App() {
  // const [count, setCount] = useState(0)
  const [wordList,setwordList] = useState([]);
  const[selectedWord,setselectedWord] = useState('');

  return (
    <WordContext.Provider value={{wordList,setwordList,selectedWord,setselectedWord}}>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/start" element={<StartGame />}></Route>
        <Route path="/play" element={<PlayGame />}></Route>
      </Routes>
    </WordContext.Provider>
  );
}

export default App;
