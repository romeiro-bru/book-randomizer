import './style.css';

export function BookList({ list }) {
  return (
    <section className="books-list">
      {list.map((item, i) => (
        <ul key={i}>
          <li>
            <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
            {item.volumeInfo.title}
          </li>
        </ul>
      ))}
    </section>
  )
}