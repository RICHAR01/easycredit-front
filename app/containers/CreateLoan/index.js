import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Currency from 'react-currency-formatter';
import { TextField, FormControlLabel, Checkbox, InputLabel, Select,
         MenuItem } from '@material-ui/core';
import Loading from 'components/Loading';
import { changeAmount, changePaymentsQuantity, changeHasCreditCard, changeAge, createLoan } from './actions';
import { makeSelectLoan, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { CreateLoanContainer, FormContainer, FormSpace, Title, InputContainer,
         RequestLoanButton } from './styles';


export class CreateLoan extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { loan, loading, error, onChangeAge, onChangeAmount,
            onChangePaymentsQuantity, onChangeHasCreditCard,
            onCreateLoan } = this.props;

    const loanJS = loan.toJS();
    const { amount, age, paymentsQuantity, hasCreditCard } = loanJS;

    const buttonOrLoading = loading ?
      (<Loading />) :
      (
        <RequestLoanButton
          onClick={onCreateLoan}
          disabled={!amount || !age || !paymentsQuantity}
        >
         SOLICITAR
        </RequestLoanButton>
      );

    const errorMessage = error ?
      (<div>Error al crear préstamo, intente nuevamente. </div>) :
      null;

    const interestByMonths = {
      3: 0.05,
      6: 0.07,
      9: 0.12,
    };
    const interest = interestByMonths[paymentsQuantity];
    const total = (amount || 0) * (1 + interest);
    const totalNode = (<div>Total a pagar: <Currency quantity={total} currency="USD" /></div>);

    return (
      <div>
        <Helmet>
          <title>Solicitar Préstamo - Easycredit</title>
        </Helmet>
        <CreateLoanContainer>
          <FormContainer>
            <FormSpace>
              <Title>Solicitar préstamo</Title>
              <InputContainer>
                <TextField
                  id="amount"
                  label="Monto"
                  type="text"
                  value={amount}
                  onChange={onChangeAmount}
                  margin="normal"
                />
              </InputContainer>
              <InputContainer>
                <TextField
                  id="age"
                  label="Edad"
                  type="text"
                  value={age}
                  onChange={onChangeAge}
                  margin="normal"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel htmlFor="paymentsQuantitySelect">Mensualidades</InputLabel>
              </InputContainer>
              <InputContainer>
                <Select
                  value={paymentsQuantity}
                  onChange={onChangePaymentsQuantity}
                  inputProps={{
                    name: 'paymentsQuantity',
                    id: 'paymentsQuantitySelect',
                  }}
                >
                  <MenuItem value={3}>3 Meses</MenuItem>
                  <MenuItem value={6}>6 Meses</MenuItem>
                  <MenuItem value={9}>9 Meses</MenuItem>
                </Select>
              </InputContainer>
              <InputContainer>
                <FormControlLabel
                  control={<Checkbox onChange={onChangeHasCreditCard} value={hasCreditCard} />}
                  label="Tengo tarjeta de crédito"
                />
              </InputContainer>
              <InputContainer>
                {totalNode}
              </InputContainer>
              <InputContainer>
                {buttonOrLoading}
              </InputContainer>
              <InputContainer>
                {errorMessage}
              </InputContainer>
            </FormSpace>
          </FormContainer>
        </CreateLoanContainer>
      </div>
    );
  }
}

CreateLoan.propTypes = {
  loan: PropTypes.object,
  loading: PropTypes.boolean,
  error: PropTypes.boolean,
  onChangeAge: PropTypes.func,
  onChangeAmount: PropTypes.func,
  onChangePaymentsQuantity: PropTypes.func,
  onChangeHasCreditCard: PropTypes.func,
  onCreateLoan: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAge: (evt) => dispatch(changeAge(evt.target.value)),
    onChangeAmount: (evt) => dispatch(changeAmount(evt.target.value)),
    onChangePaymentsQuantity: (evt) => dispatch(changePaymentsQuantity(evt.target.value)),
    onChangeHasCreditCard: (evt) => dispatch(changeHasCreditCard(evt.target.checked)),
    onCreateLoan: () => dispatch(createLoan()),
  };
}

const mapStateToProps = createStructuredSelector({
  loan: makeSelectLoan(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createLoan', reducer });
const withSaga = injectSaga({ key: 'createLoan', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateLoan);
