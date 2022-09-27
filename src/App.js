import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
    // if (result === true) {
    //   this.setState({
    //     button: false,
    //   });
    // } else this.setState({ button: true });
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
      saved } = this.state;
    return (
      <>
        <div>
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
        </div>
        <div>
          {' '}
          {saved.map((carta) => (
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

            </div>))}
          {' '}
        </div>
      </>
    );
  }
}

export default App;
