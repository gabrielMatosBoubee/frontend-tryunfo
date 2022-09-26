import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="nome">
          Nome
          <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Coloque o nome"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          Descrição da carta
          <textarea
            id="descricao"
            name="descricao"
            placeholder="coloque a descrição aqui"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="primeiro-atributo">
          primeiro-atributo
          <input
            id="primeiro-atributo"
            name="primeiro-atributo"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="segundo-atributo">
          segundo-atributo
          <input
            id="segundo-atributo"
            name="segundo-atributo"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="terceiro-atributo">
          terceiro-atributo
          <input
            id="terceiro-atributo"
            name="terceiro-atributo"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="caminho-para-a-imagem">
          caminho para a imagem
          <input
            id="caminho-para-a-imagem"
            name="caminho-para-a-imagem"
            type="text"
            data-testid="image-input"
          />
        </label>
        <select id="tipo" name="tipo" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="SuperTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            id="SuperTrunfo"
            name="SuperTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </>
    );
  }
}

export default Form;
