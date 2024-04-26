/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Register() {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  })

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

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div>
        <div>
          <input
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
    </>
  )
}

export default Register
