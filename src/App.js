import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form/Form";
import Article from "./components/Article";
import WhoWeAre from "./components/WhoWeAre";
import Work from "./components/Work";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import MyDailyWork from "./components/MyDailyWork/MyDailyWork";
// import Resume1 from "./components/ResumeBuilder/Resumes/Resume1";
import Utility from "./components/Utility/Utility";
const capitalise = (word) => {
  let a = word.toString().toLowerCase();
  return a.slice(0, 1).toUpperCase() + word.slice(1);
};
const name = prompt("What do we call you ?");
let UserName;
if (name === null || name === '') {
  UserName = capitalise('Hustler');
}else{
  UserName = capitalise(name);
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home UserName={UserName} />}></Route>
          <Route path="/articles" element={<Article UserName={UserName} />}></Route>
          <Route path="/work" element={<Work UserName={UserName} />} ></Route>
          <Route path="/whoweare" element={<WhoWeAre UserName={UserName} />} ></Route>
          <Route path="/form" element={<Form UserName={UserName} />} ></Route>
          <Route path="/Resume" element={<ResumeBuilder UserName={UserName} />} ></Route>
          {/* <Route path="/Resume1" element={<Resume1 />} ></Route> */}
          <Route path="/todayswork" element={<MyDailyWork />} ></Route>
          <Route path="/Utility" element={<Utility UserName={UserName} />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
