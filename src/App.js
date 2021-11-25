import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Categories } from './Components/Categories/Categories';
import { Books } from './Components/Books/Books';
import github from './assets/images/github.png';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/romeiro-bru/random-book-selector" target="_blank" rel="noopener noreferrer">
        <img className="github" src={github} alt="icon" />
      </a>
    </footer>
  )
}
const url = 'https://www.googleapis.com/books/v1/volumes';

function App() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const [category, setCategory] = useState([])
  const [hide, setHide] = useState(true)

  const fetchBooks = async () => {
    const response = await axios.get(`${url}?q=${search}`)
    setBooks(response.data.items)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    setHide(false)
    fetchBooks()
  }

  const handleClick = (e) => {
    setHide(true)
    const fetchCategory = async () => {
      const response = await axios.get(`${url}/?q=subject:${e.target.value}`)
      setCategory(response.data.items)
    }
    fetchCategory()
  }

  return (
    <div className="App">
      <form className="search-box">
        <input onChange={handleChange} type="text" placeholder="Search" />
      </form>

      <Categories handleClick={handleClick} />
      <Books hide={hide} books={books} category={category} />
      <Footer />
    </div>
  );
}

export default App;