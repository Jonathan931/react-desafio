import React from "react";
import { Menu, MenuBrowser, ItemMenuBrowser } from "./styles";

export default function MenuInferior() {
  return (
    <Menu>
      <div>
        <span>Minha Conta</span>
        <span align="right">
          Menu <i className="fa fa-angle-down"></i>
        </span>
      </div>
      <MenuBrowser>
        <ul>
          <ItemMenuBrowser>
            <a href="#conta">Minha Conta</a>
          </ItemMenuBrowser>
          <ItemMenuBrowser>
            <a href="#matriculas">Pré-matrículas</a>
          </ItemMenuBrowser>
          <ItemMenuBrowser active={true}>
            <a href="#bolsas">Bolsas Favoritas</a>
          </ItemMenuBrowser>
        </ul>
      </MenuBrowser>
    </Menu>
  );
}
