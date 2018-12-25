import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { unsetUser } from 'containers/App/actions';
import { makeSelectCurrentUsername, makeSelectUserRoleId } from 'containers/App/selectors';

import Logo from './imgs/logo.jpg';
import { TopbarContainer, ImageContainerLink, Image, HeaderLink, RightContainer, Username, LogoutBtn } from './styles';

import reducer from './reducer';
import saga from './saga';

export class Topbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { onLogoutClick, currentUsername, currentRoleId } = this.props;

    const ADMIN_ID = 2;
    const userRole = Number(currentRoleId) === ADMIN_ID ? ' (admin)' : '';

    const usernameNode = currentUsername ?
      (<Username>{currentUsername + userRole}</Username>) :
       null;

    return (
      <div>
        <TopbarContainer>
          <ImageContainerLink to="/">
            <Image src={Logo} alt="none - Logo" />
          </ImageContainerLink>
          <HeaderLink to="/">
            Inicio
          </HeaderLink>
          <RightContainer>
            {usernameNode}
            <LogoutBtn to="/login" onClick={onLogoutClick}>
              Salir
            </LogoutBtn>
          </RightContainer>
        </TopbarContainer>
      </div>
    );
  }
}

Topbar.propTypes = {
  onLogoutClick: PropTypes.func,
  currentUsername: PropTypes.string,
  currentRoleId: PropTypes.string,
};

// NOTE: Aqui van las funciones de los clicks
export function mapDispatchToProps(dispatch) {
  return {
    onLogoutClick: () => dispatch(unsetUser()),
  };
}

// NOTE: Aqui van las variables obtenidas del store
const mapStateToProps = createStructuredSelector({
  currentUsername: makeSelectCurrentUsername(),
  currentRoleId: makeSelectUserRoleId(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topbar', reducer });
const withSaga = injectSaga({ key: 'topbar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Topbar);
