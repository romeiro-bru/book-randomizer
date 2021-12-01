import { useState } from 'react';
import './style.css';
import add from '../../assets/images/add.svg';

const url = 'http://books.google.com/books/'

export function Books({ books, category, hide }) {
  const [list, setList] = useState([])

  const handleAddToList = (book) => {
    setList([...list, book])
  }
  console.log(list)

  return (
    <>
      <main className="books">
        {
          books === undefined ? [] :
            books.map((book, i) => {
              return (
                <ul hidden={hide} key={i}>
                  <li>
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
                    <button value={book} onClick={() => handleAddToList(book)} className="add">
                      <img src={add} alt="+" />
                    </button>
                  </li>
                </ul>
              )
            })
        }

        {
          category === undefined ? [] :
            category.map((book, i) => {
              return (
                <ul hidden={!hide} key={i}>
                  <li>
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
                    <button value={book} onClick={() => handleAddToList(book)} className="add">
                      <img src={add} alt="+" />
                    </button>
                  </li>
                </ul>
              )
            })
        }
      </main>
    </>

  )
}