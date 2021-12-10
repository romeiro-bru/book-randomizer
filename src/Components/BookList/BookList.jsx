import './style.css';
const url = 'http://books.google.com/books/'

export function BookList({ list }) {
  return (
    <section className="books-list">
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            <img src={`${url}content?id=${item.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
            {item.volumeInfo.title}
          </li>
        ))}
      </ul>
    </section>
  )
}