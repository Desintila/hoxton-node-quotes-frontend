import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Home'
import Random from './pages/RandomQuote'

export type QuoteType = {
  text: string
  author: string
}

function App() {
  const [quotes, setQuotes] = useState<QuoteType[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/quotes')
      .then(resp => resp.json())
      .then(quotes => setQuotes(quotes))
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Homepage quotes={quotes} />} />
        <Route path='/randomquote' element={<Random />} />
      </Routes>
    </div>
  )
}

export default App
