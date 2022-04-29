import styled from '@emotion/styled';
import { Card, Grid } from '@mui/material';

export const CardComponent = styled(Card)`
  display: flex;
  width: 297px;
  height: 233px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
`;

export const CardGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TextGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
