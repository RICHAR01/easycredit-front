import React from 'react';
import PropTypes from 'prop-types';

import { LoadingContainer, LoadingCircle } from './styles';

class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { size } = this.props;

    return (
      <div>
        <LoadingContainer size={size}>
          <LoadingCircle />
        </LoadingContainer>
      </div>
    );
  }
}

Loading.propTypes = {
  size: PropTypes.number,
};

export default Loading;
