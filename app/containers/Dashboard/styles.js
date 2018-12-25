import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  float: left;
  width: 100%;
`;

export const Column = styled.div`
  float: left;
  width: 33.33%;
  padding: 16px;
`;

export const ButtonContainer = styled.div`
  float: left;
  width: 100%;
  padding: 16px;
  text-align: right;
`;

export const ButtonCreate = styled(Link)`
  color: #fff;
  background-color: rgb(225, 0, 80);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 4px;
  &:hover {
    color: #fff !important;
    text-decoration: initial;
  }
`;
