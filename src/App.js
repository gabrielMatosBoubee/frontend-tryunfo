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
      hasTrunfo } = this.state;
    return (
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
    );
  }
}

export default App;
