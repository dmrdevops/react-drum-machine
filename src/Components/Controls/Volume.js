const volume = (props) => {
  return (
    <div className="control-volume">
      <div>Volume</div>
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




