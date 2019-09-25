import React from "react";
import { Select } from "./styles";

export const SelectCustom = props => (
  <Select onChange={props.onChange}>
    <select>
      <option>{""}</option>
      {props.list.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </select>
  </Select>
);
