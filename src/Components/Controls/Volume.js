const volume = (props) => {
  const volumeColor = () => {
    const luminance = Math.round(props.currentVolume * 150);
    if(props.powerState) {
      if(luminance > 50) {
        return { color: 'rgb(0, 140, 255)',
          filter: `brightness(${luminance}%)`,
          webkitTextStrokeWidth: '1px',
          webkitTextStrokeColor: 'black' }
      } else {
        return { color: 'rgb(0, 140, 255)',
                 filter: `brightness(${luminance}%)` }
      }
    } else {
      return { color: 'black'}
    }
    
  }

  return (
    <div className="control-volume">
      <div style={volumeColor()}>Volume</div>
        <input
          max='1'
          min='0'
          onChange={props.changeVolume}
          step='.01'
          type="range"
          value={props.currentVolume} />
      </div>
  )
}

export default volume




