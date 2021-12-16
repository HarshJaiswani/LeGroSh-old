import React , { useState } from "react";
import "./Form.css";
import FormField from "./FormField";
const Form = (props) => {
  const [show, setShow] = useState([]);
  const [id, setId] = useState();
  const clickHandle = (e) => {
    setId(e.target.id);
  }
  const submitHandle = (e) => {
    e.preventDefault();
    
  }
  return (
    <div className="formContainer">
      <form action="" className="formBody">
        <div className="formStart">
          <p>Welcome to LeGroSh !</p>
          <p>Learn - Grow - Share</p>
          <p>(Kindly Fill the form with responsibility and correct credentials)</p>
        </div>
        <div style={{marginTop: '30px'}}>
        <FormField info="Name" type="text" msg="" value={props.UserName} func={setShow} show={show} />
        {show.includes('Name') && <FormField info="Contact-Number" type="number" show={show} msg="(Kindly ensure this is your whatsapp number)" value="" func={setShow} />}
        {show.includes('Contact-Number') && <FormField info="Email" type="email" show={show} msg="(optional)" value="example@provider.com" func={setShow} />}
        </div>
        {show.includes('Email') && <div className="choice">
          <div>
          <input type="radio" id="web" name="choice" onClick={clickHandle} />
          <label htmlFor="web">I want a Website</label>
          </div>
          <div>
          <input type="radio" id="ment" name="choice" onClick={clickHandle} />
          <label htmlFor="ment">I want Guidence</label>
          </div>
          <div>
          <input type="radio" id="join" name="choice" onClick={clickHandle} />
          <label htmlFor="join">Work with Us</label>
          </div>
        </div>}
        {id === 'web' && <p style={{marginTop: '20px', fontSize: '0.9rem' ,color: 'wheat'}}>You can fill the above form , Our team will soon contact you to address your needs. Thanks ! </p>}
        {id === 'ment' && <div><FormField info="Querry" type="text" value="" func={setShow} show={show} /></div>}
        {id === 'join' && <div><FormField info="Interest" type="text" value="" func={setShow} show={show} msg="(Input Skills or Profile you are comfortable working In)" /></div>}
        {id === 'web' && <button type="submit" className="subbtn" onClick={submitHandle}>Let's Explore</button>}
        {show.includes('Querry') && <button type="submit" className="subbtn" onClick={submitHandle}>Let's Explore</button>}
        {show.includes('Interest') && <button type="submit" className="subbtn" onClick={submitHandle}>Let's Explore</button>}
      </form>
    </div>
  );
};

export default Form;
