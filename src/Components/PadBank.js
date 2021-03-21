import React from 'react';
import DrumPad from "./DrumPad";

const PadBank = (props) => {
    let kitArray = props.currentKit.map((currentKit) => {
      return (
        <DrumPad
          clip={currentKit.url}
          clipId={currentKit.id}
          key={currentKit.id.toString()}
          keyCode={currentKit.keyCode}
          keyTrigger={currentKit.keyTrigger}
          powerState={props.powerState}
          updateDisplay={props.updateDisplay}
        />
      )
    })
    return (
      <div className="pad-bank">{kitArray}</div>
    )
  
}

export default PadBank