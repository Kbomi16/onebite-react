import React, { useRef, useState } from 'react'
import './Editor.css'

function Editor({ onCreate }) {
  const [content, setContent] = useState('')
  const contentRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus()
      return
    }
    onCreate()
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
