import React from "react";
type StyleProps = {
  styles: React.CSSProperties;
};
const Style = (props: StyleProps) => {
  return <div style={props.styles}>Style</div>;
};

export default Style;
