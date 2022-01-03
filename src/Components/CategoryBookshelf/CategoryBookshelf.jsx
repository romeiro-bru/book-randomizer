import './style.css';
import remove from '../../assets/images/x.png';

const url = 'http://books.google.com/books/'

export function CategoryBookshelf({ list, setList }) {
  const handleRemoveBook = (book) => {
    setList(list.filter((el) => el !== book))
  }

  return (
    <>
      <main className="books category-bookshelf">
        <ul>
          {list === undefined ? [] :
            list.map((book, i) => {
              return (
                <li key={i}>
                  <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
                    <img src={`${url}content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
                  </a>
                  <div>
                    <h2 className="book-title">{book.volumeInfo.title}</h2>
                    <p className="book-author">{book.volumeInfo.authors}</p>
                    <p>
                      {book.volumeInfo.pageCount !== undefined ?
                        book.volumeInfo.pageCount : '120'
                      } pages
              </p>
                    <p className="book-categorie">
                      {book.volumeInfo.categories !== undefined ?
                        book.volumeInfo.categories : 'Others'
                      }
                    </p>
                  </div>
                  <button id="btn-remove-book" onClick={() => handleRemoveBook(book)}>
                    <img src={remove} alt="x" />
                  </button>
                </li>
              )
            }
            )}
        </ul>
      </main>
    </>
  )
}