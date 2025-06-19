import { Scores } from './components/scores'
import { CardBoard } from './components/cardBoard'
import './App.css'

function App() {
 return <>
 <h1>Memory Game</h1>
 <p>Get points by clicking on an Image</p>
 <p>Game Over if you click an Image Twice</p>
 <Scores />
 <CardBoard />
 </>
}

export default App
