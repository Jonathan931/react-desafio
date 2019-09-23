import React, { Component } from "react";
import { SelectCustom } from "../Utils/Select/index";
import { CheckBoxList } from "../Utils/Checkbox/index";
import { RangeInput } from "../Utils/Range/index";
import { Modal, WrapperResultados, ListCards } from "./styles";

export default class FancyModalButton extends Component {
  componentDidMount() {
    const buttons = document.querySelectorAll(`button[data-modal-trigger]`);

    for (let button of buttons) {
      modalEvent(button);
    }

    function modalEvent(button) {
      button.addEventListener("click", () => {
        const trigger = button.getAttribute("data-modal-trigger");
        const modal = document.querySelector(`[data-modal=${trigger}]`);
        const contentWrapper = modal.querySelector(".content-wrapper");
        const close = modal.querySelector(".close");

        close.addEventListener("click", () => modal.classList.remove("open"));
        modal.addEventListener("click", () => modal.classList.remove("open"));
        contentWrapper.addEventListener("click", e => e.stopPropagation());

        modal.classList.toggle("open");
      });
    }
  }

  render() {
    return (
      <Modal>
        <button data-modal-trigger="trigger-1" className="trigger">
          <i className="fa fa-fire" aria-hidden="true"></i>
          Modal 1
        </button>
        <div data-modal="trigger-1" className="modal">
          <article className="content-wrapper">
            <button className="close"></button>
            <header className="modal-header">
              <h2>Adicionar bolsa</h2>
              <small>Filtre e adicione as bolsas de seu interesse.</small>
            </header>
            <div className="contentModal">
              <div className="filtros">
                <div>
                  <label>Selecione sua cidade</label>
                  <SelectCustom />
                </div>
                <div>
                  <label>Selecione o curso de sua preferência</label>
                  <SelectCustom />
                </div>
              </div>

              <div className="checkbox">
                <label>Como você quer estudar?</label>
                <CheckBoxList />
              </div>
              <div className="filtros">
                <div>
                  <label>Até quanto pode pagar?</label>
                  <RangeInput />
                </div>
              </div>

              <WrapperResultados className="wrapper-resutados">
                <div className="resutados">
                  <span>
                    <label>Resultados:</label>
                  </span>

                  <div>
                    <label>Ordenar por:</label>
                    <span>Nome da Faculdade</span>
                  </div>
                </div>
              </WrapperResultados>
              <ListCards>
                <div>
                  <span>
                    <input type="checkbox" />
                    <img
                      src="https://www.tryimg.com/u/2019/04/16/unip.png"
                      width="100"
                      height="100"
                      alt="teste"
                    />
                  </span>
                </div>
              </ListCards>
            </div>
            <footer className="modal-footer">
              <button className="action">Accept</button>
              <button className="action">Decline</button>
            </footer>
          </article>
        </div>
      </Modal>
    );
  }
}
