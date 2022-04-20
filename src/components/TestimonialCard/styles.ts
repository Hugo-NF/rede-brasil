import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: ${(props) => (props.dir)};
  flex: 1;
  padding: 10px 80px;
  min-width: 288px,
  justify-content: center;
  align-items: center;
`;

export const HeadingText = styled(Typography)`
  font-size: 28px;
  margin-bottom: 0px;
`;

export const Text = styled(Typography)`
  font-size: 14px;
  margin-bottom: 4px;
`;
