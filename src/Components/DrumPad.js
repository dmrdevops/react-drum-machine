import React from 'react';

class DrumPad extends React.Component {
  state = {
    activePad: false
  }
  componentDidMount() {
    const keys = document.querySelectorAll('.drum-pad');
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (event) => {
    if(event.keyCode === this.props.keyCode && this.props.powerState) {
      this.setState(prevState => ({
        activePad: true
      }));
      this.playClip();
      setTimeout(() => this.setState({ activePad: false}), 100)
    }
  }

  playClip = () => {
    if(this.props.powerState){
      const clip = document.getElementById(this.props.keyTrigger);
      clip.currentTime = 0;
      clip.play();
      const formatted = this.props.clipId.replace("-", " ");
      this.props.updateDisplay(formatted);
    }
  }
  
  render() {
    let drumClass = 'drum-pad';
    if(this.state.activePad) {
      drumClass += ' playing'
    }
    return (
      <div
        className={drumClass}
        id={this.props.clipId}
        onClick={this.playClip} >
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