import styled from "styled-components";
import { cores } from "../../../colors";

export const Button = styled.button`
  border-radius: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background: white;
  color: ${cores.azulSecundario};
  border: 1px solid ${cores.azulSecundario};
  font-weight: 530;
  &:hover {
    background: #dcdcdc;
  }
`;
