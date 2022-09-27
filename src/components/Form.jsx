import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  resolveOlint = (Trunfo) => {
    const { cardTrunfo, onInputChange } = this.props;
    if (Trunfo) return <p>Você já tem um Super Trunfo em seu baralho</p>;
    return (
      <label htmlFor="SuperTrunfo">
        Super Trunfo
        <input
          type="checkbox"
          id="SuperTrunfo"
          name="SuperTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
      </label>);
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <>
        <label htmlFor="nome">
          Nome
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Coloque o nome"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          Descrição da carta
          <textarea
            id="descricao"
            name="descricao"
            placeholder="coloque a descrição aqui"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="primeiro-atributo">
          primeiro-atributo
          <input
            id="primeiro-atributo"
            name="primeiroAtributo"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="segundoAtributo">
          segundo-atributo
          <input
            id="segundoAtributo"
            name="segundoAtributo"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="terceiroAtributo">
          terceiro-atributo
          <input
            id="terceiroAtributo"
            name="terceiroAtributo"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="caminho-para-a-imagem">
          caminho para a imagem
          <input
            id="caminho-para-a-imagem"
            name="imagem"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <select
          id="tipo"
          name="tipo"
          data-testid="rare-input"
          onChange={ onInputChange }
          value={ cardRare }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {this.resolveOlint(hasTrunfo) }
        <button
          type="button"
          name="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
