import React, { Component } from "react";
import {
  Container,
  Card,
  History,
  ContainerText,
  GroupButton,
  Button,
  LabelCortada
} from "./styles";
import { LabelMobile, LabelBrowser } from "../../styles/global.js";
import Menu from "../../components/Menu";
import MenuInferior from "../../components/MenuInferior";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

export default class BolsasFavoritas extends Component {
  // state = {
  //   isModalOpen: false
  // };

  // toggleState = e => {
  //   this.setState({
  //     isModalOpen: !this.state.isModalOpen
  //   });
  // };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Menu />
          <MenuInferior />

          <History>
            <LabelMobile>
              <i className="fa fa-angle-left" style={{ fontSize: 19 }}></i>
              <span> Minha Conta</span>
            </LabelMobile>
            <LabelBrowser>
              <span>Home</span>/<span>Minha Conta</span> /
              <span>Bolsas favoritas</span>
            </LabelBrowser>
          </History>

          <ContainerText>
            <div>
              <h1>Bolsas Favoritas</h1>
              <p>
                Adicione bolsas de cursos e faculdades do seu interesse e receba
                a atualizações com as melhores ofertas disponíveis
              </p>
            </div>
          </ContainerText>

          <GroupButton>
            <div>
              <Button>Todos os semetres</Button>
              <Button>2º Semestre </Button>
              <Button>1º Semestre </Button>
            </div>
          </GroupButton>
          <Container>
            <Card>
              <header onClick={this.toggleState}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <strong>Adicionar Bolsa</strong>
                <small>
                  Clique para adicionar bolsas de cursos do seu interesse
                </small>
              </header>
            </Card>
            <Card>
              <header>
                <img
                  alt="morumbi"
                  src="https://www.tryimg.com/u/2019/04/16/anhembi-morumbi.png"
                  width="85%"
                  height="85%"
                />
                <strong>Anharenga</strong>
                <span>Sistemas de Informação</span>
                <hr size="5" />
                <strong style={{ fontSize: 14 }}>PRESENCIAL NOITE </strong>
                <span>Início das aulas em: 05/03/2020</span>
                <hr size="5" />
                <strong style={{ fontSize: 14 }}>
                  Mensalidade com o Quero Bolsa:
                </strong>
                <LabelCortada>R$ 2.7845</LabelCortada>
                <strong>
                  R$ 1.7845 <small>/mês</small>
                </strong>

                <div className="action">
                  <button type="button" className="excluir">
                    Excluir
                  </button>
                  <button type="button" className="oferta">
                    Ver oferta
                  </button>
                </div>
              </header>
            </Card>
          </Container>
          <Footer />
          <div>
            <Modal />
          </div>
        </div>
      </div>
    );
  }
}
