import styled from '@emotion/styled';
import { Card, Typography } from '@mui/material';

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: ${(props) => (props.dir)};
  flex: 1;
  padding: 10px 80px;
  min-width: 288px,
  min-height: 350px,
  justify-content: center;
  align-items: center;
`;

export const HeadingText = styled(Typography)`
  font-size: 32px;
  margin-bottom: 4px;
`;

export const Text = styled(Typography)`
  font-size: 18px;
  margin: 4px 0px;
`;
