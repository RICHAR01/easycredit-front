import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const LoanContainer = styled.div`
  float: left;
  width: 100%;
`;

export const Title = styled.div`
  float: left;
  padding-right: 4px !important;
  padding-left: 2px !important;
  color: #505050;
`;

export const Separation = styled.div`
  float: left;
  width: 8px;
`;

export const Chip = styled.div`
  float: left;
  font-size: 14px;
  border-radius: 16px;
  color: #fff;
  padding: 2px 8px 2px 8px !important;
`;

export const Line = styled.div`
  float: left;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  float: left;
  width: 100%;
  padding-top: 16px;
`;

export const ButtonsSpace = styled.div`
  display: inline-block;
  width: 8px;
`;

export const ApproveButton = styled(Button)`
  color: #fff !important;
  letter-spacing: 1px;
  background: #1faa00 !important;
  height: 40px;
  padding: 0 30px !important;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.14);
  &&:focus {
    outline: none;
  }
`;

export const RejectButton = styled(Button)`
  color: #fff !important;
  letter-spacing: 1px;
  background: #d50000 !important;
  height: 40px;
  padding: 0 30px !important;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.14);
  &&:focus {
    outline: none;
  }
`;
