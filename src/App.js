import './App.css'
import { useState } from 'react'
function App() {
  const cardImages = [
    {"src" : "../img/helmet-1.png"},
    {"src" : "../img/helmet-1.png"},
    {"src" : "../img/helmet-1.png"},
    {"src" : "../img/helmet-1.png"},
    {"src" : "../img/helmet-1.png"},
    {"src" : "../img/helmet-1.png"}
  ]

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState()
  const shuffleCards = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))
    setCards(shuffleCards)
    setTurns(0)
  }
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
