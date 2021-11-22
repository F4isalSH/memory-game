import './App.css'
import { useState } from 'react'
import SingleCard from './components/SingleCard'
function App() {
  const cardImages = [
    {"src" : "/img/helmet-1.png"},
    {"src" : "/img/potion-1.png"},
    {"src" : "/img/ring-1.png"},
    {"src" : "/img/scroll-1.png"},
    {"src" : "/img/shield-1.png"},
    {"src" : "/img/sword-1.png"}
  ]

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState()
  const newGame = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={newGame}>New Game</button>
      <div className='grid'>
      {cards.map(card =>(
        <SingleCard key = {card.id} card = {card}/>
      ))}
    </div>
      </div>
  );
}

export default App;
