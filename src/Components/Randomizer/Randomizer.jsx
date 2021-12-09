import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './style.css';
import dices from '../../assets/images/dices.svg';


export function Randomizer({ category, list }) {
  const [randomized, setRandomized] = useState([])

  const randomize = () => {
    return category !== undefined ?
      category[Math.floor(Math.random() * category.length)].volumeInfo : []
  }
  const handleClick = () => {
    setRandomized(randomize)
  }

  return (
    <div className="randomize tooltip">
      <Modal handleClick={handleClick}
        bookImg={randomized.imageLinks !== undefined ? randomized.imageLinks.thumbnail : ""}
        bookTitle={randomized.title !== undefined ? randomized.title : 'Select a category or Make your list.'} />
      <p className="tooltiptext">
        Generate your next reading!
        <img src={dices} alt="dices" />
      </p>
    </div>
  )
}