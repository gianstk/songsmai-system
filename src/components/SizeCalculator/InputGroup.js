// import dependencies
import { props } from 'bluebird';
import React from 'react';

// import CSS
import './../Utilities.css';
import './SizeCalculator.css';

const InputGroup = (props) => {

  const handleChange = (event) => {
    console.log("handleChange child");
    props.onChange(event.target.value, props.tag);
  }

  return (
    <div className="input-group" style={{marginBottom: "10px"}}>
      <div className="input-group-icon" style={{width: "40%"}}>{props.name}</div>
      <div className="input-group-area">
        <input type="number" placeholder={props.placeholder} onChange={handleChange}/>
      </div>
    </div>

  );
}

export default InputGroup;