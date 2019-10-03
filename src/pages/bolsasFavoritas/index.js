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
import { ButtonPrimary } from "../../components/Utils/Button/Primary";
import { ButtonSecundary } from "../../components/Utils/Button/Secundary";
import { LabelMobile, LabelBrowser } from "../../styles/global.js";
import Menu from "../../components/Menu";
import MenuInferior from "../../components/MenuInferior";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";

export default class BolsasFavoritas extends Component {
  state = {
    list: []
  };

  render() {
    const { list } = this.state;
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
            <Card data-modal-trigger="trigger-1" className="trigger">
              <header onClick={this.toggleState}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                <strong>Adicionar Bolsa</strong>
                <small>
                  Clique para adicionar bolsas de cursos do seu interesse
                </small>
              </header>
            </Card>
            {list.map((bolsa, key) => (
              <Card key={key}>
                <header>
                  <img
                    alt={bolsa.university.name}
                    src={bolsa.university.logo_url}
                    width="85%"
                    height="85%"
                  />
                  <strong>{bolsa.university.name}</strong>
                  <span>{bolsa.course.name}</span>
                  <hr size="5" />
                  <strong
                    style={{ fontSize: 14 }}
                  >{`${bolsa.course.kind} ${bolsa.course.shift}`}</strong>
                  <span>Início das aulas em: {bolsa.start_date}</span>
                  <hr size="5" />
                  <strong style={{ fontSize: 14 }}>
                    Mensalidade com o Quero Bolsa:
                  </strong>
                  <LabelCortada>R$ {bolsa.full_price}</LabelCortada>
                  <strong>
                    R$ {bolsa.price_with_discount} <small>/mês</small>
                  </strong>

                  <div className="action">
                    <ButtonPrimary
                      title="Excluir"
                      onClick={() => this.handleRemoveBolsaList(bolsa)}
                    />
                    <ButtonSecundary title="Ver oferta" />
                  </div>
                </header>
              </Card>
            ))}
          </Container>
          <Footer />
          <div>
            <Modal onAdicionar={this.handleAdicionaNaList} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const list = localStorage.getItem("@BOLSASFAVORITAS");
    if (list) {
      this.setState({
        list: JSON.parse(list)
      });
    }
  }

  handleAdicionaNaList = async ({ listProvisoria }) => {
    const { list } = this.state;
    const filtered = await listProvisoria.filter(
      row => list.indexOf(row) !== -1
    );
    await this.setState({
      list: this.handleOndernacaoNomeFaculdade([...filtered, ...listProvisoria])
    });
    localStorage.setItem("@BOLSASFAVORITAS", JSON.stringify(this.state.list));
  };

  handleRemoveBolsaList = bolsa => {
    const { list } = this.state;
    this.setState({
      list: list.filter(row => row !== bolsa)
    });
  };

  handleOndernacaoNomeFaculdade = (list, orderAsc = true) => {
    return list.sort(function(a, b) {
      if (orderAsc) {
        if (a.course.name < b.course.name) {
          return -1;
        }
        if (a.course.name > b.course.name) {
          return 1;
        }
      } else {
        if (a.course.name > b.course.name) {
          return -1;
        }
        if (a.course.name < b.course.name) {
          return 1;
        }
      }

      return 0;
    });
  };
}
