import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Currency from 'react-currency-formatter';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeSelectUserRoleId } from 'containers/App/selectors';
import { LoanContainer, Title, Separation, Chip, Line, ButtonsContainer,
         ButtonsSpace, ApproveButton, RejectButton } from './styles';

import reducer from './reducer';
import saga from './saga';

class Loan extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { _id, amount, paymentsQuantity, status, age, hasCreditCard,
            total, user, currentRoleId,
            onRejectClick, onApproveClick } = this.props;

    let currenStatusColor = null;
    let statusName = null;
    switch (status) {
      case 'pending':
        statusName = 'Pendiente';
        currenStatusColor = '#ffc107';
        break;
      case 'approved':
        statusName = 'Aprovado';
        currenStatusColor = '#00695f';
        break;
      case 'rejected':
        statusName = 'Rechazado';
        currenStatusColor = '#a31545';
        break;
      default:
        statusName = 'NA';
        currenStatusColor = 'gray';
    }

    const userNode = user ?
      (<Line>
        <Title>Usuario:</Title>
        <span>{user ? user.username : ''}</span>
      </Line>) :
      null;

    const ADMIN_ROLE_ID = 2;
    const actionButtonsNode = Number(currentRoleId) === ADMIN_ROLE_ID ?
      (<ButtonsContainer>
        <ApproveButton onClick={() => onApproveClick(_id)} >
          Aprobar
        </ApproveButton>
        <ButtonsSpace />
        <RejectButton onClick={() => onRejectClick(_id)} >
          Rechazar
        </RejectButton>
      </ButtonsContainer>) :
      null;

    return (
      <LoanContainer>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Title>Monto:</Title>
            <Currency
              quantity={amount}
              currency="USD"
            />
            <Separation />
            <Title>Pagos:</Title>
            {paymentsQuantity}
            <Separation />
            <Chip style={{ background: currenStatusColor }}>
              {statusName}
            </Chip>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Line>
                <Title>Edad:</Title>
                <span>{age}</span>
              </Line>
              <Line>
                <Title>Tarjeta Crédito:</Title>
                <span>{hasCreditCard ? 'Sí' : 'No'}</span>
              </Line>
              <Line>
                <Title>Total:</Title>
                <Currency
                  quantity={total}
                  currency="USD"
                />
              </Line>
              {userNode}
              {actionButtonsNode}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </LoanContainer>
    );
  }
}

Loan.propTypes = {
  _id: PropTypes.string,
  amount: PropTypes.number,
  paymentsQuantity: PropTypes.number,
  status: PropTypes.string,
  age: PropTypes.number,
  hasCreditCard: PropTypes.boolean,
  total: PropTypes.number,
  user: PropTypes.string,
  currentRoleId: PropTypes.string,
  onRejectClick: PropTypes.func,
  onApproveClick: PropTypes.func,
};

// NOTE: Aqui van las funciones de los clicks
export function mapDispatchToProps() {
  return {
  };
}

// NOTE: Aqui van las variables obtenidas del store
const mapStateToProps = createStructuredSelector({
  currentRoleId: makeSelectUserRoleId(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loan', reducer });
const withSaga = injectSaga({ key: 'loan', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Loan);
