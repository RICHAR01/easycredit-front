/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Topbar from 'containers/Topbar';
import Login from 'containers/Login/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Admin from 'containers/Admin/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';

import injectReducer from 'utils/injectReducer';

import { AppWrapper } from './styles';
import { restoreUserFromLocalStorage } from './actions';
import reducer from './reducer';
import CreateLoan from '../CreateLoan';

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.restoreUserFromLocalStorage();
  }

  render() {
    return (
      <BrowserRouter>
        <AppWrapper>
          <Helmet
            titleTemplate="%s - EasyCredit"
            defaultTitle="Index"
          >
            <meta name="description" content="EasyCredit App" />
          </Helmet>
          <Topbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin" component={Admin} />
            <Route path="/loans/create" component={CreateLoan} />
            <Route path="" component={NotFoundPage} />
          </Switch>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  restoreUserFromLocalStorage: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    restoreUserFromLocalStorage: () => dispatch(restoreUserFromLocalStorage()),
  };
}

const mapStateToProps = createStructuredSelector({ });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withReducer,
  withConnect,
)(App);
