import styled from "styled-components";
import { cores } from "../colors";
const baseDuration = "0.25s";

export const Modal = styled.div`
  div.modal {
    position: fixed;
    top: -5vh;
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
      padding: 1.5rem;
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
        /* max-height: 50vh; */
        overflow: auto;
        width: 100%;

        div.checkbox {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          justify-content: center;
          label {
            font-size: 0.7025rem;
            line-height: 0.8125rem;
            font-weight: 700;
            text-transform: uppercase;
            // > span {
            //   display: block;
            // }
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

export const CheckboxSelecao = styled.div`
  .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid ${cores.cinza2};
    transition: all 0.2s ease;
  }
  .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: ${cores.azulSecundario};
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  .cbx span:last-child {
    padding-left: 8px;
  }
  .cbx:hover span:first-child {
    border-color: ${cores.azulSecundario};
  }

  .inp-cbx:checked + .cbx span:first-child {
    background: ${cores.azulPrincipal};
    border-color: ${cores.azulPrincipal};
    animation: wave 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
`;

export const ListCards = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-top: 10px;
  min-height: 17vh;
  border-top: 4px solid ${cores.cinza2};
  div.img {
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 72%;
      width: 74%;
    }
  }

  div.informacao {
    display: flex;
    flex: 1;
    justify-content: space-between;
    flex-direction: column;
    font-size: 0.9025rem;
    line-height: 1rem;
    text-align: center;
    margin-top: 5px;
    div {
      display: flex;
      flex-direction: column;
    }

    label.titulo {
      font-size: 0.9525rem;
      font-weight: 700;
      color: ${cores.azulSecundario};
    }

    strong {
      color: ${cores.verde};
    }
  }
`;

export const FooterModal = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  width: 100%;
  margin: 0;
  padding: 1.875rem 0 0;
  justify-content: space-between;
`;
