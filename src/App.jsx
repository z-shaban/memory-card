import { Scores } from './components/scores'
import { CardBoard } from './components/cardBoard'
import './App.css'
import { useState } from 'react'

function App() {
const [score, setScore] = useState([0 ,3,1])


 return <>
 <h1>Memory Game</h1>
 <p>Get points by clicking on an Image</p>
 <p>Game Over if you click an Image Twice</p>
 <Scores score={score} />
 <CardBoard />
 </>
}

export default App
