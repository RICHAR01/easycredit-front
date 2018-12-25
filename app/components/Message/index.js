import React from 'react';
import PropTypes from 'prop-types';

import { MessageContainer, Image, Title, Subtitle } from './styles';
import errorImage from './imgs/error.svg';

class Message extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, subtitle } = this.props;

    return (
      <MessageContainer>
        <Image src={errorImage} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </MessageContainer>
    );
  }
}

Message.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Message;
