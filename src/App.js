import './App.css';
import github from './assets/images/github.png';
import { Search } from './Components/Search/Search';
import { Categories } from './Components/Categories/Categories';

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
  return (
    <div className="App">
      <Search />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
