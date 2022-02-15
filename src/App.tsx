import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Home'
import Random from './pages/RandomQuote'
import QuoteDetails from './pages/QuoteDetails'
import Header from './components/Header'
import NewQuote from './pages/NewQuote'
import { QuoteType } from './Types/type'



function App() {
  const [quotes, setQuotes] = useState<QuoteType[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/quotes')
      .then(resp => resp.json())
      .then(quotes => setQuotes(quotes))
  }, [])


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<Homepage quotes={quotes} setQuotes={setQuotes} />} />
        <Route path='/randomquote' element={<Random />} />
        <Route path='/home/:id' element={<QuoteDetails />} />
        <Route path='/addquote' element={<NewQuote quotes={quotes} setQuotes={setQuotes} />} />
      </Routes>
    </div>
  )
}

export default App
