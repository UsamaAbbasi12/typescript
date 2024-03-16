import React from "react";
interface StatusProps {
  status: "success" | "loading" | "error";
}
const Status = (props: StatusProps) => {
  if (props.status === "success") {
    return (
      <div>
        <h1>Data Fetched Successfully</h1>
      </div>
    );
  } else if (props.status === "loading") {
    return (
      <div>
        <h1>Loading Data...</h1>
      </div>
    );
  } else if (props.status === "error") {
    return (
      <div>
        <h1>Error Loading Data</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Wrong Props Passed</h1>
      </div>
    );
  }
};

export default Status;
