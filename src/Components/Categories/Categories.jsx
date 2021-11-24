import { useState } from 'react';
import axios from 'axios';
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
const url = 'https://www.googleapis.com/books/v1/volumes';

export function Categories() {
  const [category, setCategory] = useState([])

  const handleClick = (e) => {
    const fetchCategory = async () => {
      const response = await axios.get(`${url}/?q=subject:${e.target.value}`)
      setCategory(response.data.items)
    }
    fetchCategory()
  }

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

      <main className="books">
        {category.map((book, i) => {
          return (
            <ul key={i}>
              <li>
                <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">
                  <img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
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
              </li>
            </ul>
          )
        })}
      </main>
    </>
  )
}