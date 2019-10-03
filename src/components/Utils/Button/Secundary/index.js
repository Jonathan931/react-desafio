import React from "react";
import { Button } from "./styles";

export const ButtonSecundary = props => (
  <Button onClick={props.onClick} className={props.className}>
    {props.title}
  </Button>
);
