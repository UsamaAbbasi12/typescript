import React from "react";
interface GreetProps {
  name: string;
  id?: number;
}
const Greet = (props: GreetProps) => {
  const { id = 10 } = props;
  return (
    <div>
      Greet {props.name} Your id is {id}
    </div>
  );
};

export default Greet;
