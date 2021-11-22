import './style.css';

export function Books({ books }) {
  return (
    <main className="books">
      {books.map((book, i) => {
        return (
          <ul key={i}>
            <li>
              <img src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} alt="cover" />
              <div>
                <h2 className="book-title">{book.volumeInfo.title}</h2>
                <p className="book-author">{book.volumeInfo.authors}</p>
                <p>{book.volumeInfo.pageCount} pages</p>
                <p className="book-categorie">
                  {book.volumeInfo.categories !== undefined ?
                    book.volumeInfo.categories : 'Others'
                  }
                </p>
              </div>
            </li>
          </ul>
        )
      })}
    </main>
  )
}