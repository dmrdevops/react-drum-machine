import React from 'react'
import Knob from './Knob'

export default function Power(props) {
  const powerKnob =
  props.powerOn
  ? { transform: 'rotate(135deg)' }
  : { transform: 'rotate(45deg)' };

  const powerColor = 
  props.powerOn
  ? { color: '#11fa4f',
      webkitTextStrokeWidth: '1px',
      webkitTextStrokeColor: 'black' }
  : { color: 'black' }
  return (
    <div className="control-power" >
      <div style={powerColor}>Power</div>
      <Knob handleClick={props.powerToggle} handleStyle={powerKnob} />
    </div>
  )
}