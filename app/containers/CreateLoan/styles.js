import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const CreateLoanContainer = styled.div`
  float: left;
  width: 100%;
`;

export const FormContainer = styled.div`
  float: left;
  width: 100%;
  padding: 32px 20%;
`;

export const FormSpace = styled.div`
  float: left;
  width: 100%;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 16px;
  border-radius: 4px;
`;

export const Title = styled.div`
  float: left;
  width: 100%;
  color: #505050;
  font-size: 15px;
  font-weight: bold;
  padding: 8px 0;
`;

export const InputContainer = styled.div`
  float: left;
  width: 100%;
  padding-bottom: 8px;
`;

export const RequestLoanButton = styled(Button)`
  color: #fff !important;
  letter-spacing: 1px;
  background: #1faa00 !important;
  height: 40px;
  padding: 0 30px !important;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.14);
  &&:focus {
    outline: none;
  }
  &:disabled {
    color: #505050 !important;
    background: #c1bdb6 !important;
  }
`;
