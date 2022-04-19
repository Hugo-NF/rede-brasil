import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export const CarouselContainer = styled(Carousel)`
  width: 100%;
`;

export const TestimonialsContainer = styled(Container)`
  flex: 1;
  min-height: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled(Typography)`
  text-transform: uppercase;
`;
