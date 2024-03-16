import React from "react";
type UserData = {
  name: {
    first: string;
    last: string;
  };
};
const PersonData = (props: UserData) => {
  return (
    <div>
      Your name is {props.name.first} {props.name.last}
    </div>
  );
};

export default PersonData;
