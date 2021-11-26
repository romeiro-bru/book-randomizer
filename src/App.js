import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Categories } from './Components/Categories/Categories';
import { Books } from './Components/Books/Books';
import { Randomizer } from './Components/Randomizer/Randomizer';
import github from './assets/images/github.png';

const url = 'https://www.googleapis.com/books/v1/volumes';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/romeiro-bru/random-book-selector" target="_blank" rel="noopener noreferrer">
        <img className="github" src={github} alt="icon" />
      </a>
    </footer>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const [category, setCategory] = useState([])
  const [hide, setHide] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${url}?q=${search}`);
        setBooks(response.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value)
    setHide(false)
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

      <aside>
        <Categories handleClick={handleClick} />
        <Randomizer category={category} />
      </aside>
      <Books hide={hide} books={books} category={category} />
      <Footer />
    </div>
  );
}

export default App;