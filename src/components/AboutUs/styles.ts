import styled from '@emotion/styled';
import { Container, Grid, Typography } from '@mui/material';

export const AboutUsContainer = styled(Container)`
  display: flex;
  margin-top: 12%;
  margin-bottom: 5%;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AboutUsGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Title = styled(Typography)`
  color: black;
  margin: 10px 0px;
  font-size: 54px;
`;

export const AboutUsText = styled(Typography)`
  font-weight: 400;
  font-size: 26px;
  margin: 10px 0px;
`;
