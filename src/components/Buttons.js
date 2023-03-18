function Buttons (props) {
  return (
    <div className="buttons" style={props.theme}>
      <button style={props.theme.button} onClick={props.onClick} value="7">7</button>
      <button style={props.theme.button} onClick={props.onClick} value="8">8</button>
      <button style={props.theme.button} onClick={props.onClick} value="9">9</button>
      <button style={props.theme.buttonDel} onClick={props.onClick} value="del">DEL</button>
      <button style={props.theme.button} onClick={props.onClick} value="4">4</button>
      <button style={props.theme.button} onClick={props.onClick} value="5">5</button>
      <button style={props.theme.button} onClick={props.onClick} value="6">6</button>
      <button style={props.theme.button} onClick={props.onClick} value="+">+</button>
      <button style={props.theme.button} onClick={props.onClick} value="1">1</button>
      <button style={props.theme.button} onClick={props.onClick} value="2">2</button>
      <button style={props.theme.button} onClick={props.onClick} value="3">3</button>
      <button style={props.theme.button} onClick={props.onClick} value="-">-</button>
      <button style={props.theme.button} onClick={props.onClick} value=".">.</button>
      <button style={props.theme.button} onClick={props.onClick} value="0">0</button>
      <button style={props.theme.button} onClick={props.onClick} value="/">/</button>
      <button style={props.theme.button} onClick={props.onClick} value="*">*</button>
      <button style={props.theme.buttonReset} onClick={props.onClick} value="reset">RESET</button>
      <button style={props.theme.buttonEqual} onClick={props.onClick} value="=">=</button>
    </div>
  )
}

export default Buttons