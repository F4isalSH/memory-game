import './SingleCard.css'
export default function SingleCard({card, handleChoice, flipped}) {

    return (
        <div className='card'>
          <div className={flipped ? 'flipped' : ''}>
            <img className='front' src={card.src} alt="front card" />
           <img className='back' src='/img/cover.png' onClick={() => handleChoice(card)}  alt="back card" />
          </div>
        </div>
    )
}
