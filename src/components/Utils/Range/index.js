import React from "react";
import { GroupRange } from "./styles";

export const RangeInput = props => (
  <GroupRange>
    <h5>R$ 10.000</h5>
    <input
      type="range"
      className="slider"
      name="quantity"
      min="1"
      max="10000"
    />
  </GroupRange>
);
