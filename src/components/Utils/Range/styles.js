import styled from "styled-components";
import { cores } from "../../colors";

export const GroupRange = styled.div`
  input.slider {
    margin: 20px 0px;
    -webkit-appearance: none;
    width: 95%;
    height: 4px;
    border-radius: 4px;
    background: ${cores.azulSecundario};
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: white;
      border: 2px solid ${cores.azulSecundario};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #4caf50;
      cursor: pointer;
    }
  }
`;
