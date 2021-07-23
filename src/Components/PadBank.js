import { useEffect } from "react";
import DrumPad from "./DrumPad";

export default function PadBank(props) {
  
  useEffect(() => {
  document.addEventListener('keydown', handleKeyPress)
  return () => {
  document.removeEventListener('keydown', handleKeyPress)
  }
  }, [props.powerOn])
  

  function handleKeyPress(e) {
    // Normalize upper and lowercase keystrokes
    const clip = document.getElementById(e.key.toUpperCase());
    if (clip) {
      playClip(clip.childNodes[0]);
    } //else nothing 
  } 

  function playClip(clip) {
    if (props.powerOn) {
      if (clip) {
        clip.currentTime = 0;
        clip.play();
        // Remove dashes from ID for cleaner display
        props.updateDisplay( clip.id.replace("-", " ") );
      }
    }
  }
  
  return (
    <div className="pad-bank">{
      props.currentKit.map((currentKit) => {
        return (
          <DrumPad
          clip={currentKit.url}
          clipId={currentKit.id}
          key={currentKit.id.toString()}
          keyTrigger={currentKit.keyTrigger}
          playClip={playClip}
          />
        )
      })
    }</div>
  )
}