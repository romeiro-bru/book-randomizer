import { useState } from 'react';
import axios from 'axios';
import './style.css';
import fantasy from '../../assets/images/wizard.png';
import fiction from '../../assets/images/ufo.png';
import romance from '../../assets/images/talk.png';
import poetry from '../../assets/images/poetry.png';
// import loading from '../../assets/images/loading.png';

import { Books } from '../Books/Books';

const bookCategories = [
  { name: 'fantasy', img: fantasy },
  { name: 'fiction', img: fiction },
  { name: 'romance', img: romance },
  { name: 'poetry', img: poetry }
]
const api = 'https://www.googleapis.com/books/v1/volumes';

export function Search() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  // const [hiddenSpin, setHiddenSpin] = useState(true)

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
    <section className="container">
      <form className="search-box">
        <input onChange={handleChange} type="text" placeholder="Search" />
      </form>

      <menu className="genres">
        {
          bookCategories.map((category, i) => (
            <button key={i} value={category.name} onClick={handleClick}>
              <img src={category.img} alt="img" />
              {category.name}
            </button>
          ))}
      </menu>

      {/* <img hidden={hiddenSpin} src={loading} className="spin" alt="loading..." /> */}
      <Books books={books} />
    </section>
  );
}