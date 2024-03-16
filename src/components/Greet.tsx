import React from "react";
import { GreetProps } from "../types/Person.types";
// Destructuring Props
const Greet = ({ name, id }: GreetProps) => {
  return (
    <div>
      Greet {name} Your id is {id}
    </div>
  );
};

export default Greet;
