import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Buttons/Buttons'
import TextInput from './components/TextInput/TextInput'
import TextInputForm from './components/TextInputform/TextInputform'
import TextInputFormContainer from './components/TextInputform/TextInputformConatiner'
import { Route, Routes } from 'react-router-dom'
import StartGame from './components/Pages/StartGame'
import PlayGame from './components/Pages/Play'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element ={<StartGame/>}></Route>
      <Route path='/start' element={<StartGame/>}></Route>
      <Route path='/play' element = {<PlayGame/>}></Route>
      
    </Routes>
  )
}

export default App
