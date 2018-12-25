import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2.5%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
`;

export const ImageContainerLink = styled(Link)`
  float: left;
  height: 50px;
  width: 100px;
  padding: 8px 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const HeaderLink = styled(Link)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  line-height: 50px;
  padding: 0 16px;
  font-size: 16px;
  color: #41ADDD;
  text-decoration: initial;
`;

export const RightContainer = styled.div`
  float: right;
  padding: 12px;
`;

export const Username = styled.div`
  float: left;
  width: 150px;
  padding: 0 16px;
  font-size: 16px;
  color: #41ADDD;
  cursor: pointer;
  text-align: center;
`;

export const LogoutBtn = styled(Link)`
  margin-top: 16px;
  color: #fff;
  background-color: rgb(225, 0, 80);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 4px;
  text-decoration: initial;
  &:hover {
    color: #fff !important;
    text-decoration: initial;
  }
`;
