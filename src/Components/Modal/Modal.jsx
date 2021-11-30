import './style.css';

export function Modal({ handleClick, bookTitle, bookImg }) {
  return (
    <>
      <div>
        <a onClick={handleClick} className="randomize-btn" href="#open-modal">Randomize</a>
      </div>

      <div id="open-modal" className="modal-window">
        <div>
          <a href="/#" className="modal-close">X</a>
          <p>
            Your next reading is..
          </p>
          <h1>
            {bookTitle}
          </h1>
          <img src={bookImg} alt="cover" />
        </div>
      </div>
    </>
  )
}