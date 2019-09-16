import styled from "styled-components";
import { cores } from "../../components/colors";

export const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Card = styled.div`
  max-width: 300px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  hr {
    background-color: #999;
    margin-top: 5px;
    width: 95%;
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
      font-size: 55px;
      color: #007a8d;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
      text-align: center;
    }
  }

  div.action {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;

    button {
      border: none;
      color: white;
      border-radius: 5px;
      margin-left: 5px;
      margin-bottom: 10px;
      padding: 8px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }

    button.excluir {
      background: white;
      color: ${cores.azulSecundario};
      border: 1px solid ${cores.azulSecundario};
      &:hover {
        background: #dcdcdc;
      }
    }

    button.oferta {
      background: ${cores.amareloPrincipal};
      color: white;
      border: 1px solid ${cores.amareloSecundario};
      &:hover {
        background: ${cores.amareloSecundario};
      }
    }
  }
`;

export const History = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 5px 0;
  font-weight: 700;
  @media (max-width: 768px) {
    color: ${cores.azulSecundario};
  }

  span {
    color: ${cores.azulSecundario};
    margin: 0 5px;
    cursor: pointer;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 90%;
    flex-direction: column;
  }
  p {
    margin: 10px 0;
  }
`;

export const GroupButton = styled.div`
  font-size: 0.8125rem;
  line-height: 0.8125rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: ;
  }
  div {
    width: 90%;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
  }
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const Button = styled.span`
  color: ${cores.azulSecundario};
  border: 1px solid ${cores.azulSecundario};
  padding: 5px 24px;
  cursor: pointer;
  float: left;
  border-radius: 3px;

  @media (max-width: 768px) {
    padding: 8px 24px;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    &:not(:last-child) {
      border-right: none;
    }
  }

  &:hover {
    background-color: ${cores.azulSecundario};
    color: white;
  }
`;

export const LabelCortada = styled.span`
  text-decoration: line-through;
  font-size: 14px;
`;
