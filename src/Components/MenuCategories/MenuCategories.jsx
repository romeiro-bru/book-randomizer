import './style.css';

import fantasy from '../../assets/images/wizard.png';
import fiction from '../../assets/images/ufo.png';
import romance from '../../assets/images/talk.png';
import poetry from '../../assets/images/poetry.png';

const bookCategories = [
  { name: 'fantasy', img: fantasy },
  { name: 'fiction', img: fiction },
  { name: 'romance', img: romance },
  { name: 'poetry', img: poetry }
]

export function MenuCategories({ handleClick }) {
  return (
    <>
      <menu className="genres">
        {
          bookCategories.map((category, i) => (
            <button key={i} value={category.name} onClick={handleClick}>
              <img src={category.img} alt="img" />
              {category.name}
            </button>
          ))}
      </menu>
    </>
  )
}