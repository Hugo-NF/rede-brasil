import { Button, Container, Grid } from '@mui/material';
import styled from '@emotion/styled';

export const ColumnGrid = styled(Grid)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavitemsGrid = styled(Grid)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

export const StyledButton = styled(Button)(() => ({
  ':hover': {
    color: 'black',
    backgroundColor: '#FFC61D',
  },
}));
