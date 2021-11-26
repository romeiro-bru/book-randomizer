import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './style.css';

export function Randomizer({ category }) {
  const [randomized, setRandomized] = useState('')

  const randomize = () => {
    return category.length !== 0 ?
      category[Math.floor(Math.random() * category.length)].volumeInfo.title
      : 'Select a category or Make your list'
  }

  const handleClick = () => {
    setRandomized(randomize)
  }

  return (
    <div className="randomize tooltip">
      <Modal handleClick={handleClick} randomized={randomized} />
      <span className="tooltiptext">Pick a genre or make a list</span>
    </div>
  )
}