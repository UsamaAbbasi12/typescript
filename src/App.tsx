import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import PersonData from "./components/PersonData";
import UserList from "./components/UserList";
import Status from "./components/Status";
import { ChildProcess } from "child_process";
import ChlidComponent from "./components/ChlidComponent";
import ReactComponentAsChild from "./components/ReactComponentAsChild";
import Button from "./components/Button";
import Input from "./components/Input";
import Style from "./components/Style";
function App() {
  const personData = {
    first: "Usama",
    last: "Tahir",
  };
  const data = [
    {
      first: "Usama",
      last: "Tahir",
    },
    {
      first: "Usama",
      last: "Tahir",
    },
    {
      first: "Usama",
      last: "Tahir",
    },
  ];
  return (
    <div className="App">
      <Greet name="Usama" id={1} />
      <PersonData name={personData} />
      {/* Passing Array of objects as Props */}
      <UserList data={data} />
      {/* Passing Multiple Values in a single props for using in any condition */}
      <Status status="error" />
      {/* Passing Child Props */}
      <ChlidComponent> This is data</ChlidComponent>
      {/* Passing A Compoent as a Child Component */}
      <ReactComponentAsChild>
        <Status status="error" />
      </ReactComponentAsChild>
      {/* Optional Props */}
      <Greet name="Usama" />
      {/* Passing Event As a Props Means Passing Any Handler Functions  */}
      <Button handleClick={(event, id) => alert("Hello Usama" + event + id)} />
      {/* OnChange Event */}
      <Input value="1" handleChange={(event) => console.log(event)} />
      {/* Passing Style Props */}
      <Style
        styles={{ backgroundColor: "orange", width: "200px", height: "200px" }}
      />
    </div>
  );
}

export default App;
