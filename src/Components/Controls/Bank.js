import { kitA } from "../../reference";

const Bank = (props) => {
  const soundBankSlider =
    props.kitSelected === kitA
      ? { transform: "rotate(45deg)" }
      : { transform: "rotate(135deg)" };

  const bankColor = () => {
    if (props.powerOn) {
      return props.kitSelected === kitA
        ? {
            color: "rgb(0, 160, 255)",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }
        : {
            color: "red",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          };
    }
  };

  return (
    <div className="control-bank">
      <div style={bankColor()}>Bank</div>
      <div className="knob" onClick={props.changeBank}>
        <div className="indicator" style={soundBankSlider} />
      </div>
    </div>
  );
};

export default Bank;
