import '../App.css';
import React from 'react';
import PadBank from './PadBank';
import {kitA, kitB} from '../reference';
import Controls from './Controls';
import Display from './Display';


class DrumMachine extends React.Component {
  state = {
    currentVolume: 0.5,
    display: "",
    keyPressed: false,
    kitSelected: kitA,
    powerState: true
  }

  updateDisplay = (value) => {
    this.state.powerState
    ? this.setState({
        display: value
      })
    : this.setState({
      display: ""
    });
  }

  clearDisplay = () => {
    this.setState({
      display: ""
    });
  }

  changeVolume = (event) => {

    this.setState({
      currentVolume: event.target.value,
    });
    this.updateDisplay(`Volume ${Math.round(event.target.value * 100)}`);
    setTimeout(() => this.clearDisplay(), 1500)
  }

  changeSoundBank = () => {
    switch(this.state.kitSelected) {
      case kitA:
        this.setState({
          kitSelected: kitB,
        });
        this.updateDisplay("KIT B SELECTED")
        break;
      case kitB:
        this.setState({
          kitSelected: kitA,
        });
        this.updateDisplay("KIT A SELECTED")
      break;
    }
  }

  powerToggle = () => {
    this.state.powerState
    ? this.setState(prevState => ({
      powerState: false,
      display: "POWER OFF"
    }))
    : this.setState(prevState => ({
      powerState: true,
      display: "POWER ON"
    }))
    setTimeout(() => this.clearDisplay(), 1500)
  }
  
  render() {
      const clips = [...document.getElementsByClassName('clip')];
      clips.forEach(sound => {
        sound.volume = this.state.currentVolume;
      });
        
    return (
      <>
      <div className="main-container" id="drum-machine">
        <PadBank 
          currentKit={this.state.kitSelected}
          powerState={this.state.powerState}
          updateDisplay={this.updateDisplay} />
        <div className="side-container">
          <Display
            display={this.state.display} />
          <Controls 
            changeVolume={this.changeVolume}
            currentVolume={this.state.currentVolume}
            changeSoundBank={this.changeSoundBank}
            display={this.state.display}
            kitSelected={this.state.kitSelected}
            powerState={this.state.powerState}
            pwrToggle={this.powerToggle} />
        </div>
      </div>
      </>
    )
  };
}

export default DrumMachine;


//display of currently playing sound (id=display)
//9 clickable drumpad elements assigned to QWE ASD ZXC (IN THAT ORDER!!!). Must trigger sound...