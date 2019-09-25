import React, { PureComponent } from "react";
import { SelectCustom } from "../../Utils/Select/index";
import { CheckBox } from "../../Utils/Checkbox/index";
import { RangeInput } from "../../Utils/Range";
import { Filtro, GroupChexbox } from "./styles";

class Filter extends PureComponent {
  state = {
    cidade: "",
    curso: "",
    isPresencial: true,
    isEAD: true,
    valorPagavel: 10000.0,
    selectCidade: "",
    selectCurso: ""
  };
  render() {
    const { isPresencial, isEAD, valorPagavel } = this.state;
    return (
      <Filtro>
        <div className="filtros">
          <div>
            <label>Selecione sua cidade</label>
            <SelectCustom
              onChange={this.handleSelectCidade}
              list={this.props.cidades}
            />
          </div>
          <div>
            <label>Selecione o curso de sua preferência</label>
            <SelectCustom
              onChange={this.handleSelectCurso}
              list={this.props.cursos}
            />
          </div>
        </div>

        <div className="checkbox">
          <label>Como você quer estudar?</label>
          <GroupChexbox>
            <span>
              <CheckBox
                id="presencial"
                checked={isPresencial}
                onChange={() => this.handleCheckbox(true)}
              />
              <label>Presencial</label>
            </span>
            <span>
              <CheckBox
                id="ead"
                checked={isEAD}
                onChange={() => this.handleCheckbox(false)}
              />
              <label>Distância</label>
            </span>
          </GroupChexbox>
        </div>
        <div className="filtros">
          <div>
            <label>Até quanto pode pagar?</label>
            <RangeInput
              value={valorPagavel}
              onChange={this.handleValorPagavel}
            />
          </div>
        </div>
      </Filtro>
    );
  }
  handleValorPagavel = async e => {
    const valorPagavel = e.target.value;
    await this.setState({ valorPagavel });
    const retorno = await this.handleChangeValue();
    this.props.onChange(retorno);
  };

  handleSelectCidade = async e => {
    await this.setState({
      selectCidade: e.target.value
    });
    const retorno = await this.handleChangeValue();
    this.props.onChange(retorno);
  };

  handleSelectCurso = async e => {
    await this.setState({
      selectCurso: e.target.value
    });
    const retorno = await this.handleChangeValue();
    this.props.onChange(retorno);
  };

  handleCheckbox = async isPresencial => {
    if (isPresencial) {
      await this.setState({
        isPresencial: !this.state.isPresencial
      });
    } else {
      await this.setState({
        isEAD: !this.state.isEAD
      });
    }
    const retorno = await this.handleChangeValue();
    this.props.onChange(retorno);
  };

  handleChangeValue = async () => {
    const {
      selectCidade,
      selectCurso,
      valorPagavel,
      isEAD,
      isPresencial
    } = this.state;
    let { data } = await this.props;
    if (selectCidade) {
      data = await data.filter(row => row.campus.city === selectCidade);
    }
    if (selectCurso) {
      data = await data.filter(row => row.course.name === selectCurso);
    }
    if (valorPagavel) {
      data = await data.filter(row => row.price_with_discount <= valorPagavel);
    }
    if (!isPresencial) {
      data = await data.filter(row => row.course.kind !== "Presencial");
    }
    if (!isEAD) {
      data = await data.filter(row => row.course.kind !== "EaD");
    }
    return data;
  };
}
export default Filter;
