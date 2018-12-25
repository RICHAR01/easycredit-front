import React from 'react';
import PropTypes from 'prop-types';

import { CardContainer, Title } from './styles';

class Card extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title } = this.props;

    return (
      <div>
        <CardContainer>
          <Title>{title || 'Título'}</Title>
        </CardContainer>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
