import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import BookList from './components/Booklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Card />
    <BookList />
    </>
  )
}

export default App
