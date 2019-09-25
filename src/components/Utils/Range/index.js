import React from "react";
import { GroupRange } from "./styles";

export const RangeInput = props => (
  <GroupRange>
    <h5>R$ {props.value}</h5>
    <input
      type="range"
      className="slider"
      name="quantity"
      min="1"
      value={props.value}
      max="10000"
      onChange={props.onChange}
    />
  </GroupRange>
);
