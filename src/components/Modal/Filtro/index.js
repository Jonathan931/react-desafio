import React from "react";
import { SelectCustom } from "../../Utils/Select/index";
import { CheckBox } from "../../Utils/Checkbox/index";
import { RangeInput } from "../../Utils/Range";
import { Filtro, GroupChexbox } from "./styles";

const Filter = () => (
  <Filtro>
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
      <GroupChexbox>
        <span>
          <CheckBox checked />
          {/* <input className="checkbox" type="checkbox" name="escolha" />{" "} */}
          <label>Presencial</label>
        </span>
        <span>
          {/* <input className="checkbox" type="checkbox" name="escolha" /> */}
          <CheckBox />
          <label>Distância</label>
        </span>
      </GroupChexbox>
    </div>
    <div className="filtros">
      <div>
        <label>Até quanto pode pagar?</label>
        <RangeInput />
      </div>
    </div>
  </Filtro>
);

export default Filter;
