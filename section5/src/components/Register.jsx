/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'

let count = 0

function Register() {
  // const [name, setName] = useState('이름')
  // const [birth, setBirth] = useState('')
  // const [country, setCountry] = useState('')
  // const [bio, setBio] = useState('')

  // const onChangeName = (e) => {
  //   setName(e.target.value)
  // }

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value)
  // }

  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value)
  // }

  // const onChangeBio = (e) => {
  //   setBio(e.target.value)
  // }

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  })

  const countObj = useRef(0)
  const inputRef = useRef()

  const onChange = (e) => {
    count++
    countObj.current++
    console.log(countObj.current)
    console.log(count)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    if (input.name === '') {
      console.log(inputRef.current)
      inputRef.current.focus()
    }
  }

  return (
    <>
      <div>
        {/* <button
          onClick={() => {
            refObj.current++
            console.log(refObj.current)
          }}
        >
          ref+1
        </button> */}
        <div>
          <input
            ref={inputRef}
            name="name"
            value={input.name}
            type="text"
            placeholder="이름"
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  )
}

export default Register
