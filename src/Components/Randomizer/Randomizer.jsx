import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './style.css';

export function Randomizer({ category }) {
  const [randomized, setRandomized] = useState('')

  const randomize = () => {
    return category.length !== 0 ?
      category[Math.floor(Math.random() * category.length)].volumeInfo.title
      : 'Select a category'
  }

  const handleClick = () => {
    setRandomized(randomize)
  }

  return (
    <div className="randomize tooltip">
      <button onClick={handleClick}>Randomize</button>
      <span className="tooltiptext">Pick a genre or make a list</span>

      <p>{randomized}</p>
      <Modal />
    </div>
  )
}