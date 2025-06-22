import { Scores } from './components/scores'
import { CardBoard } from './components/cardBoard'
import './App.css'
import { useState } from 'react'

function App() {
const [currentScore, setCurrentScore] = useState(0)
const [bestScore, setBestScore] = useState(0)


 return <>
 <h1>Memory Game</h1>
 <p>Get points by clicking on an Image</p>
 <p>Game Over if you click an Image Twice</p>
 <p>You win when your score hits 10</p>
 <Scores currentScore={currentScore} bestScore={bestScore} />
 <CardBoard currentScore={currentScore} setCurrentScore={setCurrentScore} bestScore={bestScore} setBestScore={setBestScore} />
 </>
}

export default App
