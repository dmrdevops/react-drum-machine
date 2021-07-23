import { useState } from "react";

export default function DrumPad(props) {
  const [activePad, setActivePad] = useState(false);

  // Figure out animation reset

  const playing = {
    transform: 'scale(1.1)',
    'border-color': '#ffc600',
    'box-shadow': '0 0 1rem #ffc600'
  }
  
  return (
    <div
      className='drum-pad'
      id={props.keyTrigger}
      style={ activePad ? playing : null}
      onClick={(e) => props.playClip(e.target.childNodes[0])} >
      <audio
        className='clip'
        id={props.clipId}
        src={props.clip}
        onPlay={() => 
          setActivePad(true)
        }
        onEnded={() => setActivePad(false)}
      />
      {props.keyTrigger}
    </div>
  )
}
