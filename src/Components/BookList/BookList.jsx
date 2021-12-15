import './style.css';
import remove from '../../assets/images/x.png';

const url = 'http://books.google.com/books/'

export function BookList({ list, setList }) {
  const handleRemoveBook = (book) => {
    setList(list.filter((el) => el !== book))
  }

  return (
    <section className="books-list">
      <ul>
        {list.map((book, i) => (
          <li key={i}>
            <button onClick={() => handleRemoveBook(book)}>
              <img src={remove} alt="x" />
            </button>
            <img src={`${url}content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
            {book.volumeInfo.title}
          </li>
        ))}
      </ul>
    </section>
  )
}