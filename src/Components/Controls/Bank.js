import {kitA, kitB} from '../../reference';

const Bank = (props) => {
  const soundBankSlider = 
        props.kitSelected === kitA
        ? {
          float: 'left'
          }
        : {
          float: 'right'
        }
  return (
    <div className="control-bank">
      <div>Bank</div>
      <div className="selector" onClick={props.changeSoundBank} >
        <div className='inner' style={soundBankSlider} />
      </div>
    </div>
  )
}

export default Bank;