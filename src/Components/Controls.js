import React from 'react';
import Power from './Controls/Power';
import Bank from './Controls/Bank';
import Volume from './Controls/Volume';

const Controls = (props) => {
    return (
      <div className="controls-container">
        <Power
          powerOn={props.powerOn}
          powerToggle={props.powerToggle}
          />
        <Bank
          changeBank={props.changeBank} 
          kitSelected={props.kitSelected} 
          powerOn={props.powerOn} />
        <Volume
          changeVolume={props.changeVolume}
          currentVolume={props.currentVolume}
          powerOn={props.powerOn} />
      </div>
    )
}

export default Controls