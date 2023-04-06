import React from 'react';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { cardName, onInputChange, cardRare, cardTrunfo } = this.props;
    return (
      <header>
        <h3>Campo de Busca</h3>
        <input
          type="text"
          name="filtroName"
          className="filtroName"
          value={ cardName }
          onChange={ onInputChange }
          disabled={ cardTrunfo }
          placeholder="Buscar..."
          data-testid="name-filter"
        />
        <select
          id="tipo"
          name="filtroPorTipo"
          onChange={ onInputChange }
          disabled={ cardTrunfo }
          value={ cardRare }
          className="filtroName"
          data-testid="rare-filter"
        >
          <option value="todos">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="Super" className="trunfoFiltrado">
          <h3>Super Trunfo</h3>
          <input
            type="checkbox"
            id="Super"
            name="trunfoFiltrado"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-filter"
          />
        </label>
      </header>
    );
  }
}

Header.propTypes = {
  cardName: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Header;
