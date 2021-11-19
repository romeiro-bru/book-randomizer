import { useState } from 'react';
import axios from 'axios';
import './style.css';
import mag from '../../assets/images/search.png';
import fantasy from '../../assets/images/wizard.png';
import fiction from '../../assets/images/ufo.png';
import romance from '../../assets/images/talk.png';
import poetry from '../../assets/images/poetry.png';

const api = 'https://www.googleapis.com/books/v1/volumes'

export function Search() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get(`${api}?q=${search}`)
    setBooks(response.data.items)
  }
  const handleChange = (e) => {
    setSearch(e.target.value)
    fetchBooks()
  }
  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form>
        <div className="search-box">
          <input onChange={handleChange} type="text" placeholder="Search" />
          <img src={mag} alt="search" />
        </div>
      </form>

      <aside className="genres">
        <button onClick={handleClick} value="fantasy">
          <img src={fantasy} alt="img" />
              Fantasy
        </button>
        <button onClick={handleClick} value="fiction">
          <img src={fiction} alt="img" />
              Fiction
        </button>
        <button onClick={handleClick} value="romance">
          <img src={romance} alt="img" />
            Romance
        </button>
        <button onClick={handleClick} value="poetry">
          <img src={poetry} alt="img" />
            Poetry
        </button>
      </aside>

      <section className="books">
        {books.map((book, i) => {
          return (
            <ul>
              <li key={i}>
                <p>{book.volumeInfo.title}
                </p>
                <p>{book.volumeInfo.categories}</p>
                <img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
              </li>
            </ul>
          )
        })}
      </section>
    </div>
  );
}