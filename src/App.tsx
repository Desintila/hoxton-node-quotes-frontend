import { useEffect, useState } from 'react'
import './App.css'
import Quote from './components/Quote'

export type QuoteType = {
  text: string
  author: string
}

function App() {
  const [quotes, setQuotes] = useState<QuoteType[]>([])
  useEffect(() => {
    fetch('http://localhost:3001/quotes').then(resp => resp.json()).then(quotes => setQuotes(quotes))
  }, [])

  return (
    <div className="App">
      <h1>Quotes</h1>
      <ul className='quotes-list'>
        {
          quotes.map((quote, index) => <Quote quote={quote} key={index} />)
        }
      </ul>
    </div>
  )
}

export default App
