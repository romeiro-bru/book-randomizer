import './style.css';
import dices from '../../assets/images/dices.svg';

export function Modal({ handleClick, randomized }) {
  return (
    <>
      <div>
        <a onClick={handleClick} className="randomize-btn" href="#open-modal">Randomize</a>
      </div>

      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" className="modal-close">X</a>
          <h3>
            <img src={dices} alt="dices" />
            Your next reading is..
          </h3>
          <h1>{randomized}!</h1>
        </div>
      </div>
    </>
  )
}