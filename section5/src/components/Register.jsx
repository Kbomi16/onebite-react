/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Register() {
  const [name, setName] = useState('이름')
  const [birth, setBirth] = useState('')
  const [country, setCountry] = useState('')
  const [bio, setBio] = useState('')

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeBirth = (e) => {
    setBirth(e.target.value)
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeBio = (e) => {
    setBio(e.target.value)
  }

  return (
    <>
      <div>
        <div>
          <input
            value={name}
            type="text"
            placeholder="이름"
            onChange={onChangeName}
          />
        </div>
      </div>
      <div>
        <input value={birth} type="date" onChange={onChangeBirth} />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </>
  )
}

export default Register
