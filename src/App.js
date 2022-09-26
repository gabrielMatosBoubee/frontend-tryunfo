import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.State = {
      nome: '',
      descricao: '',
      primeiroAtributo: '',
      segundoAtributo: '',
      terceiroAtributo: '',
      imagem: '',
      tipo: 'normal',
      SuperTrunfo: '',
      hasTrunfo: false,
      button: false,
    };
  }

  onInputChange = ({ event }) => {
    const { name } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = () => {
    this.setState({
      button: true,
    });
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
      button } = this.State;
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
          isSaveButtonDisabled={ () => (button === true) }
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
