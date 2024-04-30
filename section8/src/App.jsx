import React, { useRef, useState } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './App.css'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData)
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

  const onUpdate = (targetId) => {
    // todos state 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone변경
    setTodos(todos.map((todo) => {
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo
    }))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  )
}

export default App
