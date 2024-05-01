import React, { memo } from 'react'
import './TodoItem.css'

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
  const onChangeCheckbox = () => {
    onUpdate(id)
  }

  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// 고차 컴포넌트(HOC)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라 props가 바꼈는지 안바꼈는지 판단
  // T -> props 안 바뀜 -> 리렌더링 X
  // F -> props 바뀜 -> 리렌더링 o
  
  if(prevProps.id !== nextProps.id) return false
  if(prevProps.isDone !== nextProps.isDone) return false
  if(prevProps.content !== nextProps.content) return false
  if(prevProps.date !== nextProps.date) return false

  return true
})
