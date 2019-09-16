import React from "react";
import {
  LabelMobile,
  Container,
  ItensWrapper,
  Logo,
  LabelBrowser
} from "./styles";
import logo from "../../assets/logo-querobolsa.svg";

export default function Menu() {
  return (
    <Container>
      <ItensWrapper isItemPrimary={true}>
        <header>
          <div>
            <i className="fa fa-info"></i>
          </div>
          <LabelMobile>Ajuda</LabelMobile>
          <LabelBrowser>Como funciona</LabelBrowser>
        </header>
      </ItensWrapper>
      <Logo>
        <a href="/">
          <img alt="Logo" src={logo} width="100%" height="100%" />
        </a>
      </Logo>
      <ItensWrapper>
        <header>
          <LabelBrowser>Nome Sobrenome</LabelBrowser>
          <div>
            <i className="fa fa-user"></i>
          </div>
          <LabelMobile>Conta</LabelMobile>
        </header>
      </ItensWrapper>
    </Container>
  );
}
