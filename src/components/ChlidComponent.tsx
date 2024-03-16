import React from "react";
interface ChildProps {
  children: string;
}
const ChlidComponent = (props: ChildProps) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default ChlidComponent;
