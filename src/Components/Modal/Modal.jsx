import './style.css';
import dices from '../../assets/images/dices.svg';

export function Modal() {
  return (
    <>
      <div className="container">
        <div className="interior">
          <a className="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
        </div>
      </div>

      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">X</a>
          <h1>Voilà!</h1>
          <img src={dices} alt="dices" />
          <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
        </div>
      </div>
    </>
  )
}