import styled from "styled-components";

export const GroupContato = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #18acc4;
  color: white;
  margin-top: 100px;

  div.whatsapp {
    background-color: #007a8d;
    padding: 8px;
    display: flex;
    justify-content: center;

    i {
      color: white;
      font-size: 40px;
    }
  }

  div.item {
    background-color: #007a8d;
    padding: 8px;
    flex: 1;
    flex-direction: column;
    margin-right: 5px;
    &:last-child {
      margin-right: 0px;
    }
    text-align: center;
    i {
      color: white;
      font-size: 40px;
    }
  }
`;
