import { useEffect, useState } from 'react';
import axios from 'axios';

const api = 'https://www.googleapis.com/books/v1/volumes';


const bookLibrary = [{
  fantasy: [
    { title: 'As Brumas de Avalon', id: 'rDE5DwAAQBAJ' },
    { title: 'The lies of Locke Lamora', id: '8vv-XGDQKR4C' },
    { title: 'The Hobbit', id: 'pD6arNyKyi8C' },
    { title: 'Six of Crows', id: 'OxWkDAAAQBAJ' }
  ],
  fiction: [
    { title: 'Admirável mundo novo', id: 'FfX-AgAAQBAJ' },
    { title: 'Duna', id: 'q82uCgAAQBAJ' },
    { title: 'Neuromancer', id: 'C8muCgAAQBAJ' },
    { title: 'Around the world in 80 days', id: 'FGEVDAAAQBAJ' }
  ],
  romance: [
    { title: 'Teto para dois', id: 'ZJCqDwAAQBAJ' },
    { title: 'Amor e Gelato', id: 'R9QnDwAAQBAJ' },
    { title: 'Verity', id: 'uI3PDwAAQBAJ' },
    { title: 'Orgulho e Preconceito', id: 'FggVEAAAQBAJ' }
  ]
}]

const fantasy = [
  { title: 'As Brumas de Avalon', id: 'rDE5DwAAQBAJ' },
  { title: 'The lies of Locke Lamora', id: '8vv-XGDQKR4C' },
  { title: 'The Hobbit', id: 'pD6arNyKyi8C' },
  { title: 'Six of Crows', id: 'OxWkDAAAQBAJ' }
]

export function BookLibrary() {
  const [library, setLibrary] = useState([])
  console.log(1, library)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(`${api}/rDE5DwAAQBAJ`)
      setLibrary(response.data.id)
      console.log(2, response)
    }
    fetchBooks()
  }, [])

  return (
    <div>
      {library}
      {
        fantasy.map((category, i) => (
          < p key={i} >{category.title}</p>
        ))
      }
    </div >
  )
}