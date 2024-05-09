import React, { useContext, useRef, useState } from 'react'
import './Editor.css'
import { TodoContext } from '../App'

function Editor() {
  const [content, setContent] = useState('')
  const contentRef = useRef()
  const { onCreate } = useContext(TodoContext)

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  }

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        placeholder="새로운 Todo..."
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
