import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './style.css';

export function Randomizer({ category }) {
  const [randomized, setRandomized] = useState('')

  const randomize = () => {
    return category.length !== 0 &&
      category[Math.floor(Math.random() * category.length)].volumeInfo
  }

  const handleClick = () => {
    setRandomized(randomize)
  }

  return (
    <div className="randomize tooltip">
      <Modal handleClick={handleClick}
        bookImg={randomized.imageLinks !== undefined ? randomized.imageLinks.thumbnail : ""}
        bookTitle={randomized.title !== undefined ? randomized.title : 'Select a category or Make your list.'} />
      <p className="tooltiptext">Select a category or list and click here to generate your next reading!</p>
    </div>
  )
}