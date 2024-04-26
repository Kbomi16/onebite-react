/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import useInput from '../hooks/useInput'



function HookExam() {
  const [input, onChange] = useInput()

  return (
    <div>
      <hr />
      <h1>HookExam</h1>
      <input value={input} onChange={onChange} />
    </div>
  )
}

export default HookExam
