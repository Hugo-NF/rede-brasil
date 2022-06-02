import { forwardRef } from 'react';
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import {
  AboutUsContainer,
  AboutUsGrid,
  AboutUsText,
  Title,
} from './styles';
import { Images } from '../../constants';

const AboutUs = forwardRef((_, ref) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('lg'));

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ display: 'flex', bgcolor: 'background.main', minHeight: '100vh' }}
    >
      <AboutUsContainer>
        <Grid container spacing={4}>
          {matches && (
            <Grid item xs={6}>
              <img src={Images.AboutUsLogo} height={624} width="auto" alt="about us cover" />
            </Grid>
          )}
          <AboutUsGrid
            item
            xs={12}
            md={6}
          >
            <Title variant="h4" fontSize={59} fontFamily="Source Serif Pro">
              Sobre Nós
            </Title>
            <AboutUsText color="text.secondary" variant="body1">
              A Rede Brasil Drugstore é uma rede de farmácias com a cara do Brasil.
              Nascemos com o propósito de levar você, nosso cliente final, os melhores
              medicamentos com um preço popular e justo de verdade. Nossa missão é
              conectar você a qualidade de vida, cuidando para te servir com o melhor
              atendimento e o menor preço.
            </AboutUsText>
          </AboutUsGrid>
        </Grid>
      </AboutUsContainer>
    </Box>
  );
});

export default AboutUs;
