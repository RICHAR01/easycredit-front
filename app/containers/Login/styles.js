import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

export const LoginContainer = styled.div`
  float: left;
  width: 100%;
  background: #fafafa;
`;

export const FormContainer = styled.div`
  float: left;
  width: 100%;
  padding: 0 30% 150px 30%;
`;

export const CenterContainer = styled.div`
  float: left;
  width: 100%;
  text-align: center;
`;

export const ImageUser = styled.img`
  height: 180px;
  width: 180px;
`;

export const UsernameField = TextField;

export const LoginButton = styled(Button)`
  color: #fff !important;
  letter-spacing: 2px;
  background: #8865E3 !important;
  border-radius: 40px !important;
  height: 40px;
  padding: 0 60px !important;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.14);
  &&:focus {
    outline: none;
  }
`;
