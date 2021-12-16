import React, { useState, useRef } from "react";
import "./FormField.css";

const FormField = (props) => {
  const [value, setValue] = useState(props.value);
  const [sym, setSym] = useState("arr");
  const ref = useRef();
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const clickHandle = (e) => {
    e.preventDefault();
    if (value !== "") {
      props.func([...props.show, props.info]);
      setSym("rit");
      e.target.style.display = "none";
    }
  };
  return (
    <div className="formfield">
      <label htmlFor={props.info}>Enter Your {props.info} </label>
      <p>{props.msg}</p>
      <div>
        {sym === "arr" ? <span style={{ color: "crimson" }}>&#8594;</span> : ""}
        {sym === "rit" ? <span style={{ color: "green" }}>&#10003;</span> : ""}
        {props.type === "number" ? (
          <span style={{ marginLeft: "10px", color: "wheat" }}>+91</span>
        ) : (
          ""
        )}
        <input
          min="6000000000"
          className="formfieldsinput"
          spellCheck="false"
          id={props.info}
          type={props.type}
          value={value}
          onChange={changeValue}
        />
      </div>
      <button ref={ref} className="btnCont" onClick={clickHandle}>
        Continue
      </button>
    </div>
  );
};

export default FormField;
