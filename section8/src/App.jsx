import React, { useRef, useState } from 'react'
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
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  )
}

export default App
