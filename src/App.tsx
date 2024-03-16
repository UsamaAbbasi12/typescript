import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import PersonData from "./components/PersonData";
import UserList from "./components/UserList";
import Status from "./components/Status";
import { ChildProcess } from "child_process";
import ChlidComponent from "./components/ChlidComponent";
import ReactComponentAsChild from "./components/ReactComponentAsChild";
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
    </div>
  );
}

export default App;
