import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

export const LoadingContainer = styled.div`
  float: left;
  width: 100%;
  text-align: center;
  padding: ${(props) => (props.size || 0) * 10}px 0;
`;

export const LoadingCircle = CircularProgress;
