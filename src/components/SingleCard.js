import './SingleCard.css'
export default function SingleCard({card, handleChoice}) {

    return (
        <div className='card'>
          <img className='front' src={card.src} alt="front card" />
          <img className='back' src='/img/cover.png' onClick={() => handleChoice(card)}  alt="back card" />
        </div>
    )
}
