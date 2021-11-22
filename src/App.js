import './App.css'
import { useState } from 'react'
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
  const shuffleCards = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards)
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='grid'>
      {cards.map(card =>(
        <div key = {card.id}>
          <img src={card.src} alt="card element" />
          <img src='/img/cover.png' alt="" />
        </div>
      ))}
    </div>
      </div>
  );
}

export default App;
