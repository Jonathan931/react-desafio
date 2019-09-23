import styled from "styled-components";

// const sm = "20rem";
// const rm = "48rem";

const baseDuration = "0.25s";
const primary = "slategray";
// const white = "whitesmoke";
// const med = "48rem";
// const lg = "64rem";
const green = "#2ecc71";
const red = "#e74c3c";

export const Modal = styled.div`
  div.modal {
    position: fixed;
    top: -10vh;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0vh;
    background-color: transparent;
    overflow: hidden;
    transition: background-color ${baseDuration} ease;
    z-index: 9999;

    &.open {
      position: fixed;
      width: 100%;
      height: 110vh;
      background-color: rgba(0, 0, 0, 0.5);
      transition: background-color ${baseDuration};

      > article.content-wrapper {
        transform: scale(1);
      }
    }

    article.content-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-height: 90vh;
      @media (min-width: 768px) {
        width: 50%;
      }
      margin: 0;
      padding: 2.5rem;
      background-color: white;
      border-radius: 0.3125rem;
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.5);
      transform: scale(0);
      transition: transform ${baseDuration};
      transition-delay: 0.15s;

      button.close {
        position: absolute;
        top: -2.5rem;
        right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
        background-color: transparent;
        font-size: 1.5rem;
        transition: ${baseDuration} linear;

        &:before,
        &:after {
          position: absolute;
          content: "";
          width: 1.25rem;
          height: 0.125rem;
          background-color: white;
        }

        &:before {
          transform: rotate(-45deg);
        }

        &:after {
          transform: rotate(45deg);
        }

        &:hover {
          transform: rotate(360deg);

          &:before,
          &:after {
            background-color: white;
          }
        }
      }

      header.modal-header {
        position: relative;
        display: flex;
        flex-direction: column;

        /* align-items: center; */
        justify-content: space-between;
        width: 100%;
        margin: 0;
        padding: 0 0 1.25rem;

        h2 {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }

      div.contentModal {
        /* position: relative; */
        display: flex;
        flex-direction: column;
        max-height: 50vh;
        overflow: auto;
        width: 100%;

        div.checkbox {
          display: flex;
          flex-direction: column;
          margin-top: 10px;

          label {
            font-size: 0.7025rem;
            line-height: 0.8125rem;
            font-weight: 700;
            text-transform: uppercase;
          }
        }

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
      }

      footer.modal-footer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        margin: 0;
        padding: 1.875rem 0 0;

        button.action {
          position: relative;
          margin-left: 0.625rem;
          padding: 0.625rem 1.25rem;
          border: none;
          background-color: ${primary};
          border-radius: 0.25rem;
          color: white;
          font-size: 0.87rem;
          font-weight: 300;
          overflow: hidden;
          z-index: 1;

          &:before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.2);
            transition: width ${baseDuration};
            z-index: 0;
          }

          &:first-child {
            background-color: ${green};
          }

          &:last-child {
            background-color: ${red};
          }

          &:hover {
            &:before {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export const WrapperResultados = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9025rem;
  line-height: 0.8125rem;
  font-weight: 700;
  margin-top: 10px;

  div.resutados {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const ListCards = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;

    img {
      width: 100px;
      height: 50px;
    }
  }
`;
