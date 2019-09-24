import React, { Component } from "react";
import Filter from "./Filtro";
import { ButtonPrimary } from "../Utils/Button/Primary";
import { ButtonSecundary } from "../Utils/Button/Secundary";
import {
  Modal,
  WrapperResultados,
  ListCards,
  Card,
  FooterModal
} from "./styles";

export default class FancyModalButton extends Component {
  render() {
    return (
      <Modal>
        <div data-modal="trigger-1" className="modal">
          <article className="content-wrapper">
            <button className="close"></button>
            <header className="modal-header">
              <h2>Adicionar bolsa</h2>
              <small>Filtre e adicione as bolsas de seu interesse.</small>
            </header>
            <div className="contentModal">
              <Filter />
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
                <Card>
                  <div className="checkbox">
                    <input type="checkbox" />
                  </div>
                  <div className="img">
                    <img
                      src="https://www.tryimg.com/u/2019/04/16/unip.png"
                      alt="teste"
                    />
                  </div>
                  <div className="informacao">
                    <div>
                      <span>
                        <label>Ciências Contábeis</label>
                      </span>
                      <span>
                        <label>Bacharelado</label>
                      </span>
                    </div>
                    <div>
                      <span>
                        Bolsa de <strong>75%</strong>
                      </span>
                      <span>
                        <strong>R$ 425</strong>
                      </span>
                    </div>
                  </div>
                </Card>
              </ListCards>
            </div>

            <FooterModal className="modal-footer">
              <ButtonPrimary className="fechar" title="Cancelar" />
              <ButtonSecundary title="Adicionar Bolsas" />
            </FooterModal>
          </article>
        </div>
      </Modal>
    );
  }

  componentDidMount() {
    const divs = document.querySelectorAll(`div[data-modal-trigger]`);
    for (let div of divs) {
      this.modalEvent(div);
    }
  }

  modalEvent = button => {
    button.addEventListener("click", () => {
      const trigger = button.getAttribute("data-modal-trigger");
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      const contentWrapper = modal.querySelector(".content-wrapper");
      const close = modal.querySelector(".close");
      const fecharButton = modal.querySelector(".fechar");

      fecharButton.addEventListener("click", () =>
        modal.classList.remove("open")
      );
      close.addEventListener("click", () => modal.classList.remove("open"));
      modal.addEventListener("click", () => modal.classList.remove("open"));
      contentWrapper.addEventListener("click", e => e.stopPropagation());

      modal.classList.toggle("open");
    });
  };
}
