import styled from '@emotion/styled';

import {
  Box,
  List,
} from '@mui/material';

export const DrawerBoxContent = styled(Box)`
display: flex;
flex: 1;
flex-grow: 1;
flex-direction: column;
min-width: 250px;
padding: 10px 0px;
justify-content: flex-start;
align-items: center;
`;

export const DrawerPageList = styled(List)`
width: 100%;
`;
