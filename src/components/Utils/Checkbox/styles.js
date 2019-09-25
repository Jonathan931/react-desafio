import styled from "styled-components";
import { cores } from "../../colors";

export const Checkbox = styled.label`
  input {
    position: absolute;
    opacity: 0;
  }

  .overlay {
    top: 0px;
    left: 0px;
    height: 24px;
    width: 24px;
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid ${cores.preto};
    transform: rotate(-90deg);
    transition: all 0.3s;
  }

  .icon {
    color: white;
    display: none;
  }

  input:checked ~ .overlay {
    background-color: ${cores.azulPrincipal};
    border-radius: 8px;
    transform: rotate(0deg);
    opacity: 1;
    border: 2px solid ${cores.azulPrincipal};
  }

  input:checked ~ .overlay .icon {
    display: block;
  }
`;
