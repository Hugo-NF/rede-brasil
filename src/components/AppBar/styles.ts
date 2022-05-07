import styled from '@emotion/styled';

import {
  AppBar,
  Button,
} from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  maxHeight: 80px;
`;

export const StyledButton = styled(Button)(() => ({
  ':hover': {
    color: '#F00118',
    backgroundColor: '#FFC61D',
  },
}));
