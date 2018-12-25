import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Loading from 'components/Loading';

import { changeUsername, loginUser } from './actions';
import { makeSelectUsername, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { LoginContainer, FormContainer, CenterContainer,
         ImageUser, UsernameField, LoginButton } from './styles';
import userImage from './imgs/user.png';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { username, loading, error, onChangeUsername, onLoginClick } = this.props;
    const buttonOrLoading = loading ?
      (<Loading size={1} />) :
      (<LoginButton onClick={onLoginClick}>Ingresar</LoginButton>);
    const errorMessage = error ?
      (<div>Error al realizar login, intente nuevamente. </div>) :
      null;

    return (
      <div>
        <Helmet>
          <title>{'Login - Easycredit'}</title>
        </Helmet>
        <LoginContainer>
          <FormContainer>
            <CenterContainer>
              <ImageUser src={userImage} />
            </CenterContainer>
            <CenterContainer>
              <UsernameField
                id="username"
                label="Nombre de usuario"
                type="text"
                value={username}
                onChange={onChangeUsername}
                margin="normal"
              />
            </CenterContainer>
            <CenterContainer>
              {buttonOrLoading}
              {errorMessage}
            </CenterContainer>
          </FormContainer>
        </LoginContainer>
      </div>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.boolean,
  error: PropTypes.boolean,
  onChangeUsername: PropTypes.func,
  onLoginClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onLoginClick: () => dispatch(loginUser()),
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
