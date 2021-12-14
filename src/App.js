import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MenuCategories } from './Components/MenuCategories/MenuCategories';
import { CategoryBooks } from './Components/CategoryBooks/CategoryBooks';
import { BooksResult } from './Components/BooksResult/BooksResult';
import { Randomizer } from './Components/Randomizer/Randomizer';
import { BookList } from './Components/BookList/BookList';
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
  const [search, setSearch] = useState('top books')
  const [books, setBooks] = useState([])
  const [category, setCategory] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${url}?q=${search}`);
        setBooks(response.data.items);
        setCategory([])
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks();
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = (e) => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${url}/?q=subject:${e.target.value}`)
        setCategory(response.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategory();
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  return (
    <div className="App">
      <form className="search-box">
        <input onChange={handleChange} type="text" placeholder="Search books by name or author" />
      </form>
      <aside>
        <MenuCategories handleClick={handleClick} />
        <Randomizer category={category} list={list} />
        {list.length > 0 ? <BookList list={list.filter(onlyUnique)} /> : ""}
      </aside>

      {category.length === 0 ?
        <BooksResult list={list.filter(onlyUnique)} setList={setList} books={books} />
        : <CategoryBooks list={list.filter(onlyUnique)} setList={setList} category={category} />
      }
      <Footer />
    </div>
  );
}

export default App;