import './style.css';
import imgnotavailable from '../../assets/images/imgnotavailable.png';

export function BookList({ list }) {
  return (
    <section className="books-list">
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <img src={item.volumeInfo.imageLinks.smallThumbnail !== undefined ?
              item.volumeInfo.imageLinks.smallThumbnail : { imgnotavailable }
            } alt="" />
            {item.volumeInfo.title}
          </li>
        ))}
      </ul>
    </section>
  )
}