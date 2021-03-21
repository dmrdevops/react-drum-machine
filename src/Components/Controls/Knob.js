
const Knob = (props) => {
  return (
    <div className='knob' onClick={props.handleClick} >
        <div className='indicator' style={props.handleStyle}/>
      </div>
  )
}

export default Knob