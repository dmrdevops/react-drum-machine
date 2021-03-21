import React from 'react';
import Power from './Controls/Power';
import Bank from './Controls/Bank';
import Volume from './Controls/Volume';

const Controls = (props) => {
    return (
      <div className="controls-container">
        <Power
          powerState={props.powerState}
          pwrToggle={props.pwrToggle}
          />
        <Bank
          changeSoundBank={props.changeSoundBank} 
          kitSelected={props.kitSelected} />
        <Volume
          changeVolume={props.changeVolume}
          currentVolume={props.currentVolume} />
      </div>
    )
}

export default Controls