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
            lg={6}
          >
            <Title variant="h4">
              Sobre Nós
            </Title>
            <AboutUsText color="text.secondary" variant="body1">
              A Rede Brasil Drugstore é uma rede de
              <br />
              farmácias com a cara do Brasil. Nascemos
              <br />
              com o propósito de levar você, nosso cliente
              <br />
              final, os melhores medicamentos com um
              <br />
              preço popular e justo de verdade. Nossa
              <br />
              missão é conectar você a qualidade de vida,
              <br />
              cuidando para te servir com o melhor
              <br />
              atendimento e o menor preço.
            </AboutUsText>
          </AboutUsGrid>
        </Grid>
      </AboutUsContainer>
    </Box>
  );
});

export default AboutUs;
