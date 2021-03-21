import { render } from "@testing-library/react"
import React from 'react'
import Knob from './Knob'

const Power = (props) => {
  const powerKnob =
  props.powerState
  ? { transform: 'rotate(135deg)' }
  : { transform: 'rotate(45deg)' };

  const powerColor = 
  props.powerState
  ? { color: '#11fa4f',
      webkitTextStrokeWidth: '1px',
      webkitTextStrokeColor: 'black' }
  : { color: 'black' }
  return (
    <div className="control-power" >
      <div style={powerColor}>Power</div>
      <Knob handleClick={props.pwrToggle} handleStyle={powerKnob} />
    </div>
  )
}

export default Power