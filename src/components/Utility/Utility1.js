import React, { useState } from "react";
import './Utility1.css';

const Utility1 = () => {
  const [ammount, setAmmount] = useState(1000);
  const [interest, setInterest] = useState(12);
  const [noofyears, setNoofyears] = useState(10);
  const [check, setCheck] = useState();
  const calcReturn = (ammount, interest, noofyears) => {
    let r = interest;
    let n = noofyears * 12;
    let i = r / 100 / 12;
    let c = 1 + i;
    let b2 = Math.pow(c, n);
    let b = (b2 - 1) / i;
    let finalValue = Math.floor(ammount * b * c);
    return finalValue;
  };
  const toggle = () => {
    setCheck(!check);
  }
  const applyComma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <div
        className="finance"
        style={check ? { height: "60vh" } : { height: "10vh" }}
      >
        <span className="arcdown" onClick={toggle}></span>
        <span>SIP Calculator</span>
        <div className="finform">
          <div>
            <label htmlFor="ammount">Monthly Investment :</label>
            <span className="fincont">
              <span className="finicon" style={{ padding: "2px 9px" }}>&#8377;</span>
              <input value={ammount} onChange={(e) => setAmmount(e.target.value)} min="0" type="number" id="ammount"/>
            </span>
          </div>
          <div>
            <label htmlFor="interest">Avg Anual Intrest :</label>
            <span className="fincont">
              <input value={interest} onChange={(e) => setInterest(e.target.value)} min="0" type="number" id="interest"/>
              <span className="finicon">%</span>
            </span>
          </div>
          <div>
            <label htmlFor="noofyears">Time Period :</label>
            <span className="fincont">
              <input value={noofyears} onChange={(e) => setNoofyears(e.target.value)} min="0" type="number" id="noofyears"/>
              <span className="finicon" >Yr</span>
            </span>
          </div>
        </div>
        <div className="results">
          <span>Net Value : {applyComma(calcReturn(ammount , interest , noofyears))}</span>
        </div>
      </div>
    </>
  );
};

export default Utility1;
