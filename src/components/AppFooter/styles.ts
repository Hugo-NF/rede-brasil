import { Container, Grid } from '@mui/material';
import styled from '@emotion/styled';

export const ColumnGrid = styled(Grid)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  height: 80px;
`;

export const NavitemsGrid = styled(Grid)`
  display: flex;
  background-color: blue;
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  margin: 2px 0px; 
`;

export const SocialMediaRow = styled(Grid)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;
