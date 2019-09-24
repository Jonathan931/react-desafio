import React from "react";
import { Button } from "./styles";

export const ButtonPrimary = props => (
  <Button className={props.className}>{props.title}</Button>
);
