
import './App.css';
import React from 'react';
import {kitA, kitB} from './reference';

class DrumPad extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  handleKeyPress = (event) => {
    if(event.keyCode === this.props.keyCode) {
      this.playClip();
    }
  }
  playClip = () => {
    const clip = document.getElementById(this.props.keyTrigger);
    clip.currentTime = 0;
    clip.play();
    this.props.updateDisplay(this.props.clipId);
  }
  
  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.clipId}
        onClick={this.playClip}
      >
        <audio
          className='clip'
          id={this.props.keyTrigger}
          src={this.props.clip}
        />
        {this.props.keyTrigger}
      </div>
    )
  };
}

class PadBank extends React.Component {
  render() {
    let kitArray = this.props.currentKit.map((currentKit) => {
      return (
        <DrumPad
          clip={currentKit.url}
          clipId={currentKit.id}
          key={currentKit.id.toString()}
          keyCode={currentKit.keyCode}
          keyTrigger={currentKit.keyTrigger}
          updateDisplay={this.props.updateDisplay}
        />
      )
    })
    return (
      <div className="pad-bank">{kitArray}</div>
    )
  }
}

class App extends React.Component {
  state = {
    currentVolume: 0.5,
    display: "",
    kitSelected: kitA,
    keyPressed: false
  }

  displayClipId = (id) => {
    this.setState({
      display: id
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
      display: `Volume ${Math.round(event.target.value * 100)}`
    });
    setTimeout(() => this.clearDisplay(), 1000)
  }

  changeSoundBank = () => {
    switch(this.state.kitSelected) {
      case kitA:
        this.setState({
          kitSelected: kitB
        });
        break;
      case kitB:
        this.setState({
          kitSelected: kitA
        });
      break;
    }
  }
  
  render() {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.currentVolume;
      });
      
      const soundBankSlider = 
        this.state.kitSelected === kitA
        ? {
          float: 'left'
          }
        : {
          float: 'right'
        }

    return (
      <>
      <div className="main-container" id="drum-machine">
        <PadBank 
          currentKit={this.state.kitSelected}
          updateDisplay={this.displayClipId}
        />
        <div className="control-container">
          <div id="display">{this.state.display}</div>
          <div className="volume-control">
            <input
              max='1'
              min='0'
              onChange={this.changeVolume}
              step='.01'
              type="range"
              value={this.state.currentVolume}
            />
          </div>
          <div className="bank-control">
            <div>Bank</div>
            <div className="select" onClick={this.changeSoundBank}>
              <div className='inner' style={soundBankSlider} />
            </div>
          </div>
        </div>
      </div>
      </>
    )
  };
}

export default App;


//display of currently playing sound (id=display)
//9 clickable drumpad elements assigned to QWE ASD ZXC (IN THAT ORDER!!!). Must trigger sound...