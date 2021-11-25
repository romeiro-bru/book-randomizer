import './App.css';
import github from './assets/images/github.png';
import { Categories } from './Components/Categories/Categories';
import { Books } from './Components/Books/Books';
import { useState } from 'react';
import axios from 'axios';


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

  const fetchBooks = async () => {
    const response = await axios.get(`${url}?q=${search}`)
    setBooks(response.data.items)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    fetchBooks()
  }

  return (
    <div className="App">
      <form className="search-box">
        <input onChange={handleChange} type="text" placeholder="Search" />
      </form>

      <Categories />
      <Books books={books} />
      <Footer />
    </div>
  );
}

export default App;
