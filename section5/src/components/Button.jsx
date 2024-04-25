/* eslint-disable react/prop-types */
// function Button(props) {
//   console.log(props)
//   return (
//     <div>
//       <button style={{ color: props.color }}>
//         {props.text} - {props.color.toUpperCase()}
//       </button>
//     </div>
//   )
// }

// Button.defaultProps = {
//   color: "black"
// }

// export default Button

function Button({ text, color, children }) {
  const onClickButton = (e) => {
    console.log(e)
    console.log(text)
  }
  return (
    <div>
      <button
        style={{ color: color }}
        onClick={onClickButton}
        // onMouseEnter={onClickButton}

      >
        {text} - {color.toUpperCase()}
        {children}
      </button>
    </div>
  )
}

Button.defaultProps = {
  color: 'black',
}

export default Button
