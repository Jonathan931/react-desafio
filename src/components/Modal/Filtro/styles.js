import styled from "styled-components";

export const Filtro = styled.div`
  div.filtros {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    margin-top: 10px;
    div {
      margin-top: 10px;
      flex: 1;
      display: flex;
      width: 100%;
      flex-direction: column;
      label {
        font-size: 0.7025rem;
        line-height: 0.8125rem;
        font-weight: 700;
        text-transform: uppercase;
      }
    }
  }
`;

export const GroupChexbox = styled.div`
  display: flex;
  margin-top: 10px;

  span {
    display: flex;
    flex: 1;
    align-items: center;

    label {
      padding-left: 5px;
    }
  }
`;
