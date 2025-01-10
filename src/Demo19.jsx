import { useState } from "react";

const Button = ({handleClick,text}) => {
   // <button onClick={props.handleClick}>{props.text}</button>
  //  console.log(setToValue)
   return <button onClick={handleClick}>{text}</button>
}


const RandomValue = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand"/>
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default RandomValue;