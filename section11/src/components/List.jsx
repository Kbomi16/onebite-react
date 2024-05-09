import React, { useContext, useMemo, useState } from 'react'
import './List.css'
import TodoItem from './TodoItem'
import { TodoContext } from './../App'

function List() {
  const { todos } = useContext(TodoContext)

  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search === '') {
      return todos
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  // const getAnalyzedDate = () => {}

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalyzedDate 호출')
    const totalCount = todos.length
    const doneCount = todos.filter((todo) => todo.isDone).length
    const notDoneCount = totalCount - doneCount

    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos])

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedDate()

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {getFilteredData().map((todo) => {
          return <TodoItem key={todo.id} {...todo} />
        })}
      </div>
    </div>
  )
}

export default List
