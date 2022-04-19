import { forwardRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  // useTheme,
} from '@mui/material';

import {
  CarouselContainer,
  TestimonialsContainer,
  Title,
} from './styles';

// import { Images } from '../../constants';

const items = [
  {
    name: 'Hugo Fonseca',
    description: 'Salve',
  },
  {
    name: 'Matheus',
    description: 'Salve',
  },
];

const SocialMedia = forwardRef((_, ref) => (
  <Box
    ref={ref}
    component="section"
    sx={{ bgcolor: 'red' }}
  >
    <TestimonialsContainer>
      <Title variant="h4" gutterBottom m={5}>
        Clientes que confiam na Rede Brasil
      </Title>
      <CarouselContainer
        interval={5000}
        indicatorContainerProps={{
          style: {
            alignSelf: 'flex-end',
            justifySelf: 'center',
          },
        }}
      >
        {items.map((item) => (
          <Paper sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 250,
            backgroundColor: 'green',
          }}
          >
            <Typography variant="h2">{item.name}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Paper>
        ))}
      </CarouselContainer>
    </TestimonialsContainer>
  </Box>
));

export default SocialMedia;
