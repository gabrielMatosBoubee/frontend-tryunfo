/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      descricao: '',
      primeiroAtributo: '0',
      segundoAtributo: '0',
      terceiroAtributo: '0',
      imagem: '',
      tipo: 'normal',
      SuperTrunfo: false,
      hasTrunfo: false,
      saved: [],
      pesquisa: false,
      filtroName: '',
      filtroPorTipo: 'todos',
      trunfoFiltrado: false,
    };
  }

  validaAtributos = (valor1, valor2, valor3) => {
    const noventa = 90;
    const validarOValor1 = +valor1 >= 0 && +valor1 <= noventa;
    const validarOValor2 = +valor2 >= 0 && +valor2 <= noventa;
    const validarOValor3 = +valor3 >= 0 && +valor3 <= noventa;
    const ValorDaSoma = 210;
    const validaSoma = (+valor1 + +valor2 + +valor3) <= ValorDaSoma;
    return validarOValor1 && validarOValor2 && validarOValor3 && validaSoma;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    // const { filtroName } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { filtroName, filtroPorTipo, trunfoFiltrado } = this.state;
      this.onChange(filtroName);
      this.onChangeFiltroTipo(filtroPorTipo);
      this.onChangeFiltroTrunfo(trunfoFiltrado);
    });
  };

  onChange = (name) => {
    if (name.length > 0) {
      this.setState({ pesquisa: true });
    }
    if (name.length === 0) {
      this.setState({ pesquisa: false });
    }
  };

  onChangeFiltroTipo = (name) => {
    if (name === 'normal' || name === 'raro' || name === 'muito raro') {
      this.setState({ pesquisa: true });
    }
    if (name === 'todas') {
      this.setState({ pesquisa: false });
    }
  };

  onChangeFiltroTrunfo = (name) => {
    if (name === true) {
      this.setState({ pesquisa: true });
    }
  };

  enableButton = () => {
    const { primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      nome,
      descricao,
      imagem } = this.state;
    const num = this.validaAtributos(primeiroAtributo, segundoAtributo, terceiroAtributo);
    const name = nome.length > 0;
    const describe = descricao.length > 0;
    const img = imagem.length > 0;
    const result = num && name && describe && img;
    return result;
  };

  onSaveButtonClick = () => {
    const { primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      nome,
      descricao,
      imagem, SuperTrunfo, tipo } = this.state;
    const newCard = {
      primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      nome,
      descricao,
      imagem,
      tipo,
      SuperTrunfo };
    if (SuperTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState((prevState) => ({
      saved: [...prevState.saved, newCard],
      nome: '',
      descricao: '',
      primeiroAtributo: '0',
      segundoAtributo: '0',
      terceiroAtributo: '0',
      imagem: '',
      tipo: 'normal',
      SuperTrunfo: false,
    }));
  };

  removeCard = (cartaNome) => {
    const { saved } = this.state;
    const array = saved.filter((carta) => !cartaNome.includes(carta.nome));
    const temUmSuper = array.every((element) => element.SuperTrunfo === false);
    if (temUmSuper) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ saved: array });
  };

  cards = (parametro) => {
    const cardNaTela = parametro.map((carta) => (
      <div key={ carta.nome }>
        <Card
          key={ `carta ${carta.nome}` }
          cardName={ carta.nome }
          cardDescription={ carta.descricao }
          cardAttr1={ carta.primeiroAtributo }
          cardAttr2={ carta.segundoAtributo }
          cardAttr3={ carta.terceiroAtributo }
          cardImage={ carta.imagem }
          cardRare={ carta.tipo }
          cardTrunfo={ carta.SuperTrunfo }
        />
        {' '}
        <button
          key={ `button ${carta.nome}` }
          type="button"
          data-testid="delete-button"
          onClick={ () => this.removeCard(carta.nome) }
        >
          Excluir
        </button>

      </div>));
    return cardNaTela;
  };

  mostraCards = () => {
    const { saved, filtroName, filtroPorTipo, trunfoFiltrado } = this.state;
    const cartasFiltradas = saved.filter((cart) => (cart.nome.includes(filtroName)));
    const cardFilterType = saved.filter((cart) => cart.tipo === filtroPorTipo);
    const cardFilterTrunfo = saved.filter((cart) => cart.SuperTrunfo === true);
    // console.log(cardFilterTrunfo);
    if (filtroName.length > 0) {
      return this.cards(cartasFiltradas);
    } return trunfoFiltrado === true
      ? this.cards(cardFilterTrunfo) : this.cards(cardFilterType);
    // return this.cards(cardFilterType);
  };

  render() {
    const { nome,
      descricao,
      primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      imagem,
      tipo,
      SuperTrunfo,
      hasTrunfo,
      saved,
      pesquisa,
      filtroName,
      filtroPorTipo,
      trunfoFiltrado } = this.state;
    return (
      <>
        <Header
          cardName={ filtroName }
          onInputChange={ this.onInputChange }
          cardRare={ filtroPorTipo }
          cardTrunfo={ trunfoFiltrado }
        />
        <div>
          {!pesquisa
          && <>
            <Form
              cardName={ nome }
              cardDescription={ descricao }
              cardAttr1={ primeiroAtributo }
              cardAttr2={ segundoAtributo }
              cardAttr3={ terceiroAtributo }
              cardImage={ imagem }
              cardRare={ tipo }
              cardTrunfo={ SuperTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ !this.enableButton() }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
            <Card
              cardName={ nome }
              cardDescription={ descricao }
              cardAttr1={ primeiroAtributo }
              cardAttr2={ segundoAtributo }
              cardAttr3={ terceiroAtributo }
              cardImage={ imagem }
              cardRare={ tipo }
              cardTrunfo={ SuperTrunfo }
            />
          </>}
        </div>
        {!pesquisa
        && <div>
          {' '}
          {this.cards(saved)}
          {' '}
        </div>}
        {pesquisa && <div>{this.mostraCards()}</div>}
      </>
    );
  }
}

export default App;
