import React from 'react';

class DrumPad extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  handleKeyPress = (event) => {
    if(event.keyCode === this.props.keyCode && this.props.powerState) {
      this.playClip();
    }
  }
  playClip = () => {
    const clip = document.getElementById(this.props.keyTrigger);
    clip.currentTime = 0;
    clip.play();
    const formatted = this.props.clipId.replace("-", " ")
    this.props.updateDisplay(formatted);
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

export default DrumPad