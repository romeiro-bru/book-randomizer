import { useState } from 'react';
import axios from 'axios';
import './style.css';
// import loading from '../../assets/images/loading.png';
import { Books } from '../Books/Books';

const url = 'https://www.googleapis.com/books/v1/volumes';

export function Search() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  // const [hiddenSpin, setHiddenSpin] = useState(true)

  const fetchBooks = async () => {
    const response = await axios.get(`${url}?q=${search}`)
    setBooks(response.data.items)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    fetchBooks()
  }

  return (
    <section className="container">
      <form className="search-box">
        <input onChange={handleChange} type="text" placeholder="Search" />
      </form>

      {/* <img hidden={hiddenSpin} src={loading} className="spin" alt="loading..." /> */}
      <Books books={books} />
    </section>
  );
}