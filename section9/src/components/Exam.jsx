import React from 'react'
import { useReducer } from 'react'

// reducer: 상태를 실제로 변화시키는 변환기
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + action.data
    case 'DECREASE':
      return state - action.data
    default:
      return state
  }
}

function Exam() {
  // dispatch: 상태 변화가 있어야 한다는 사실을 알리는 함수
  const [state, dispatch] = useReducer(reducer, 0)

  const onClickPlus = () => {
    // action: 상태가 어떻게 변화되길 원하는지
    dispatch({
      type: 'INCREASE',
      data: 1,
    })
  }

  const onClickMinus = () => {
    // action: 상태가 어떻게 변화되길 원하는지
    dispatch({
      type: 'DECREASE',
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam
