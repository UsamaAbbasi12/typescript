import React from "react";
interface ChlidComponentProps {
  children: React.ReactNode;
}
const ReactComponentAsChild = (props: ChlidComponentProps) => {
  return <div>{props.children}</div>;
};

export default ReactComponentAsChild;
