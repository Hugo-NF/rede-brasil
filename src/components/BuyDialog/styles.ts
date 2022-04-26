/* eslint-disable import/prefer-default-export */
import styled from '@emotion/styled';
import { DialogContent, Typography } from '@mui/material';

export const DialogContentContainer = styled(DialogContent)`
  display: flex;
  flex-direction: column;
`;

export const DialogTitle = styled(Typography)`
  display: flex; 
  flex: 1;
  align-self: center;
  font-size: 32px;
  text-transform: none;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
`;

export const ConfirmBtnText = styled(Typography)`
  display: flex; 
  flex: 1;
  font-size: 18px;
  text-transform: none;
  font-weight: 400;
  color: black;
`;

export const MenuOptionText = styled(Typography)`
  display: flex; 
  flex: 1;
  font-size: 18px;
  text-transform: none;
  font-weight: 400;
  color: black;
`;
