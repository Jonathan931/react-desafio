import styled from "styled-components";
import { cores } from "../colors";

export const Container = styled.header`
  padding: 5px;
  display: flex;
  @media (min-width: 768px) {
    width: 90%;
  }
  margin: 0 auto;
`;

export const ItensWrapper = styled.span`
  width: ${props => (props.isMobile ? "64px" : "auto")};
  font-size: 0.8125rem;
  line-height: 0.8125rem;
  font-weight: 700;
  display: ${props => (props.isMobile ? "flex" : "inline")};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  color: ${cores.azulSecundario};
  border-right: ${props => (props.isItemPrimary ? "4px solid #dcdcdc" : "0px")};
  border-left: ${props => (props.isItemPrimary ? "0px" : "4px solid #dcdcdc")};

  i {
    font-size: 20px;
  }

  header {
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    justify-content: center;
    align-items: center;
    div {
      border-radius: 100%;
      border: 2px solid ${cores.azulSecundario};
      width: 30px;
      height: 30px;
      background-color: transparent;
      text-align: center;
      padding-top: 2px;
      &:before {
        display: table;
        content: " ";
      }
      &::after {
        display: table;
        content: " ";
      }
    }
    border-right: 5px solid #fbfbfb;
  }
`;
//
export const Logo = styled.span`
  flex: 1;
  height: 43px;
`;

export const LabelMobile = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LabelBrowser = styled.p`
  display: none;
  margin: 0 5px;
  @media (min-width: 768px) {
    display: block;
  }
`;
