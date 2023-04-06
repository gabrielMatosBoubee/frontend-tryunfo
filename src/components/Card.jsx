import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  imgstyle = (parametro) => {
    const styleSemImg = { display: 'none' };
    const styleComImg = { display: 'flex' };
    return parametro.length > 0 ? styleComImg : styleSemImg;
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="CardBorder">
        <div className="Card">
          <div className="items">

            <p
              style={ this.imgstyle(cardName) }
              id="nomeCard"
              data-testid="name-card"
            >
              {cardName}
            </p>
            <img
              style={ this.imgstyle(cardImage) }
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
            />
            <p
              id="descricao"
              data-testid="description-card"
              placeholder=""
            >
              {cardDescription}
            </p>
            <div className="atributos">
              <div className="cardAttr">
                <p>Força .................................................</p>
                <p data-testid="attr1-card" className="cardAttrValue">{cardAttr1}</p>
              </div>
              <div className="cardAttr">
                <p>Defesa ..............................................</p>
                <p data-testid="attr2-card" className="cardAttrValue">{cardAttr2}</p>
              </div>
              <div className="cardAttr">
                <p>Magia ................................................</p>
                <p data-testid="attr3-card" className="cardAttrValue">{cardAttr3}</p>
              </div>
              <p data-testid="rare-card" id="raridade">{cardRare}</p>
            </div>
          </div>
          {cardTrunfo && <p data-testid="trunfo-card" id="seloTrunfo">Super Trunfo</p>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
