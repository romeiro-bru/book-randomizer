import './style.css';
import add from '../../assets/images/add.svg';

const url = 'http://books.google.com/books/'

export function CategoryBooks({ books, category, list, setList }) {
  return (
    <>
      <main className="books">
        <ul>
          {category.length === 0 ?
            books === undefined ? [] :
              books.map((book, i) => (
                <li key={i}>
                  <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
                    <img src={`${url}content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
                  </a>
                  <div>
                    <h2 className="book-title">{book.volumeInfo.title}</h2>
                    <p className="book-author">{book.volumeInfo.authors}</p>
                    <p>{book.volumeInfo.pageCount} pages</p>
                    <p className="book-categorie">
                      {book.volumeInfo.categories !== undefined ?
                        book.volumeInfo.categories : 'Others'
                      }
                    </p>
                  </div>
                  <button value={book} onClick={() => setList([...list, book])} className="add">
                    <img src={add} alt="+" />
                  </button>
                </li>
              )
              ) :
            category === undefined ? [] :
              category.map((book, i) => {
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
                    <button value={book} onClick={() => setList([...list, book])} className="add">
                      <img src={add} alt="+" />
                    </button>
                  </li>
                )
              }
              )
          }
        </ul>
      </main>
    </>

  )
}