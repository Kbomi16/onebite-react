// import Button from './components/Button'
// import Header from './components/Header'

import { useState } from 'react'

// const buttonProps = {
//   text: '메일',
//   color: 'red',
//   a: 1,
//   b: 2,
//   c: 3,
// }

// function App() {
//   return (
//     <>
//       <Button {...buttonProps} />
//       <Button text={'카페'} />
//       <Button text={'블로그'}>
//         <div>자식요소</div>
//         <Header />
//       </Button>
//     </>
//   )
// }

// export default App

function App() {
  const [state, setState] = useState(0)
  const [light, setLight] = useState('OFF')

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON')
          }}
        >
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
      </div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState(state + 1)
        }}
      >
        +
      </button>
    </>
  )
}

export default App

