import './App.css'
import { useState, useEffect } from 'react'
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

  //Use state variable section
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState()

  const [firstChoice, setFirstChoice] = useState(null)
  const [secondChoice, setSecondChoice] = useState(null)

  //Function section

  const newGame = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=> ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }

  const resetTurn = () =>{
    setFirstChoice(null)
    setSecondChoice(null)
    setTurns(prevTurns => prevTurns + 1)
  }



  useEffect(() => {
    if(firstChoice && secondChoice){
      if(firstChoice.src === secondChoice.src){
        console.log('They are the same')
        resetTurn()
      }else{
        console.log('They are not the same')
        resetTurn()
      } 
    } 
  }, [firstChoice, secondChoice])

  const handleChoice = card =>{
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={newGame}>New Game</button>
      <div className='grid'>
      {cards.map(card =>(
        <SingleCard key = {card.id} card = {card} handleChoice = {handleChoice}/>
      ))}
    </div>
      </div>
  );
}

export default App;
