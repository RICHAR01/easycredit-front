import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Loading from 'components/Loading';
import Message from 'components/Message';
import Profile from 'components/Profile';
import Loan from 'components/Loan';
import Card from 'components/Card';

import { getDashboard } from './actions';
import { makeSelectDashboard, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { DashboardContainer, Column, ButtonContainer, ButtonCreate } from './styles';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { fetchDashboard } = this.props;
    fetchDashboard();
  }

  render() {
    const { dashboard, loading, error } = this.props;

    if (loading) {
      return (<Loading size={25} />);
    }
    if (error) {
      return (
        <Message
          title={'Advertencia'}
          subtitle={'No se logró cargar dashboard'}
        />
      );
    }

    const loanHistory = dashboard.loanHistory;
    const pendingLoans = dashboard.pendingLoans;
    const profile = dashboard.profile;

    const loanIdString = '_id';
    const loanHistoryList = loanHistory.map((loan) =>
      (<Loan key={loan[loanIdString]} {...loan} ></Loan>)
    );
    const loanHistoryMsg = (
      <Message
        title={'Historial vacío'}
        subtitle={'No se tienen préstamos en historial'}
      />
    );
    const loanHistoryNode = loanHistory.length ? loanHistoryList : loanHistoryMsg;

    const pendingLoansList = pendingLoans.map((loan) =>
      (<Loan key={loan[loanIdString]} {...loan} ></Loan>)
    );
    const pendingLoansMsg = (
      <Message
        title={'Préstamos vacío'}
        subtitle={'No se tienen préstamos en proceso de verificación'}
      />
    );
    const pendingLoansNode = pendingLoans.length ? pendingLoansList : pendingLoansMsg;

    const userProfileNode = (<Profile user={profile} />);

    return (
      <div>
        <Helmet>
          <title>Dashboard - Easycredit</title>
        </Helmet>
        <DashboardContainer>
          <Column>
            <Card title="Perfil"></Card>
            {userProfileNode}
          </Column>
          <Column>
            <Card title="Historial"></Card>
            {loanHistoryNode}
          </Column>
          <Column>
            <Card title="Préstamos"></Card>
            {pendingLoansNode}
          </Column>

          <ButtonContainer>
            <ButtonCreate to="/loans/create">
              SOLICITAR
            </ButtonCreate>
          </ButtonContainer>

        </DashboardContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.boolean,
  error: PropTypes.boolean,
  fetchDashboard: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    fetchDashboard: () => dispatch(getDashboard()),
  };
}

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
