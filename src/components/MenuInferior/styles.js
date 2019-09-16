import styled from "styled-components";
import { cores } from "../colors";

export const Menu = styled.div`
  background-color: ${cores.azulPrincipal};

  @media (max-width: 768px) {
    padding: 8px;
  }

  color: white;

  div {
    display: flex;
    flex-direction: row;
    font-size: 0.9925rem;
    line-height: 0.8125rem;
    font-weight: 700;
    width: 95%;
    margin: 0 auto;
    span {
      @media (min-width: 768px) {
        display: none;
      }
      flex: 1;
    }
  }
`;

export const MenuBrowser = styled.div`
  display: none;
  width: 90%;
  margin: 0 auto;

  ul {
    @media (max-width: 768px) {
      display: none;
    }
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
`;

export const ItemMenuBrowser = styled.li`
  a {
    background-color: ${props =>
      props.active ? cores.azulSecundario : cores.azulPrincipal};
    &:hover {
      background-color: ${cores.azulSecundario};
    }
  }
`;
