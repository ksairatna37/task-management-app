import React from "react";

export default function TaskDetailsCard(props) {
    const style = {
        color:"blue",
        fontWeight:"bold",
        fontSize:"2em"
    }
    const style2={
        color:"grey",
        fontWeight:"400",
        fontSize:"clamp(0.5rem, 2.5vw, 1em)"
    }
  return (
    <div class="col-md-3">
      <div class="p-3 bg-light border">
        <div style={style}>{props.value}</div>
        <div style={style2}>{props.title}</div>
      </div>
    </div>
  );
}
