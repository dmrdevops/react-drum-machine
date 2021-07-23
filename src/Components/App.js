
import { useState } from 'react';
import './App.css';
import {kitA, kitB} from '../reference';
import Controls from './Controls';
import PadBank from './PadBank';

export default function App() {
  const [volumeLevel, setVolumeLevel] = useState(0.75);
  const [display, setDisplay] = useState("");
  const [kitSelected, setKitSelected] = useState(kitA);
  const [powerOn, setPowerOn] = useState(true);

  function updateDisplay(val) {
    powerOn ? setDisplay(val) : setDisplay('')
  }

  function changeVolume(e) {
    setVolumeLevel(e.target.value);
    setDisplay(`Volume ${Math.round(e.target.value * 100)}`);
    setTimeout(() => setDisplay(''), 1500)
  }

  function changeBank() {
    kitSelected === kitA ? setKitSelected(kitB) : setKitSelected(kitA);
  }

  function powerToggle() {
    if (powerOn) {
      setPowerOn(false);
      setDisplay('POWER OFF');
    } else {
      setPowerOn(true);
      setDisplay('POWER ON');
    }
    
    setTimeout(() => setDisplay(''), 1500)
  }

  const clips = [...document.getElementsByClassName('clip')];
    clips.forEach(sound => {
      sound.volume = volumeLevel;
    });

  return (
    <>
    <div className="main-container" id="drum-machine">
      <PadBank 
        currentKit={kitSelected}
        powerOn={powerOn}
        updateDisplay={updateDisplay} />
      <div className="side-container">
        <div id="display">{display}</div>
        <Controls 
          changeVolume={changeVolume}
          currentVolume={volumeLevel}
          changeBank={changeBank}
          kitSelected={kitSelected}
          powerOn={powerOn}
          powerToggle={powerToggle} />
      </div>
    </div>
    </>
  )
}
