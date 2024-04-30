import React, { useState } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: '',
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
