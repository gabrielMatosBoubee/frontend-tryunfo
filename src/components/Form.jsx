import React from 'react';
import propTypes from 'prop-types';

class Form extends React.Component {
  resolveOlint = (Trunfo) => {
    const { cardTrunfo, onInputChange } = this.props;
    if (Trunfo) return <p>Você já tem um Super Trunfo em seu baralho</p>;
    return (
      <label htmlFor="SuperTrunfo" className="trunfo">
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
      <div className="forms">
        <h2 className="H2">ADICIONE UMA NOVA CARTA</h2>
        <label htmlFor="nome">
          <h3>Nome</h3>
          <input
            id="nome"
            name="nome"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            maxLength="20"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          <h3>Descrição</h3>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="coloque a descrição aqui"
            value={ cardDescription }
            onChange={ onInputChange }
            maxLength="134"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="primeiro-atributo" className="attr-label">
          <h3>Força</h3>
          <input
            id="primeiro-atributo"
            className="attr-input"
            name="primeiroAtributo"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="segundoAtributo" className="attr-label">
          <h3>Defesa</h3>
          <input
            id="segundoAtributo"
            className="attr-input"
            name="segundoAtributo"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="terceiroAtributo" className="attr-label">
          <h3>Magia</h3>
          <input
            id="terceiroAtributo"
            className="attr-input"
            name="terceiroAtributo"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="caminhoImagem" className="attr-label">
          <h3>Imagem</h3>
          <input
            id="caminhoImagem"
            className="attr-input"
            name="imagem"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="tipo">
          <h3>Raridade</h3>
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
        </label>
        <div className="submit">
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
        </div>
      </div>
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
