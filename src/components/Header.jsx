import React from 'react';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { cardName, onInputChange, cardRare, cardTrunfo } = this.props;
    return (
      <header>
        <input
          type="text"
          name="filtroName"
          value={ cardName }
          onChange={ onInputChange }
          disabled={ cardTrunfo }
          data-testid="name-filter"
        />
        <select
          id="tipo"
          name="filtroPorTipo"
          onChange={ onInputChange }
          disabled={ cardTrunfo }
          value={ cardRare }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="Super">
          Super Trunfo
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
