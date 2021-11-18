import { useState } from 'react';
import axios from 'axios';
import './style.css';

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

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Search" />

      <section className="books">
        {books.map((book, i) => {
          return (
            <ul>
              <li key={i}>{book.volumeInfo.title}</li>
            </ul>
          )
        })}
      </section>
    </div>
  );
}