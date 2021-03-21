import { render } from "@testing-library/react"
import React from 'react'

const Power = (props) => {
 const powerSlider = 
    props.powerState
    ? {
      float: 'right'
      }
    : {
      float: 'left'
    }
    return (
      <div className="control-power">
        <div>Power</div>
        <div className="selector" onClick={props.pwrToggle} >
        <div className='inner' style={powerSlider} />
        </div>
      </div>
    )
}

export default Power