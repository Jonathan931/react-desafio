import React from "react";
import { Checkbox, GroupChexbox } from "./styles";

export const CheckBoxList = props => (
  <GroupChexbox>
    <span>
      <Checkbox checked />
      {/* <input className="checkbox" type="checkbox" name="escolha" />{" "} */}
      <label>Presencial</label>
    </span>
    <span>
      {/* <input className="checkbox" type="checkbox" name="escolha" /> */}
      <Checkbox />
      <label>Distância</label>
    </span>
  </GroupChexbox>
);
