function Display(props) {
  return (
    <div className="display" style={props.theme}>
      <p>{props.numero}</p>
    </div>
  );
}
export default Display;