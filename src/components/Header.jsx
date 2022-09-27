import React from 'react';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <header>
        <input
          type="text"
          name="filtroName"
          value={ cardName }
          onChange={ onInputChange }
          data-testid="name-filter"
        />

      </header>
    );
  }
}

Header.propTypes = {
  cardName: propTypes.string.isRequired,
  onInputChange: propTypes.func.isRequired,
};

export default Header;
