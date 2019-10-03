import React, { PureComponent } from "react";
import Filter from "./Filtro";
import { ButtonPrimary } from "../Utils/Button/Primary";
import { ButtonSecundary } from "../Utils/Button/Secundary";
import {
  Modal,
  WrapperResultados,
  ListCards,
  Card,
  FooterModal,
  CheckboxSelecao
} from "./styles";
import { serviceBolsas } from "../../services/bolsas";

export default class FancyModalButton extends PureComponent {
  state = {
    listOriginal: [],
    cidades: [],
    cursos: [],
    listFiltrada: [],
    listProvisoria: []
  };

  render() {
    const { cursos, cidades, listOriginal, listFiltrada } = this.state;
    console.log(this.state.listProvisoria);
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
              <Filter
                cursos={cursos}
                cidades={cidades}
                data={listOriginal}
                onChange={this.handleOnChangeFilter}
              />
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
                {listFiltrada.map((bolsa, index) => (
                  <Card key={index}>
                    <div className="checkbox">
                      <CheckboxSelecao>
                        <input
                          className="inp-cbx"
                          id={`cbx_${index}`}
                          type="checkbox"
                          onChange={event =>
                            this.handleProvisorio({ bolsa, event })
                          }
                          style={{ display: `none` }}
                        />
                        <label className="cbx" htmlFor={`cbx_${index}`}>
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                        </label>
                      </CheckboxSelecao>
                    </div>
                    <div className="img">
                      <img
                        src={bolsa.university.logo_url}
                        alt={bolsa.university.name}
                      />
                    </div>
                    <div className="informacao">
                      <div>
                        <span>
                          <label className="titulo">{bolsa.course.name}</label>
                        </span>
                        <span>
                          <label>{bolsa.course.level}</label>
                        </span>
                      </div>
                      <div>
                        <span>
                          Bolsa de <strong>{bolsa.discount_percentage}%</strong>
                        </span>
                        <span>
                          <strong>R$ {bolsa.price_with_discount}</strong>
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </ListCards>
            </div>
            <FooterModal className="modal-footer">
              <ButtonPrimary className="fechar" title="Cancelar" />
              <ButtonSecundary
                title="Adicionar Bolsas"
                className="fechar"
                disabled
                onClick={this.handleAdicionar}
              />
            </FooterModal>
          </article>
        </div>
      </Modal>
    );
  }

  async componentDidMount() {
    const divs = document.querySelectorAll(`div[data-modal-trigger]`);

    divs.forEach(div => {
      this.modalEvent(div);
    });

    const { data } = await serviceBolsas.buscar();
    const cidades = [];
    const cursos = [];
    data.forEach(row => {
      if (row.campus.city && cidades.indexOf(row.campus.city) === -1) {
        cidades.push(row.campus.city);
      }
      if (row.course.name && cursos.indexOf(row.course.name) === -1) {
        cursos.push(row.course.name);
      }
    });

    await this.setState({
      listFiltrada: data,
      listOriginal: data,
      cidades: this.handleOndernacao(cidades),
      cursos: this.handleOndernacao(cursos)
    });
  }

  handleOndernacao = list => {
    return list.sort(function(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  };

  modalEvent = button => {
    button.addEventListener("click", () => {
      const trigger = button.getAttribute("data-modal-trigger");
      const modal = document.querySelector(`[data-modal=${trigger}]`);
      const close = modal.querySelector(".close");
      const fecharButton = modal.querySelectorAll(".fechar");
      console.log(fecharButton);
      fecharButton.forEach(item =>
        item.addEventListener("click", () => modal.classList.remove("open"))
      );
      close.addEventListener("click", () => modal.classList.remove("open"));
      modal.classList.toggle("open");
    });
  };

  handleOnChangeFilter = listFiltrada => {
    this.setState({
      listFiltrada
    });
  };

  handleProvisorio = ({ bolsa, event }) => {
    const { checked: isAdd } = event.target;
    const { listProvisoria } = this.state;
    if (isAdd) {
      this.setState({ listProvisoria: [...listProvisoria, bolsa] });
    } else {
      this.setState({
        listProvisoria: listProvisoria.filter(row => row !== bolsa)
      });
    }
  };

  handleAdicionar = () => {
    const { listProvisoria } = this.state;
    this.props.onAdicionar({ listProvisoria });
  };
}
