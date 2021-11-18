import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { loading } from '../../assets/images/loading.png';

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
  console.log(books)

  // validação thumb

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Search" />

      <section className="books">
        {books.map((book, i) => {
          return (
            <ul>
              <li key={i}>{book.volumeInfo.title}</li>
              <p>{book.volumeInfo.categories}</p>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="cover" />
            </ul>
          )
        })}
      </section>
    </div>
  );
}