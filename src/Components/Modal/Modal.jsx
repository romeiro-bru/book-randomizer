import './style.css';
import dices from '../../assets/images/dices.svg';

export function Modal({ handleClick, bookTitle, bookImg }) {
  return (
    <>
      <div>
        <a onClick={handleClick} className="randomize-btn" href="#open-modal">Randomize</a>
      </div>

      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" className="modal-close">X</a>
          <p>
            <img src={dices} alt="dices" />
            Your next reading is..
          </p>
          <h1>
            {bookTitle !== undefined ? bookTitle : 'Select a category or Make your list.'}
          </h1>
          <img src={bookImg} alt="cover" />
        </div>
      </div>
    </>
  )
}